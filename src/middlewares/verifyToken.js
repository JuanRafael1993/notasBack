//token
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
	console.log(req.headers["authorization"]);
	const bearerHeaders = req.headers["authorization"];

	if (typeof bearerHeaders !== "undefined") {
		const bearerToken = bearerHeaders.split(" ")[1];

		jwt.verify(bearerToken, "secretkey", (error, authData) => {
			if (error) {
				res.json({ estatus: "403", mesagge: "token invalido" });
			} else {
				next();
			}
		});
	} else {
		console.log("entra aqui");
		res.json({ estatus: "403", message: "Se requiere token" });
	}
}

module.exports = verifyToken;
