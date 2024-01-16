import { Table } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import useStore from '../../store';

const Cartpage = () => {
	const { cartItem } = useStore();

	const columns = [
		{ title: 'Name', dataIndex: 'name' },
		{
			title: 'Image',
			dataIndex: 'image',
			render: (image: string, record: any) => (
				<img src={image} alt={record.name} height={60} width={60} />
			),
		},
		{ title: 'Price', dataIndex: 'price' },
		{ title: 'Quantity', dataIndex: 'quantity' },
		{
			title: 'Actions',
			dataIndex: '_id',
			render: (id: string, record: any) => <DeleteOutlined />,
		},
	];
	return (
		<div>
			<Table dataSource={cartItem} columns={columns} />;
		</div>
	);
};

export default Cartpage;
