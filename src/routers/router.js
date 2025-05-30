import React from 'react';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';
import LoginForm from '../pages/LoginPage';
import SignUpForm from '../pages/SignUp';
import DetailPage from '../pages/DetailPage';
import CartPage from '../pages/CartPage';

// Import your page components

const routes = [
    { path: "/", element: <HomePage />, namePage: "Home" },
    { path: "/shop", element: <ShopPage />, namePage: "Shop" },
    { path: "/contact", element: <ContactPage />, namePage: "Contact" },
    { path: "/blog", element: <BlogPage />, namePage: "Blog" },
    { path: "/login", element: <LoginForm />, namePage: "Login" },
    { path: "/signup", element: <SignUpForm/>, namePage: "Sign Up" },
    {path: "/detail/:id", element: <DetailPage/>, namePage: "Detail" },
    {path: "/cart", element: <CartPage/>, namePage: "Cart" },
];



export default routes;