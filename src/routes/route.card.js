const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const validate = require("../middlewares/validateData");
const schemaAddCard = require("../schemas/schemaAddCard");

const { createOne, getAll } = require("../controllers/controller.card");

router.post("/", verifyToken, validate(schemaAddCard), createOne);
router.get("/", verifyToken, getAll )

module.exports = router;
