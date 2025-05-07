import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BarChart3,
  Building2,
  Users,
  ClipboardList,
  Calculator,
  MapPin,
  CreditCard,
  Palette,
  Settings,
  GraduationCap,
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const navigation = [
  {
    name: 'Dashboard',
    href: '/super-admin/dashboard',
    icon: BarChart3,
    badge: null,
  },
  {
    name: 'Analytics',
    href: '/super-admin/analytics',
    icon: GraduationCap,
    badge: null,
  },
  {
    name: 'Institutes',
    href: '/super-admin/institutes',
    icon: Building2,
    badge: 'New',
  },
  {
    name: 'Staff Management',
    href: '/super-admin/staff',
    icon: Users,
    badge: null,
  },
  {
    name: 'Plans & Commission',
    href: '/super-admin/plans',
    icon: ClipboardList,
    badge: null,
  },
  {
    name: 'Tax Management',
    href: '/super-admin/taxes',
    icon: Calculator,
    badge: null,
  },
  {
    name: 'Locations',
    href: '/super-admin/locations',
    icon: MapPin,
    badge: null,
  },
  {
    name: 'Subscriptions',
    href: '/super-admin/subscriptions',
    icon: CreditCard,
    badge: null,
  },
  {
    name: 'Customize',
    href: '/super-admin/customize',
    icon: Palette,
    badge: null,
  },
  {
    name: 'Settings',
    href: '/super-admin/settings',
    icon: Settings,
    badge: null,
  },
];

const SuperAdminSidebar = ({ sidebarOpen = true, setSidebarOpen }) => {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300',
        sidebarOpen ? 'w-64' : 'w-16'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
          {sidebarOpen ? (
            <span className="text-xl font-semibold">LMS Admin</span>
          ) : (
            <span className="text-xl font-semibold">LMS</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      'hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100',
                      isActive
                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100'
                        : 'text-gray-500 dark:text-gray-400'
                    )
                  }
                  title={item.name}
                >
                  <item.icon className="h-5 w-5" />
                  {sidebarOpen && <span>{item.name}</span>}
                  {sidebarOpen && item.badge && (
                    <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-white">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        {sidebarOpen && (
          <div className="border-t border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  Super Admin
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  admin@lms.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export { SuperAdminSidebar };
export default SuperAdminSidebar;