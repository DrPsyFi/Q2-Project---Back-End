
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const authController = require('./controllers/auth')

if(process.env.NODE_ENV !== 'production'){
  require('dotenv').load()
}


const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())



//////////////////////////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////////////////////////

app.use('/auth', require('./routes/auth'))
app.use('/user', require('./routes/user'))
app.use('/recipe', require('./routes/recipe'))
app.use('/notes', require('./routes/notes'))



app.get('/recipe',(req, res) => {
  knex('recipe').then((recipe) => {
    res.send(recipe)
  })
})

app.get('/recipe/:id',(req, res) => {
  let recipieId =req.params.id
  knex('recipe').where("id", recipieId).first()
  .then((recipe) => {

    res.send(recipe)
  })
})


//////////////////////////////////////////////////////////////////////////////
// Default Route
//////////////////////////////////////////////////////////////////////////////

app.use(function(req, res, next){
  next({status: 404, message: 'Route not found' })
})

//////////////////////////////////////////////////////////////////////////////
// Error Handling
//////////////////////////////////////////////////////////////////////////////
app.use(function(err, req, res, next){
  const errorMessage = {}

  if(process.env.NODE_ENV !== 'production' && err.stack)
    errorMessage.stack = err.stack

  errorMessage.status = err.status || 500
  errorMessage.message = err.message || 'Internal Server Error'

  res.status(errorMessage.status).send(errorMessage)
})


//////////////////////////////////////////////////////////////////////////////
// Starting Server
//////////////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`Yo ho! listening on port ${port} Yo!`)
})


//module.exports = app
