import { lazy } from 'react';
import superAdminRoutes from './super_admin';

// Import layouts
const SuperAdminLayout = lazy(() => import('../layouts/superAdmin'));

// Import public pages
const Home = lazy(() => import('../pages/public/Home'));
const Login = lazy(() => import('../pages/public/Login'));
const Register = lazy(() => import('../pages/public/Register'));

// Main application routes
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  // Super admin routes with layout wrapper
  {
    path: '/super-admin',
    component: SuperAdminLayout,
    routes: superAdminRoutes,
  }
];

export default routes;