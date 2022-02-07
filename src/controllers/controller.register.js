//model
const Register = require("../models/model.register.js");
//errors
const Boom = require("@hapi/boom");

module.exports = {
	createOne: async (req, res) => {
		try {
			const { email, pass } = req.body;

			const register = new Register({ email, pass });

			await register.save();

			res.json("registo correcto");
		} catch (error) {
			res.json(Boom.badData(error));
		}
	},
};
