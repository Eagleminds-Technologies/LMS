export const staffRoles = [
  {
    id: 1,
    name: "Super Admin",
    permissions: ["all"],
    description: "Full access to all system features and settings"
  },
  {
    id: 2,
    name: "Support Manager",
    permissions: ["view_tickets", "respond_tickets", "assign_tickets", "view_institutes", "view_subscriptions"],
    description: "Manages support tickets and customer inquiries"
  },
  {
    id: 3,
    name: "Content Reviewer",
    permissions: ["view_content", "approve_content", "reject_content", "view_institutes"],
    description: "Reviews and approves educational content"
  },
  {
    id: 4,
    name: "Sales Representative",
    permissions: ["view_institutes", "view_plans", "view_subscriptions", "create_subscriptions"],
    description: "Handles sales and subscription related tasks"
  },
  {
    id: 5,
    name: "Finance Officer",
    permissions: ["view_subscriptions", "view_payments", "process_refunds", "generate_invoices"],
    description: "Manages financial aspects of the platform"
  }
];

export const staff = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@lmssaas.com",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
    roleId: 1,
    status: "active",
    phone: "+91 9876543210",
    joinDate: "2023-12-01",
    lastActive: "2025-05-05"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@lmssaas.com",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=4CAF50&color=fff",
    roleId: 2,
    status: "active",
    phone: "+91 8765432109",
    joinDate: "2024-01-15",
    lastActive: "2025-05-04"
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@lmssaas.com",
    avatar: "https://ui-avatars.com/api/?name=Robert+Johnson&background=FF5722&color=fff",
    roleId: 3,
    status: "active",
    phone: "+91 7654321098",
    joinDate: "2024-02-10",
    lastActive: "2025-05-01"
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@lmssaas.com",
    avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=673AB7&color=fff",
    roleId: 4,
    status: "inactive",
    phone: "+91 6543210987",
    joinDate: "2024-03-05",
    lastActive: "2025-04-20"
  },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael.wilson@lmssaas.com",
    avatar: "https://ui-avatars.com/api/?name=Michael+Wilson&background=FFC107&color=fff",
    roleId: 5,
    status: "active",
    phone: "+91 5432109876",
    joinDate: "2024-03-20",
    lastActive: "2025-05-05"
  }
];

// Mock tickets for support system
export const tickets = [
  {
    id: 1,
    instituteId: 1,
    subject: "Payment processing issue",
    description: "We're unable to process subscription renewal payment.",
    status: "open",
    priority: "high",
    assignedTo: 2,
    createdBy: "admin@cambridge-academy.edu",
    createdAt: "2025-04-28",
    lastUpdated: "2025-04-28"
  },
  {
    id: 2,
    instituteId: 3,
    subject: "Student account creation failing",
    description: "Getting errors when trying to bulk import students.",
    status: "in_progress",
    priority: "medium",
    assignedTo: 2,
    createdBy: "info@globaledu.org",
    createdAt: "2025-05-01",
    lastUpdated: "2025-05-02"
  },
  {
    id: 3,
    instituteId: 2,
    subject: "Custom domain setup help",
    description: "Need assistance setting up our custom domain.",
    status: "resolved",
    priority: "low",
    assignedTo: 3,
    createdBy: "contact@digitallearning.com",
    createdAt: "2025-04-25",
    lastUpdated: "2025-04-27"
  },
  {
    id: 4,
    instituteId: 5,
    subject: "API integration documentation",
    description: "Looking for detailed documentation on the API endpoints.",
    status: "open",
    priority: "medium",
    assignedTo: null,
    createdBy: "admin@sunrise-university.edu",
    createdAt: "2025-05-04",
    lastUpdated: "2025-05-04"
  }
];

export const getStaff = () => {
  return Promise.resolve(staff);
};

export const getStaffById = (id) => {
  const staffMember = staff.find(s => s.id === id);
  return Promise.resolve(staffMember || null);
};

export const getStaffRoles = () => {
  return Promise.resolve(staffRoles);
};

export const createStaff = (staffMember) => {
  const newStaff = {
    ...staffMember,
    id: staff.length + 1,
    status: "active",
    joinDate: new Date().toISOString().split('T')[0],
    lastActive: new Date().toISOString().split('T')[0]
  };
  staff.push(newStaff);
  return Promise.resolve(newStaff);
};

export const updateStaff = (id, updates) => {
  const index = staff.findIndex(s => s.id === id);
  if (index === -1) return Promise.resolve(null);
  
  staff[index] = { ...staff[index], ...updates };
  return Promise.resolve(staff[index]);
};

export const deleteStaff = (id) => {
  const index = staff.findIndex(s => s.id === id);
  if (index === -1) return Promise.resolve(false);
  
  staff.splice(index, 1);
  return Promise.resolve(true);
};

// Ticket management
export const getTickets = (filters = {}) => {
  let filtered = [...tickets];
  
  if (filters.status) {
    filtered = filtered.filter(ticket => ticket.status === filters.status);
  }
  
  if (filters.instituteId) {
    filtered = filtered.filter(ticket => ticket.instituteId === filters.instituteId);
  }
  
  if (filters.assignedTo) {
    filtered = filtered.filter(ticket => ticket.assignedTo === filters.assignedTo);
  }
  
  return Promise.resolve(filtered);
};