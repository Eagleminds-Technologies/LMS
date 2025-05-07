import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import layouts
import MainLayout from './layouts/mainLayout.jsx';
import SuperAdminLayout from './layouts/superAdmin.jsx';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/public/Home'));
const Login = lazy(() => import('./pages/public/Login'));
const Register = lazy(() => import('./pages/public/Register'));
const NotFound = lazy(() => import('./pages/public/NotFound'));

// Super Admin Pages - these are imported inline to match the route structure
const Dashboard = lazy(() => import('./pages/super_admin/Dashboard'));
const Institutes = lazy(() => import('./pages/super_admin/Institutes'));
const Plans = lazy(() => import('./pages/super_admin/Plans'));
const Staff = lazy(() => import('./pages/super_admin/Staff'));
const Analytics = lazy(() => import('./pages/super_admin/Analytics'));
const Locations = lazy(() => import('./pages/super_admin/Locations'));
const TaxManagement = lazy(() => import('./pages/super_admin/TaxManagement'));
const Subscriptions = lazy(() => import('./pages/super_admin/Subscriptions'));
const Customization = lazy(() => import('./pages/super_admin/Customization'));

// Loading component for suspense fallback
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Super Admin Routes */}
          <Route path="/super-admin" element={<SuperAdminLayout />}>
            <Route index element={<Navigate to="/super-admin/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="institutes" element={<Institutes />} />
            <Route path="staff" element={<Staff />} />
            <Route path="plans" element={<Plans />} />
            <Route path="taxes" element={<TaxManagement />} />
            <Route path="locations" element={<Locations />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="customize" element={<Customization />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
