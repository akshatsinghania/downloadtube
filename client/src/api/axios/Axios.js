import axios from 'axios';
export const url = 'https://downloadtube-api.herokuapp.com/';
const newInstance = axios.create({
	baseURL: url,
});
export default newInstance;
