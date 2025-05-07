import { useState } from 'react';
import { 
  ChevronDown, 
  Menu, 
  LogOut, 
  Bell, 
  User, 
  Settings,
  AlignLeft
} from 'lucide-react';
import { ThemeToggle } from '../ui/theme-toggle';

const SuperAdminHeader = ({ toggleSidebar }) => {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);
  const toggleNotification = () => setNotificationOpen(!notificationOpen);

  return (
    <div className="px-4 py-3">
      <header className="h-16 flex items-center justify-between px-6 bg-background border border-input z-10 shadow-sm rounded-2xl">
        {/* Sidebar Toggle Button - Now visible on all screen sizes */}
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          aria-label="Toggle sidebar"
        >
          <AlignLeft size={20} />
        </button>
        
        <div className="ml-auto flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={toggleNotification} 
              className="p-2 rounded-full hover:bg-muted relative"
            >
              <Bell size={20} className="text-muted-foreground" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
            </button>
            
            {/* Notification Dropdown */}
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-background rounded-md shadow-lg py-1 z-20 border border-input">
                <div className="p-3 border-b border-input">
                  <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-3 hover:bg-muted cursor-pointer border-b border-input">
                    <p className="text-sm text-foreground">New institute registered</p>
                    <p className="text-xs text-muted-foreground">5 minutes ago</p>
                  </div>
                  <div className="p-3 hover:bg-muted cursor-pointer border-b border-input">
                    <p className="text-sm text-foreground">Subscription payment received</p>
                    <p className="text-xs text-muted-foreground">1 hour ago</p>
                  </div>
                  <div className="p-3 hover:bg-muted cursor-pointer border-b border-input">
                    <p className="text-sm text-foreground">New support ticket (#T-452)</p>
                    <p className="text-xs text-muted-foreground">3 hours ago</p>
                  </div>
                  <div className="p-3 hover:bg-muted cursor-pointer">
                    <p className="text-sm text-foreground">System maintenance completed</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <div className="p-2 text-center border-t border-input">
                  <button className="text-xs text-primary hover:underline">
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
              className="flex items-center space-x-2 p-1 rounded-md hover:bg-muted"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                JD
              </div>
              <ChevronDown size={16} className="text-muted-foreground" />
            </button>

            {/* Profile Dropdown */}
            {profileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 z-20 border border-input">
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
                  <User size={16} />
                  <span>Profile</span>
                </button>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-foreground hover:bg-muted">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
                <div className="border-t border-input my-1"></div>
                <button className="flex items-center space-x-2 w-full px-4 py-2 text-left text-sm text-destructive hover:bg-muted">
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default SuperAdminHeader;