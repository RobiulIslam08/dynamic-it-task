import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Erorrpage from "../pages/Erorrpage";
import Home from "../pages/Home";
import Home2 from "../pages/Home2";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContackPage from "../pages/ContackPage";
import ExamPage from "../pages/ExamPage";
import JobPlacmentPage from "../pages/JobPlacmentPage";
import Notice from "../components/Notice";

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
				path: '/home2',
				element:<Home2></Home2>
			},
			{
				path:'home-2',
				element:<Home2></Home2>
			},
			{
				path:'about',
				element: <AboutPage></AboutPage> ,
			},
			{
				path:'blog'  ,
				element:  <BlogPage></BlogPage>,
			},
			{
				path: 'contact' ,
				element:  <ContackPage></ContackPage>,
			},
			{
				path:'exam'  ,
				element:  <ExamPage></ExamPage>,
			},
			{
				path:'job-placement'  ,
				element:  <JobPlacmentPage></JobPlacmentPage>,
			},
			{
				path:  'notice',
				element:  <Notice></Notice>,
			},
		]
	},

])