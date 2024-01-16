import { Button, Card } from 'antd';
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import useStore from '../../store';
import { useEffect } from 'react';

interface ItemListProps {
	item: any;
}

const ItemList: React.FC<ItemListProps> = ({ item }) => {
	const { cartItem, addCartItem } = useStore();

	const addCartHandler = (item: any) => {
		addCartItem(item);
	};

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItem));
		console.log('added');
	}, [cartItem]);

	console.log({ cartItem });

	return (
		<Card
			hoverable
			style={{ width: 240, marginBottom: 20 }}
			cover={
				<img alt={item.name} src={item.image} style={{ height: 200 }} />
			}
			actions={[
				<SettingOutlined key='setting' />,
				<EditOutlined key='edit' />,
				<EllipsisOutlined key='ellipsis' />,
			]}
		>
			<Meta title={item.name} description='www.instagram.com' />
			<div className='item-button'>
				<Button onClick={() => addCartHandler(item)}>
					Add to cart
				</Button>
			</div>
		</Card>
	);
};

export default ItemList;
