const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");
const validate = require("../middlewares/validateData");
const schemaLogin = require("../schemas/schemaLogin");

const { validateOne, getAll } = require("../controllers/controller.login");

router.post("/", validate(schemaLogin), validateOne);
router.get("/", verifyToken, getAll);

module.exports = router;
