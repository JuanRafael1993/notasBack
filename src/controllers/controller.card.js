//model
const Card = require("../models/model.card");
//errors
const Boom = require("@hapi/boom");

module.exports = {
	createOne: async (req, res) => {
		try {
			const { titulo, nota } = req.body;

			const card = new Card({ titulo, nota });

			await card.save();

			res.json("nota guardada");
		} catch (error) {
			res.json(Boom.badData(error));
		}
	},
	getAll: async (req, res) => {
		try {
			const result = await Card.find()

			res.json(result)
		} catch (error) {
			res.json(Boom.badData(error))
		}
	}
};
