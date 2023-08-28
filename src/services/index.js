require('dotenv').config()

const envio = require('./controlador');

const express = require('express');

const app = express();

app.use(express.json());

app.post('/email', envio);

app.listen(3000);