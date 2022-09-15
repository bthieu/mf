import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Iframe from './components/Iframe';
// //
// import Blog from './pages/Blog';
// import User from './pages/User';
// import Login from './pages/Login';
// import NotFound from './pages/Page404';
// import Register from './pages/Register';
// import Products from './pages/Products';
// import DashboardApp from './pages/DashboardApp';
// import DashboardApp from 'remote_dashboard/DashboardApp';
// import UserApp from 'remote_user/UserApp';
// import ProductApp from 'remote_product/ProductApp';
// import BlogApp from 'remote_blog/BlogApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [

        { path: 'app', element: <Iframe src="http://localhost:5011" /> },
        { path: 'user', element: <Iframe src="http://localhost:5012"/> },
        { path: 'products', element: <Iframe src="http://localhost:5013"/> },
        { path: 'blog', element: <Iframe src="http://localhost:5014"/> },
      ],
    },
    // {
    //   path: '/',
    //   element: <LogoOnlyLayout />,
    //   children: [
    //     { path: '/', element: <Navigate to="/dashboard/app" /> },
    //     { path: 'login', element: <Login /> },
    //     { path: 'register', element: <Register /> },
    //     { path: '404', element: <NotFound /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // { path: '*', element: <Navigate to="/404" replace /> },
    { path: '*', element: <Navigate to="/dashboard/app" replace /> },
  ]);
}
