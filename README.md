<!-- ABOUT THE PROJECT -->
## About The Project

This project is consists of a very basic clone of reddit. It's a website where you can make and view and vote posts, you or some body else made.

Features:
* Register
* Login
* Logout
* Create posts
* Up/Down vote posts
* Edit posts
* Recover lost passwords

This website features cookie authentication for security.



### Built With

Those are the frameworks/libraries used to build this server.

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [PostgreSQL](https://www.postgresql.org/)
* [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
* [Redis](https://redis.com/)
* [TypeORM](https://typeorm.io/#/)
* [TypeGraphQL](https://typegraphql.com/)



<!-- GETTING STARTED -->
## Getting Started

In order to try this locally you you may also want to download and run the [client side](https://github.com/CristianCiubancan/reddit-client).

### Prerequisites

To run this project you will need to do the following:
* yarn
  ```sh
  npm install --global yarn
  ```
* Install redis for [Windows](https://github.com/microsoftarchive/redis/releases/tag/win-3.0.504) or for [other operating systems](https://redis.io/download)
* Install [PostgreSQL](https://www.postgresql.org/download/)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/CristianCiubancan/reddit-server
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Edit the `.env` file
4. build the js version or watch for changes
   ```sh
   yarn watch
   ```
5. Run the server
   ```sh
   yarn dev
   ```
