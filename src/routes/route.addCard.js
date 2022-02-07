const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const validate = require("../middlewares/validateData");
const schemaAddCard = require("../schemas/schemaAddCard");

const { createOne } = require("../controllers/controller.addCard");

router.post("/", verifyToken, validate(schemaAddCard), createOne);

module.exports = router;
