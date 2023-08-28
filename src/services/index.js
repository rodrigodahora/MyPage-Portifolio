require('dotenv').config()

const envio = require('./controlador');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/email', envio);

app.listen(3000);