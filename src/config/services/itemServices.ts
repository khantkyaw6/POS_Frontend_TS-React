import { openHttpService } from '../hooks';

export const getAllItems = async () => {
	console.log('work get all item api');
	const { data } = await openHttpService.get('/items');
	return data;
};
