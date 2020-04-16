// Variables de entorno
require('dotenv').config()

const express = require('express');
const app = express();
//for providing a Connect/Express middleware
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
require('./database/mongodb.js');

// Middlewares 
app.use(express.json()); //-> nos habilita el req.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Endpoints
app.get('/', (req, res) => res.json('Welcome to APIMarket'));

app.get('/docs', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// Routes

app.use('/api/v1', require('./router'));

// Encender servidor
app.listen(port, () => console.log(`Server listening on port ${port}`));