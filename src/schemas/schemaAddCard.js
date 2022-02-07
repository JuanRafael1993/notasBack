const Joi = require("@hapi/joi");

const schema = Joi.object({
	titulo: Joi.string().min(1).max(15).required(),
	nota: Joi.string().min(1).max(80).required(),
});

module.exports = schema;
