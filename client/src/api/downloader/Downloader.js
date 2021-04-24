import { url } from '../axios/Axios';

export const downloadVideo = (id) => {
	return `${url}downloader/${id}`;
};
