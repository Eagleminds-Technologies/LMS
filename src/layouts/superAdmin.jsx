import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// Import theme components
import { useTheme } from '../components/ui/theme-provider';

// Import layout components
import SuperAdminSidebar from '../components/layout/SuperAdminSidebar';
import SuperAdminHeader from '../components/layout/SuperAdminHeader';

const SuperAdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();
  
  // Define the toggle function here to pass to both components
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  // Handle responsive sidebar (auto-close on small screens)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    // Initialize based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      {/* Sidebar Component */}
      <SuperAdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition-all duration-300 ${
        sidebarOpen ? 'md:ml-64' : 'md:ml-16'
      }`}>
        {/* Content wrapper with scrolling */}
        <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          {/* Header Component - Now passing the toggle function */}
          <SuperAdminHeader toggleSidebar={toggleSidebar} />
          
          {/* Main Content */}
          <main className="p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
      
      {/* Overlay for mobile - closes sidebar when clicked */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default SuperAdminLayout;