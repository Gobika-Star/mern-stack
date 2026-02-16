const express = require("express");
const router = express.Router();
const menuController = require("../Controller/menuController");

router.get("/menu", menuController.getAllMenuItems);
router.post("/menu", menuController.createMenuItem);

module.exports = router;