const {mensagem, email, nome, assunto} = require('./src/Main/index.js');
const transportador = require('./email');

const env = require('node:process')

const envio = async (req, res) => {
    const {nome, email, mensagem} = req.body

    if(!nome){
        return res.status(400).json({mensagem: 'Se identifique!'})
    }

    if(!email){
        return res.status(400).json({mensagem: 'Precisa informar o email!'})
    }

    if(!mensagem){
        return res.status(400).json({mensagem: 'Escreva sua mensagem!'})
    }

    //Fazer envio de email

    transportador.sendMail({
        from: `${nome} <${email}>`,
        to: '"Rodrigo Natan " <dahoradev10@gmail.com>',
        text: mensagem
    })

    return res.json({mensagem: 'Email enviado com sucesso'})
}

module.exports = envio;