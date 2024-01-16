import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import type { MenuProps } from 'antd';
import {
	UserOutlined,
	HomeOutlined,
	CopyOutlined,
	UnorderedListOutlined,
	LogoutOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import useStore from '../../../store';

function Sidebar() {
	const { sidebar } = useStore();

	const onClick: MenuProps['onClick'] = (e) => {
		console.log('click ');
	};

	type MenuItem = Required<MenuProps>['items'][number];

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		path: string,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: 'group'
	): MenuItem {
		return {
			key,
			icon,
			children,
			label: <Link to={path}>{label}</Link>,
			type,
		} as MenuItem;
	}

	const items: MenuProps['items'] = [
		getItem('Home', 'home', '/', <HomeOutlined />),
		getItem('Bill', 'bill', '/bills', <CopyOutlined />),
		getItem('Items', 'items', '/items', <UnorderedListOutlined />),
		getItem('Customers', 'customers', '/customers', <UserOutlined />),
		{ type: 'divider' },
		getItem('Logout', 'logout', '/logout', <LogoutOutlined />),
	];

	return (
		<Sider trigger={null} collapsible collapsed={sidebar}>
			<div className='demo-logo-vertical'>
				<h1 className='text-center text-light font-weigth-bold mt-4'>
					POS
				</h1>
			</div>
			<Menu
				onClick={onClick}
				theme='dark'
				mode='inline'
				defaultSelectedKeys={['home']}
				items={items}
			/>
		</Sider>
	);
}

export default Sidebar;
