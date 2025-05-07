import { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  LogOut, 
  Bell, 
  User, 
  Settings 
} from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

const SuperAdminHeader = ({ toggleSidebar }) => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);
  const toggleNotification = () => setNotificationOpen(!notificationOpen);

  return (
    <header className="h-16 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10 shadow-sm">
      <button 
        onClick={toggleSidebar} 
        className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
      >
        <Menu size={20} />
      </button>
      
      <div className="ml-auto flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={toggleNotification} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
          >
            <Bell size={20} className="text-gray-500 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          {/* Notification Dropdown */}
          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-200 dark:border-gray-700">
              <div className="p-3 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-sm font-semibold">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm">New institute registered</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">5 minutes ago</p>
                </div>
                <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm">Subscription payment received</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                </div>
                <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700">
                  <p className="text-sm">New support ticket (#T-452)</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
                </div>
                <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                  <p className="text-sm">System maintenance completed</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday</p>
                </div>
              </div>
              <div className="p-2 text-center border-t border-gray-100 dark:border-gray-700">
                <button className="text-xs text-primary hover:underline dark:text-blue-400">
                  View all notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button 
            onClick={toggleProfileDropdown} 
            className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 dark:bg-primary/40 flex items-center justify-center text-primary dark:text-primary-foreground">
              JD
            </div>
            <ChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
          </button>

          {/* Profile Dropdown */}
          {profileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-200 dark:border-gray-700">
              <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                <User size={16} />
                <span>Profile</span>
              </button>
              <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
              <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SuperAdminHeader;