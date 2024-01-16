import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme, Flex } from 'antd';
import Sidebar from './sidebar';
import useStore from '../../store';

import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const AppLayout = () => {
	const { sidebar, sidebarTrigger, cartItem } = useStore();
	const navigate = useNavigate();
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const shoopingCartHandler = () => {
		navigate('/cart');
	};

	return (
		<Layout
			style={{
				height: '100vh',
			}}
		>
			<Sidebar />
			<Layout>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Button
						type='text'
						icon={
							sidebar ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => sidebarTrigger()}
						style={{
							fontSize: '16px',
							width: 64,
							height: 64,
						}}
					/>
					<Flex gap={'small'}>
						<p
							style={{
								cursor: 'pointer',
								fontWeight: 'bold',
								padding: '0 10px',
							}}
						>
							{cartItem.length}
						</p>
						<Button
							onClick={shoopingCartHandler}
							type='text'
							icon={<ShoppingCartOutlined />}
							style={{
								fontSize: '16px',
								width: 64,
								height: 64,
							}}
						/>
					</Flex>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						overflow: 'auto',
					}}
				>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
