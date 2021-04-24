import axios from 'axios';
export const url = 'http://localhost:9000/';
const newInstance = axios.create({
	baseURL: url,
});
export default newInstance;
