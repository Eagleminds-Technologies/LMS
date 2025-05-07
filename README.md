
# LMS SaaS Web Application (Frontend)

This is the frontend of a SaaS-based Learning Management System (LMS) built with **ReactJS**, **Vite**, **Tailwind CSS**, and **Shadcn/UI**. It includes:

- Public landing pages (customizable by Super Admin)
- A separate Super Admin Panel
- Role-based access: Institute Admins, Tutors, Students, SaaS Staff

---

## Tech Stack

| Layer           | Technology                                |
|----------------|--------------------------------------------|
| Frontend       | ReactJS + Vite                             |
| Styling        | Tailwind CSS + Shadcn/UI                   |
| State Mgmt     | Redux                   |
| Forms          | React Hook Form + Yup                  |
| Routing        | React Router v6+                           |
| API Layer      | Axios                                      |
| Icons          | Lucide-react                               |
| UI Components  | Shadcn/UI                                  |
| Dev Tools      | ESLint, Prettier, Husky (optional)         |

---

## Folder Structure

```bash
src/
├── api/                 # Axios services
│   ├── axios.js|  
│   ├── main_page.mock.js
│   └── mock/
│       ├── institute.mock.js    # Mock for institute CRUD
│       ├── staff.mock.js        # Mock for SaaS staff CRUD
│       ├── plans.mock.js        # Mock for plan management
│       └── utils.mock.js        # Common mock helpers        
├── assets/              # Static assets
├── components/          # Reusable UI components
│   ├── layout/          # Header, Footer, Sidebar
│   └── ui/              # shadcn/ui components
├── constants/           # App-wide constants
├── hooks/               # Custom hooks
├── layouts/  
|   ├── superAdmin.js    # super admin panels
|   ├── mainLayout.js    # Layouts for landing pages
├── pages/
│   ├── public/          # Home, About, Pricing, Contact, Login
│   └── super_admin/     # Dashboard, Institutes, Plans, Staff(CRUD)
├── routes/              # Route configurations
|   ├── super_admin.js   
├── store/               #  Redux store|    
│   └── super_admin/
│       ├── institute.mock.js    # store for institute CRUD
│       ├── staff.mock.js        # store for SaaS staff CRUD
│       ├── plans.mock.js        # store for plan management
│                    
├── types/               # TypeScript definitions
├── utils/               # Utility functions
├── App.tsx              # App root
└── main.tsx             # Entry point
```

---

## Key Features

### Public Pages (Customizable by Super Admin)

- Landing Page with Hero/Slider
- Pricing
- About Us
- Contact Us
- Login & Registration for Institutes

### Super Admin Panel

- Dashboard with analytics
- Manage Institutes
- Create SaaS Staff with role-based permissions
- Tax management (CGST/SGST – 9% each)
- Location management (Country > State > City)
- Commission models:
  - Student-Based Commission
  - Student + Marketplace Course Commission
- View subscriptions (by date, status, etc.)
- Customize public pages and theme colors

---

## User Roles

- **Super Admin** – Full access and customization
- **SaaS Staff** – Assigned permissions (ticket mgmt., approvals)
- **Institute Admin** – Creates tutors & students
- **Tutor/Teacher** – Manages course content
- **Student** – Access to approved courses

---




