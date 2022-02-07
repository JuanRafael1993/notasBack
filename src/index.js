const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

//initializations
const app = express();
const { mongoose } = require("./database");

//settings
const port = process.env.PORT || 3003;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
	cors({
		exposedHeaders: ["Content-Length"],
		credentials: true,
	})
);

//global variables

//routes
app.use("/user/register", require("./routes/route.register.js"));
app.use("/user/login", require("./routes/route.login"));
app.use("/user/addCard", require("./routes/route.addCard"));

//static files

//server init
app.listen(port, () => {
	console.log(`escuchando el puerto ${port}`);
});
