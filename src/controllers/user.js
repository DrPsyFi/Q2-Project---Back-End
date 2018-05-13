 const userModel = require('../models/user')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function create(req, res, next){
  if(!req.body.username){
    return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad username'})
  }

  userModel.create(req.body.username, req.body.password)
  .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
}

function createRecipe(req, res, next) {
  if(!req.body.recipeName) {
      return next({ status: 400, message: 'Bad recipe name'})
    }

    if(!req.body.recipeIngredients){
      return next({ status: 400, message: 'Bad ingredients'})
    }
    if(!req.body.recipeInstructions){
      return next({ status: 400, message: 'Bad instructions'})
    }

    userModel.createRecipe(req.params.userid,req.body.recipeName, req.body.recipeIngredients, req.body.recipeInstructions,req.body.recipePicture)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
  }


function getAllRecipe(req, res, next ) {

  userModel.getAllRecipe(req.params.userid)
  .then(function(data){

    return res.status(200).send({ data })
  })
  .catch(next)
}

function getOneRecipe(req, res, next) {
  userModel.getOneRecipe(req.params.userid, req.params.recipeid)
  .then(function(data){
    return res.status(200).send( { data })
  })
  .catch(next)
}

function getNotes(req, res, next) {
  userModel.getNotes(req.params.userid, req.params.recipeid)
  .then(function(data){
    return res.status(200).send( { data })
  })
  .catch(next)
}

function createNotes(req, res, next) {

    if(!req.body.notes){
      return next({ status: 400, message: 'no notes'})
    }

    userModel.createNotes(req.params.userid, req.params.recipeid, req.body.notes, req.body.rating)
    .then(function(data){
      return res.status(201).send({ data })
    })
    .catch(next)
  }

function deleteRecipe(req, res, next) {

  if(!req.params.recipeid) {
    return next({ status:400, message: "No recipe with that id."})
  }
  userModel.deleteRecipe(req.params.recipeid)
  .then(function(data){
    return res.status(201).send({ data })
  })
}

function updateRecipe(req, res, next) {
  if(!req.params.recipeid) {
    return next({ status:400, message: "There is no recipe with that Id."})
  }
  userModel.updateRecipe(req.params.recipeid)
  .then(function(data){
    return res.status(201).send({ data })
  })
  }

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
  create,
  createRecipe,
  getAllRecipe,
  getOneRecipe,
  getNotes,
  createNotes,
  deleteRecipe,
  updateRecipe,
}
