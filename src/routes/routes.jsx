import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Erorrpage from "../pages/Erorrpage";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <Erorrpage></Erorrpage>,
		children: [
			{
				path: '/',
				element:<Home></Home>
			},
			{
				path:'home-2',
				element:<Home2></Home2>
			}
		]
	},

])