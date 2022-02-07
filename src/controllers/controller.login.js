//model
const Register = require("../models/model.register");
//errors
const Boom = require("@hapi/boom");
//token
const jwt = require("jsonwebtoken");

module.exports = {
	getAll: async (req, res) => {
		try {
			const result = await Register.find();

			res.json(result);
		} catch (error) {
			res.json(Boom.badData(error));
		}
	},
	validateOne: async (req, res) => {
		try {
			const { email, pass } = req.body;

			const result = await Register.findOne({ email, pass });

			if (result) {
				jwt.sign({ email, pass }, "secretkey", { expiresIn: "1h" }, (err, token) => {
					res.json({ code: 0, token });
				});
			} else {
				res.json({ code: 1, message: "email o pass incorrectos" });
			}
		} catch (error) {
			res.json(Boom.badData(error));
		}
	},
};
