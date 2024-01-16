import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '../queryKeys';
import { getAllItems } from '../../services/itemServices';

export const getAllItemApi = () => {
	return useQuery({
		queryKey: queryKeys.items,
		queryFn: () => getAllItems(),
	});
};
