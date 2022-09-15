import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';

import DashboardApp from 'remote_dashboard/DashboardApp';
import UserApp from 'remote_user/UserApp';
import ProductApp from 'remote_product/ProductApp';
import BlogApp from 'remote_blog/BlogApp';

import SafeComponent from './components/SafeComponent';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [

        { path: 'app', element: <SafeComponent><DashboardApp /></SafeComponent> },
        { path: 'user', element: <SafeComponent><UserApp /></SafeComponent> },
        { path: 'products', element: <SafeComponent><ProductApp /></SafeComponent> },
        { path: 'blog', element: <SafeComponent><BlogApp /></SafeComponent> },
      ],
    },
    { path: '*', element: <Navigate to="/dashboard/app" replace /> },
  ]);
}
