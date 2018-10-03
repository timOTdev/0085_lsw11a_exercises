// pull in express
const express= require('express');

// instantiate your server
const app = express();
app.use(express.json());

// middlewares
const logger = (req, res, next) => {
  // next will be called in EVERY piece of middleware we build
  // it will determine when to go, to the next piece of middleware.
  console.log(`${Date.now()} ${req.method} made to ${req.url}`);
  next();
};
server.use(logger);

// built a GET endpoint to `/` that returns the string hello world to the client.
app.get('/', (req, res) => {
  res.send('Hello World');
})
server.get('/rapha', (req, res) => {
  res.send('I am Raphael');
});

// call server.listen w/ a port of your choosing
const port = 8000;
app.listen(port, () => console.log(`===Port ${port} is running===`));

// hit your port+/ to see "hello wold!"