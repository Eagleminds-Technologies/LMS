import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Import theme components
import { useTheme } from '../components/ui/theme-provider';

// Import layout components
import SuperAdminSidebar from '../components/layout/SuperAdminSidebar';
import SuperAdminHeader from '../components/layout/SuperAdminHeader';

const SuperAdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Sidebar Component */}
      <SuperAdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${
        sidebarOpen ? 'md:ml-64' : 'md:ml-16'
      }`}>
        {/* Header Component */}
        <SuperAdminHeader toggleSidebar={toggleSidebar} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SuperAdminLayout;