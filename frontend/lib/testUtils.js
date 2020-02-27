import casual from 'casual';

// seed it so we get consistent results
casual.seed(777);

const fakeItem = () => ({
  __typename: 'Item',
  id: 'abc123',
  listPrice: 180000,
  bestPrice: 155200,
  category: 100,
  reference: '15523',
  title: 'LA MER The Moisturizing Soft Cream',
  description:
    'An ultra-soft face moisturizer that nurtures for beautiful, glowing radiance, leaving skin looking naturally brightened, hydrated, and restored.',
  image: 'laMer.jpg',
  largeImage: 'largelaMer.jpg',
});

const fakeUser = () => ({
  __typename: 'User',
  id: '4234',
  name: casual.name,
  email: casual.email,
  permissions: ['ADMIN'],
  birthday: '1996-03-08T14:18:00.000Z',
  creditCards: [],
  phone: casual.phone,
  balance: 1800,
  orders: [],
  cart: [],
});

const fakeOrderItem = () => ({
  __typename: 'OrderItem',
  id: casual.uuid,
  image: `${casual.word}.jpg`,
  title: casual.words(),
  listPrice: 4234,
  bestPrice: 4234,
  quantity: 1,
  description: casual.words(),
});

const fakeOrder = () => ({
  __typename: 'Order',
  id: 'ord123',
  charge: 'ch_123',
  total: 400,
  cashback: 5,
  paymentMethod: 'stripe',
  items: [fakeOrderItem(), fakeOrderItem()],
  status: ['APROVED'],
  createdAt: '2020-02-17T01:52:31.269Z',
  user: fakeUser(),
});

const fakeCartItem = overrides => ({
  __typename: 'CartItem',
  id: 'omg123',
  quantity: 3,
  item: fakeItem(),
  user: fakeUser(),
  ...overrides,
});

// Fake LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

export { LocalStorageMock, fakeItem, fakeUser, fakeCartItem, fakeOrder, fakeOrderItem };
