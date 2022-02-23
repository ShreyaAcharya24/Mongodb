var router = require("express").Router()

var dbUserController = require("./db-controller")

router.post("/users",dbUserController.signupdb)
router.get("/getall",dbUserController.getAllUsers)

module.exports = router