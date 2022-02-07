const express = require("express");
const router = express.Router();

const { createOne } = require("../controllers/controller.register.js");

router.post("/", createOne);

module.exports = router;
