const express= require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
})

const port = 8000;
app.listen(port, console.log(`===Port ${port} is running===`));
