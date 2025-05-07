import React, { useState } from 'react';
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
  ChevronLeft,
  ChevronRight,
  Menu,
  LogOut,
  ChevronDown,
  ChevronUp,
  Layers,
  Gauge,
  BookOpen
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// Import logo image - you can replace this with your actual logo path
import logoImg from '../../assets/react.svg';

// Group navigation items by categories
const navigationGroups = [
  {
    id: 'overview',
    label: 'Overview',
    items: [
      {
        name: 'Dashboard',
        href: '/super-admin/dashboard',
        icon: Gauge,
        badge: null,
      },
      {
        name: 'Analytics',
        href: '/super-admin/analytics',
        icon: BarChart3,
        badge: null,
      },
    ]
  },
  {
    id: 'management',
    label: 'Management',
    items: [
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
    ]
  },
  {
    id: 'finance',
    label: 'Finance',
    items: [
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
        name: 'Subscriptions',
        href: '/super-admin/subscriptions',
        icon: CreditCard,
        badge: null,
      },
    ]
  },
  {
    id: 'configuration',
    label: 'Configuration',
    items: [
      {
        name: 'Locations',
        href: '/super-admin/locations',
        icon: MapPin,
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
    ]
  },
];

const SuperAdminSidebar = ({ sidebarOpen = true, setSidebarOpen }) => {
  const [expandedGroups, setExpandedGroups] = useState({
    overview: true,
    management: true,
    finance: true,
    configuration: true
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleGroup = (groupId) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 bg-background border-r border-input transition-all duration-300 z-20',
        sidebarOpen ? 'w-64' : 'w-16'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className={cn(
          "h-16 flex items-center border-b border-input",
          sidebarOpen ? "px-6 justify-start" : "px-0 justify-center"
        )}>
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="LMS Logo" className="h-8 w-8" />
              <span className="text-xl font-semibold text-foreground">LMS Admin</span>
            </div>
          ) : (
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
              <img src={logoImg} alt="LMS Logo" className="h-8 w-8" />
            </div>
          )}
        </div>

        {/* Navigation with Groups */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {navigationGroups.map((group) => (
            <div key={group.id} className="mb-3">
              {/* Group Header - Only show when sidebar is open */}
              {sidebarOpen && (
                <div 
                  className={cn(
                    "flex items-center justify-between px-3 py-2 cursor-pointer",
                    "text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                  )}
                  onClick={() => toggleGroup(group.id)}
                >
                  <span>{group.label}</span>
                  <button className="text-muted-foreground hover:text-foreground">
                    {expandedGroups[group.id] ? (
                      <ChevronDown className="h-3 w-3" />
                    ) : (
                      <ChevronRight className="h-3 w-3" />
                    )}
                  </button>
                </div>
              )}

              {/* Group Items */}
              <ul className={cn(
                "space-y-1 transition-all duration-200 overflow-hidden",
                !sidebarOpen && "mt-4",
                sidebarOpen && !expandedGroups[group.id] && "h-0"
              )}>
                {group.items.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all',
                          'hover:bg-muted hover:text-foreground',
                          sidebarOpen ? 'gap-3' : 'justify-center',
                          isActive
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground'
                        )
                      }
                      title={item.name}
                    >
                      <div className={cn(
                        "relative",
                        !sidebarOpen && "flex items-center justify-center"
                      )}>
                        <item.icon className={cn(
                          "transition-all duration-300",
                          sidebarOpen ? "h-5 w-5" : "h-5 w-5"
                        )} />
                        
                        {!sidebarOpen && item.badge && (
                          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center text-[10px] text-primary-foreground">
                            •
                          </span>
                        )}
                      </div>
                      
                      {sidebarOpen && <span>{item.name}</span>}
                      {sidebarOpen && item.badge && (
                        <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Group divider */}
              {sidebarOpen && (
                <div className="h-px bg-border my-2 mx-3"></div>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className={cn(
          "border-t border-input p-4",
          !sidebarOpen && "flex justify-center"
        )}>
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">SA</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  Super Admin
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  admin@lms.com
                </p>
              </div>
              <button className="text-muted-foreground hover:text-foreground">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="cursor-pointer" title="Super Admin">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-medium text-muted-foreground">SA</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export { SuperAdminSidebar };
export default SuperAdminSidebar;