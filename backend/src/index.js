const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')
const http = require('http')

const routes = require('./routes')
const {setUpWebsocket} = require('./websocket')

const app = express()
const server = http.Server(app)

setUpWebsocket(server);

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-avj1e.mongodb.net/omini10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)


//Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: req.query (Filteros, Ordenação, Páginação, ..)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)