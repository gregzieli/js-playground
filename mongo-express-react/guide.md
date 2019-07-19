# Guide

## Server

[CLICK](https://www.robinwieruch.de/minimal-node-js-babel-setup/)

[Best just follow this, it is slightly better](https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/)

```sh
npx express-generator --no-view --git server
cd server
npm install
```

Move the source code to src/ folder  
**This requires changing all the relative paths!!**

```sh
npm install --save-dev nodemon
npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env
touch .babelrc
```

In package.json:

```json
"scripts.start": "nodemon --exec babel-node ./bin/www"
```

Environment variables:

```sh
touch .env
npm install dotenv --save
npm install dotenv-expand --save
```

```js
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

var myEnv = dotenv.config()
dotenvExpand(myEnv)
```

Database:

```sh
npm install mongoose --save
```

Run the server:

```sh
set DEBUG=server:* & npm start
```

## Client

```sh
npx create-react-app client
cd client
npm install --save react-router-dom
```

In package.json:

```json
"proxy": "http://localhost:<server-port>"
```
