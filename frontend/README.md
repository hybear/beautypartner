About Beauty Partner
==============================

## The Project
This is a project that is part of a test to work at Grupo Boticário.

#### Overview
The challenge was to develop an application to register new partners, and create a dashboard to group information of the orders placed and the cashback of each purchase.  
#### Orders
To make the order flow I developed a shopping system through a cart, where the customer searches and adds products in his bag, to effect the purchase the Stripe payments API was integrated, this API returns to my server if the value has been computed from the credit card, if everything is right, the order is "APPROVED", otherwise its status is "IN VALIDATION".  
  
#### Cashback
Each order placed on the platform returns to the user a percentage of the amount as a balance.  

#### Badge System
A reward system with different levels has been created, each badge received provides some reward that can be more cashback, balance or prizes when buying products.  

#### Profile
Each registered user has his own customized space to change his avatar, edit his information and reset his password, Mailtrap.io was used to manage passwords and logins.  

## Stack
SSR application on top of Next 9 features and Backend GraphQL on AWS.  

#### Frontend
For Frontend I chose to develop a **React** application in **Next.js** with Server Side Rendering in order to guarantee SEO and Performance, the **Apollo Client** was used to make Queries and Mutations in my Backend, to stylize the components I used CSS-IN-JS with **Styled Components**, some animations and interactions were imported using **Lottie**, background and compositions use **Three.js**, the unit tests were written using **Jest** and **Enzyme**, finally to keep everything standardized during development I used **Prettier** to format my code.  

#### Backend
The application root was created with **Node.js**, the database was used a **MySQL** instance of **Prisma** and to generate the **GraphQL** endpoint I used the **Yoga Server**, authentications are made via a cookie using **Token JWT** which can persist according to the user's wishes during login, and the images that are registered are sent to **Cloudinary** where has pre-defined tasks for handling and storing them, to close orders an integration with **Stripe** has been added.  

#### CI/CD
The continuous integration flow is linked to my GitHub through **Circle CI**, and **Snyk** to ensure security on the premises.  


#### Deploy
The Backend is now in an instance on AWS ([Link for Playground](https://cgsy71zgc1.execute-api.eu-west-1.amazonaws.com/staging/)) and for Frontend I'm uploading a Serverless instance to use the best SSR and Lambda resources.
