import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors' 
import base from './base.js'

const porta = process.env.PORTA

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API está online!')
})

app.get('/mensagem', (req,  res) =>{
    const msg = {message: 'Todo mundo Feliz na aula!'}
    res.status(200).json(msg)
})

app.get('/clientes', (req, res)=>{
    const clientes = base()
    res.status(200).json(clientes)
})

app.listen(porta, () => {
    console.log('Servidor truando...')
})  