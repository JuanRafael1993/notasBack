const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schemaCard = new Schema({
	titulo: { type: String, required: true },
	nota: { type: String, required: true },
});

module.exports = model("Card", schemaCard);
