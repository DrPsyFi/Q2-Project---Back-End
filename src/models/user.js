const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getOneByUserName(username){
  return (
    db('users')
    .where({ username })
    .first()
  )
}

function getAllRecipe(userid){
  console.log('model', userid)
  return (
    db('recipes')
    .where({ users_id: userid })
  )
}

function getOneRecipe(userid, recipeid){
  return (
    db('recipes')
    .where({ users_id: userid , id: recipeid})
    .first()
  )
}


function getNotes(userid, recipesid) {
  return (
    db('notes')
    .where({users_id: userid , recipes_id: recipesid})
  )
}


//////////////////////////////////////////////////////////////////////////////
// Create a user
//
// 1. Check to see if user already exists
//   a. if so, return a 400 with appropriate error message
// 2. Hash password
// 3. Insert record into database
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function create(username, password){

  // check to see of user already exists
  return getOneByUserName(username)
  .then(function(data){
    // if user already exists, return 400
    if(data) throw { status: 400, message:'User already exists'}

    // hash password
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){

    // 3. Insert record into database
    return (
      db('user')
      .insert({ username, password: hashedPassword })
      .returning('*')
    )
  })
  .then(function([data]){
    // 4. strip hashed password away from object
    delete data.password
    // 5. "return/continue" promise
    return data
  })
}

function createRecipe(users_id,recName, instructions, ingredients, picture) {
  return (
    db('recipes')
    .insert({users_id, recName, instructions, ingredients, picture})
    .returning('*')
  )
  .then(function([data]){
    console.log(data)
    return data
  })
}

function createNotes(users_id, recipes_id, notes, rating) {
  return (
    db('notes')
    .insert({users_id, recipes_id, notes, rating})
    .returning('*')
  )
  .then(function([data]){
    console.log(data)
    return data
  })
  }

function updateRecipe(id, ingredients, instructions ) {
  return (
    db('recipes')
    .where({id: id})
    .update({ ingredients, instructions})
    .returning('*')
  )
  .then(function([data]){
    console.log(data)
    return data
  })
  }

function deleteRecipe(id) {

  return (
    db('notes')
    .delete()
    .where({recipes_id: id})
  ).then(function(){
    return db("recipes")
    .delete()
    .where({id})
    .returning('*')
  })
  .then(function([data]){
    console.log(data)
    return data
  })
  }

module.exports = {
  getOneByUserName,
  getAllRecipe,
  getOneRecipe,
  getNotes,
  create,
  createRecipe,
  createNotes,
  deleteRecipe,
  updateRecipe,
}
