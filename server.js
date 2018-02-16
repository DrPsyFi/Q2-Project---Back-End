const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
app.use(morgan('dev'))
app.use(bodyParser.json())

/// ROUTER FILE STARTED ///
// const routes = require(./Router)
// app.use(routes)

const cors = require('cors')
app.use(cors())
const knex = require('./db')

app.get('/recipes',(req, res) => {
  knex('recipes').then((recipe) => {
    console.log(recipe)
    res.send(recipe)
  })
})

app.get('/recipes/:id',(req, res) => {
  let recipieId =req.params.id
  knex('recipes').where("id", recipieId).first()
  .then((recipe) => {
    res.send(recipe)
  })
})

app.use((err, req,res,next) => {
  const status = err.status || 500
  res.status(status).json({error: err })
})

app.use((req, res, next) => {
  res.status(404).json({error: {message: 'Not Found'}})
})

const listener = () => console.log(`Yo ho! listening on port ${port} Yo!`)
app.listen(port, listener)

module.exports = app
