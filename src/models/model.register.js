const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schemaRegister = new Schema({
	email: { type: String, require: true },
	pass: { type: String, require: true },
});

module.exports = model("Register", schemaRegister);
