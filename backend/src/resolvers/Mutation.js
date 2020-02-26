const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { randomBytes } = require("crypto");
const { promisify } = require("util");
const { hasPermission } = require("../utils");
const stripe = require("../stripe");
const { transport, Email } = require("../mail");

const Mutations = {
  async createItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that");
    }

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          user: {
            connect: {
              id: ctx.request.userId
            }
          },
          ...args
        }
      },
      info
    );

    console.log(item);

    return item;
  },
  updateItem(parent, args, ctx, info) {
    // copy of the updates
    const updates = { ...args };
    // remove the ID from updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },

  async deleteItem(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in to do that");
    }

    const where = { id: args.id };
    const item = await ctx.db.query.item(
      {
        where
      },
      `{ id title user { id }}`
    );

    console.log(item);

    const ownsItem = item.user.id === ctx.request.userId;
    const hasPermissions = ctx.request.user.permissions.some(permission =>
      ["ADMIN", "ITEMDELETE"].includes(permission)
    );

    if (!ownsItem && hasPermissions) {
      throw new Error("You don't have permission to do that!");
    }

    return ctx.db.mutation.deleteItem({ where }, info);
  },

  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    args.document = args.document.match(/\d+/g).join("");
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] },
          badges: {
            set: ["BeautyPartner"]
          }
        }
      },
      info
    );

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return user;
  },

  async signin(parent, { email, password, remember }, ctx, info) {
    const user = await ctx.db.query.user({ where: { email } });
    if (!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Invalid Password`);
    }

    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

    console.log(token);

    if (remember) {
      ctx.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365
      });
    } else {
      ctx.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 30
      });
    }

    console.log(user);

    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie("token");
    return { message: "Goodbye!" };
  },

  async requestReset(parent, args, ctx, info) {
    const user = await ctx.db.query.user({ where: { email: args.email } });

    if (!user) {
      throw new Error(`No such user found for email ${args.email}`);
    }

    const randomBytesPromiseified = promisify(randomBytes);
    const resetToken = (await randomBytesPromiseified(20)).toString("hex");
    const resetTokenExpiry = Date.now() + 3600000;
    const res = await ctx.db.mutation.updateUser({
      where: { email: args.email },
      data: { resetToken, resetTokenExpiry }
    });

    const mailRes = await transport.sendMail({
      from: "contact@beautypartner.com",
      to: user.email,
      subject: "Your Password Reset Token",
      html: Email(`
                    Your password reset token is here: \n\n 
                    <a href="${process.env.FRONTEND_URL}/account/resetPassword?resetToken=${resetToken}">
                        Click Here to Reset
                    </a>`)
    });

    return { message: "Success! We send to your e-mail the next steps" };
  },

  async resetPassword(parent, args, ctx, info) {
    // check if passwords match
    if (args.password !== args.confirmPassword) {
      throw new Error("Passwords don't match!");
    }

    // check if this token is legit or expired
    const [user] = await ctx.db.query.users({
      where: {
        resetToken: args.resetToken,
        resetTokenExpiry_gte: Date.now() - 3600000
      }
    });
    if (!user) {
      throw new Error("This token is either invalid or expired");
    }

    // Hash new password
    const password = await bcrypt.hash(args.password, 10);

    // save new password and remove old resetToken fields
    const updatedUser = await ctx.db.mutation.updateUser({
      where: { email: user.email },
      data: {
        password,
        resetToken: null,
        resetTokenExpiry: null
      }
    });

    // generate JWT
    const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

    // set the JWT cookie
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return updatedUser;
  },

  async updatePermissions(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error("You must be logged in!");
    }
    const currentUser = await ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
    hasPermission(currentUser, ["ADMIN", "PERMISSIONUPDATE"]);

    return ctx.db.mutation.updateUser(
      {
        data: {
          permissions: {
            set: args.permissions
          }
        },
        where: {
          id: args.userId
        }
      },
      info
    );
  },

  updateInfos(parent, args, ctx, info) {
    // if(!ctx.request.userId){
    //     throw new Error('You must be logged in!');
    // }

    return ctx.db.mutation.updateUser(
      {
        data: {
          name: args.name,
          birthday: args.birthday,
          document: args.document,
          phone: args.phone
        },
        where: {
          id: args.id
        }
      },
      info
    );
  },

  updateAvatar(parent, args, ctx, info) {
    // if(!ctx.request.userId){
    //     throw new Error('You must be logged in!');
    // }

    return ctx.db.mutation.updateUser(
      {
        data: {
          avatar: args.avatar
        },
        where: {
          id: args.id
        }
      },
      info
    );
  },

  async addToCart(parent, args, ctx, info) {
    const userId = ctx.request.userId;
    if (!userId) {
      return null;
    }

    const [existingCartItem] = await ctx.db.query.cartItems({
      where: {
        user: { id: userId },
        item: { id: args.id }
      }
    });

    if (existingCartItem) {
      return ctx.db.mutation.updateCartItem(
        {
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 }
        },
        info
      );
    }

    return ctx.db.mutation.createCartItem(
      {
        data: {
          user: {
            connect: { id: userId }
          },
          item: {
            connect: { id: args.id }
          }
        }
      },
      info
    );

    // Logout method to add to cart
  },

  async removeFromCart(parent, args, ctx, info) {
    const cartItem = await ctx.db.query.cartItem(
      {
        where: {
          id: args.id
        }
      },
      `{ id, user { id }}`
    );

    if (!cartItem) throw new Error("No CartItem Found!");

    if (cartItem.user.id !== ctx.request.userId) {
      throw new Error("This is not your cart!");
    }

    return ctx.db.mutation.deleteCartItem(
      {
        where: { id: args.id }
      },
      info
    );
  },

  async createOrder(parent, args, ctx, info) {
    const userId = ctx.request.userId;
    if (!userId)
      throw new Error("You must be signed in to complete this order.");

    const user = await ctx.db.query.user(
      { where: { id: userId } },
      `{
                id 
                name
                email 
                balance
                badges
                permissions
                cart { 
                    id 
                    quantity 
                    item { 
                        title 
                        listPrice 
                        bestPrice 
                        id 
                        description 
                        image 
                        largeImage
                    }
                }
            }`
    );
    let cashbackPercent = 5;
    user.badges.reduce(badge => {
      if (badge == "Diamond") return cashbackPercent = 20; // 20
      if (badge == "SeasonLeader") return cashbackPercent = 15; // 15
      if (badge == "RisingStar") return cashbackPercent = 10; // 10
      if (badge == "BeautyPartner") return cashbackPercent = 5; // 5
      ctx.db.mutation.updateUser({
        where: { id: userId },
        data: {
          badges: {
            set: [...user.badges, "BeautyPartner"]
          }
        }
      });
      return cashbackPercent = 5;
    });

    console.log("cashbackpercent total " + cashbackPercent);
    let total = user.cart.reduce(
      (tally, cartItem) => tally + cartItem.item.bestPrice * cartItem.quantity,
      0
    );
    // console.log(total);
    const amount = total - ((total * cashbackPercent) / 100);

    // console.log(amount);

    console.log(`Going to charge for a total of ${amount}`);

    const orders = await ctx.db.query.orders({
      where: { 
          user: {
              id: ctx.request.userId
          } 
      }
    }, info)

    // Convert CartItems to OrderItems
    const orderItems = user.cart.map(cartItem => {
      const orderItem = {
        ...cartItem.item,
        quantity: cartItem.quantity,
        user: { connect: { id: userId } }
      };
      delete orderItem.id;
      return orderItem;
    });

    // Create Order
    const order = await ctx.db.mutation
      .createOrder({
        data: {
          total: amount,
          paymentMethod: args.paymentMethod,
          items: { create: orderItems },
          user: { connect: { id: userId } },
          status: { set: ["VALIDATING"] },
          cashback: cashbackPercent
        }
      })
      .catch();

    // Clean cart, delete items
    const cartItemIds = user.cart.map(cartItem => cartItem.id);
    await ctx.db.mutation.deleteManyCartItems({
      where: {
        id_in: cartItemIds
      }
    });

    const stripeAmount = amount * 100
    
    if (args.paymentMethod == "stripe") {
      const charge = await stripe.charges.create({
        amount: stripeAmount,
        currency: "USD",
        source: args.token
      });

      const chargeOrder = await ctx.db.mutation.updateOrder({
        where: { id: order.id },
        data: {
          charge: charge.id,
          status: { set: ["APROVED"] }
        }
      });

      const updateBalance = await ctx.db.mutation.updateUser({
        where: { id: userId },
        data: {
          balance: user.balance + ((total * cashbackPercent) / 100)
        }
      });
    
      // Badges
      const firstOrder = await user.badges.some(badge => 
        badge == "FirstOrder"
      );

      const Prospecter = await user.badges.some(badge => 
        badge != "Prospecter" && orders.length >= 20
      );

      const Influencer = await user.badges.some(badge => 
        badge != "Influencer" && orders.length >= 60
      );


      if(firstOrder){
        ctx.db.mutation.updateUser({
          where: { id: userId },
          data: {
            badges: {
              set: [...user.badges, "FirstOrder"]
            }
          }
        });
      }
      
      if(Prospecter){
        console.log(orders.length)
        ctx.db.mutation.updateUser({
          where: { id: userId },
          data: {
            badges: {
              set: [...user.badges, "Prospecter"]
            }
          }
        });
      }

      if(Influencer){
        console.log(orders.length)
        ctx.db.mutation.updateUser({
          where: { id: userId },
          data: {
            badges: {
              set: [...user.badges, "Influencer"]
            }
          }
        });
      }

      return chargeOrder;

    } else {
      return order;
    }
  }
};

module.exports = Mutations;
