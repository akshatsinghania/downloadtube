const app = require('express').Router();
const { getVideo } = require('../../controllers/downloader/Downloader');

app.get('/:id', async (req, res) => {
	await getVideo(`https://www.youtube.com/watch?v=${req.params.id}`, res);
});

module.exports = app;
