const express = require("express");
const userController = require("../Controller/userController"); 
const userRoute = express.Router();

userRoute.route("/")
    .get(userController.getAllData)
    .post(userController.createData);

userRoute.route("/:id")
    .get(userController.getData)
    .put(userController.updateData)
    .delete(userController.deleteData);

module.exports = userRoute;