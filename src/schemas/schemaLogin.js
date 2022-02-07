const Joi = require("@hapi/joi");

const schema = Joi.object({
	email: Joi.string().min(3).max(20).required(),
	pass: Joi.string().min(3).max(15).required(),
});

module.exports = schema;
