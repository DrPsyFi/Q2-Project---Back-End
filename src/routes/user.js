const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get("/:userid/recipes", userController.getAllRecipe)
router.get("/:userid/recipes/:recipeid", userController.getOneRecipe)
router.get("/:userid/recipes/:recipeid/notes", userController.getNotes)
router.post('/', userController.create)
router.post("/:userid/recipes", userController.createRecipe )
router.post("/:userid/recipes/:recipeid/notes/", userController.createNotes)
router.delete("/:userid/recipes/:recipeid", userController.deleteRecipe)

module.exports = router
