import axios from 'axios';
import { apiEndPoint } from '../api/endpoint';

export const httpService = axios.create({
	baseURL: apiEndPoint.baseUrl,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export const openHttpService = axios.create({
	baseURL: apiEndPoint.baseUrl,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});
