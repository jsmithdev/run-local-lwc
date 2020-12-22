const shell = require('shelljs')
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4242;

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors( corsOptions ))
app.use(express.json())

app.get('/runner',(req, res) => {

    const response = shell.ls('.')

    res.end(JSON.stringify( { response } ))
})

app.listen(port,() => {
    console.log(`Started on ${port} @ ${new Date()}`)
})