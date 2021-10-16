import React from "react";
import { Switch, Route } from "react-router-dom";
import GeneralNav from "../components/generalNav";
import MainHome from "../pages/home";
import EcommerceNav from "../components/ecommerce/navbar";
import Shop from "../pages/ecommerce/shop";
import WeatherNav from "../components/weather/navbar";
import WeatherHome from "../pages/weather/home";
import BlogNav from "../components/blog/navbar";
import Blog from "../pages/blog";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/auth/ForgotPassword";
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
