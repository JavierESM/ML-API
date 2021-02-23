const express = require('express');
const router = express.Router();

const apiController =  require("../../controllers/api/apiController")

router.post("/items", apiController.addCart)
router.delete("/items", apiController.deleteCart)


module.exports = router