const ytdl = require('ytdl-core');
const fs = require('fs');

const getVideo = async (url, res) => {
	res.header('Content-Disposition', 'attachment;  filename="Video.mp4');
	ytdl(url, { format: 'mp4' }).pipe(res);
};
module.exports = { getVideo };
