const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3001, () => {
    console.log('Slave Server 1 \nPorta: 3001')
})

app.post('/op', (req, res) => {
    const operacao = req.body.op.split('+')
    const num1 = parseInt(operacao[0])
    const num2 = parseInt(operacao[1])
    console.log(num1 + num2)
})