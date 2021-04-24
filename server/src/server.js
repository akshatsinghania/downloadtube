const express = require('express');
const cors = require('cors');
require('dotenv').config();

const init = async () => {
	const app = express();
	app.use(cors());
	app.get('/', (req, res) => {
		res.status(200);
	});
	app.listen(process.env.PORT || 9000);
};
init();
