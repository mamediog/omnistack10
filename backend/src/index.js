const express = require('express')
const mongoose = require ('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://oministack:oministack@cluster0-avj1e.mongodb.net/omini10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)


//Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:
// Query Params: req.query (Filteros, Ordenação, Páginação, ..)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)