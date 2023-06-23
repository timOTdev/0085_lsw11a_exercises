const express = require('express');
const raceRoutes = require('./races/raceRoutes');
const server = express();

server.use('/races', raceRoutes);
server.use('/', (req, res) => res.send('API up and running!'));

// using port 9000 for this example
server.listen(9000, () => console.log('API running on port 9000'));