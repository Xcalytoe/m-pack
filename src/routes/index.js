import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GeneralNav from '../components/GeneralNav';
import MainHome from '../pages/Home';
import EcommerceNav from '../components/ecommerce/Navbar';
import Shop from '../pages/ecommerce/Shop';
import WeatherNav from '../components/weather/Navbar';
import WeatherHome from '../pages/weather/Home';
import BlogNav from '../components/blog/Navbar';
import Blog from '../pages/blog/Home/posts';
import Register from '../pages/auth/register';
import Login from '../pages/auth/login';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from '../pages/auth/forgot-password';
export default function PageRoutes() {
	return (
		<Switch>
			<Route exact path="/">
				<GeneralNav />
				<MainHome />
			</Route>
			<Route exact path="/ecommerce/shop">
				<EcommerceNav />
				<Shop />
			</Route>
			<Route exact path="/weather">
				<WeatherNav />
				<WeatherHome />
			</Route>
			<Route exact path="/blog/posts">
				<BlogNav />
				<Blog />
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/forgot-password">
				<ForgotPassword />
			</Route>
			<Route exact path="/login">
				<Login />
			</Route>
			<PrivateRoute exact path="/dashboard">
				<Dashboard />
			</PrivateRoute>
		</Switch>
	);
}
