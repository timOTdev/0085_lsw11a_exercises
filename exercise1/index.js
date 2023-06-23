// pull in express
const express= require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const port = 8000;

// instantiate your server
const app = express();
app.use(express.json(), logger('combined'), cors(), helmet());
// app.use(express.json());
// app.use(logger('combined'));
// app.use(cors());
// app.use(helmet());

// middlewares
// const logger = (req, res, next) => {
//   // next will be called in EVERY piece of middleware we build
//   // it will determine when to go, to the next piece of middleware.
//   console.log(`${Date.now()} ${req.method} made to ${req.url}`);
//   next();
// };
// app.use(logger);

const greeter = (req, res, next) => {
  req.section = 'FSW-13';
  next();
}

const yell = (req, res, next) => {
  const newName = req.params.name.toUpperCase();
  req.name = newName;
  next();
}

// built a GET endpoint to `/` that returns the string hello world to the client.
app.get('/', (req, res) => {
  res.send('Hello World');
})
app.get('/rapha', (req, res) => {
  res.send('I am Raphael');
})
app.get('/section', greeter, (req, res) => {
  res.send(`Hello ${req.section}, I <3 U!`);
})
app.get('/name/:name', yell, greeter, (req,res) => {
  res.send(`${req.name} is in ${req.section}`);
})

// call server.listen w/ a port of your choosing
app.listen(port, () => console.log(`===Port ${port} is running===`));

// hit your port+/ to see "hello wold!"