//model
const AddCard = require("../models/model.addCard");
//errors
const Boom = require("@hapi/boom");

module.exports = {
	createOne: async (req, res) => {
		try {
			const { titulo, nota } = req.body;

			const addCard = new AddCard({ titulo, nota });

			await addCard.save();

			res.json("nota guardada");
		} catch (error) {
			res.json(Boom.badData(error));
		}
	},
};
