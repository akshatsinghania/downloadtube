const express = require('express');
const cors = require('cors');
const downloaderRoute = require('./routes/downloader/Downloader');
require('dotenv').config();

const init = async () => {
	const app = express();
	app.use(cors());
	app.use(express.json());
	//routing
	app.use('/downloader/', downloaderRoute);

	app.get('/', (req, res) => {
		res.sendStatus(200);
	});
	app.listen(process.env.PORT || 9000, () => {
		console.log(`server started http://localhost:${process.env.PORT}`);
	});
};
init();
