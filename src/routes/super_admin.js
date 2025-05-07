import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/super_admin/Dashboard"));
const Institutes = lazy(() => import("../pages/super_admin/Institutes"));
const Staff = lazy(() => import("../pages/super_admin/Staff"));
const Plans = lazy(() => import("../pages/super_admin/Plans"));
const Taxes = lazy(() => import("../pages/super_admin/TaxManagement"));
const Locations = lazy(() => import("../pages/super_admin/Locations"));
const Subscriptions = lazy(() => import("../pages/super_admin/Subscriptions"));
const Customization = lazy(() => import("../pages/super_admin/Customization"));
const Analytics = lazy(() => import("../pages/super_admin/Analytics"));

export const superAdminRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "institutes",
    element: <Institutes />,
  },
  {
    path: "staff",
    element: <Staff />,
  },
  {
    path: "plans",
    element: <Plans />,
  },
  {
    path: "taxes",
    element: <Taxes />,
  },
  {
    path: "locations",
    element: <Locations />,
  },
  {
    path: "subscriptions",
    element: <Subscriptions />,
  },
  {
    path: "customize",
    element: <Customization />,
  },
  {
    path: "analytics",
    element: <Analytics />,
  },
];

// Add default export to match the import in index.js
export default superAdminRoutes;