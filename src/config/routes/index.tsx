import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../../components/authentication/Login';
import Register from '../../components/authentication/Register';
import AppLayout from '../../components/layouts';
import Homepage from '../../components/pages/Homepage';
import Billpage from '../../components/pages/Billpage';
import Customerpage from '../../components/pages/Customerpage';
import Itempage from '../../components/pages/Itempage';
import Cartpage from '../../components/pages/Cartpage';

function Router() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{
					path: '/',
					element: <Homepage />,
				},
				{
					path: '/bills',
					element: <Billpage />,
				},
				{
					path: '/items',
					element: <Itempage />,
				},
				{
					path: '/customers',
					element: <Customerpage />,
				},
				{
					path: '/cart',
					element: <Cartpage />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <Register />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default Router;
