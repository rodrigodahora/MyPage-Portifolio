const nodemailer = require('nodemailer');

const transportador = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b094c38dbc9195",
        pass: "1cd25e5c686d03"
    }
});

module.exports = transportador;