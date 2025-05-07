export const plans = [
  {
    id: 1,
    name: "Basic Plan",
    description: "Essential features for small institutes",
    price: 499,
    billingCycle: "monthly",
    features: [
      "Up to 500 students",
      "5 Admin accounts",
      "10 Teacher accounts",
      "Basic analytics",
      "Email support"
    ],
    maxStudents: 500,
    maxAdmins: 5,
    maxTeachers: 10,
    commission: 5, // 5% per student
    isPopular: false,
    createdAt: "2024-01-01"
  },
  {
    id: 2,
    name: "Standard Plan",
    description: "Perfect for growing educational institutions",
    price: 1299,
    billingCycle: "monthly",
    features: [
      "Up to 2000 students",
      "15 Admin accounts",
      "50 Teacher accounts",
      "Advanced analytics",
      "Priority email support",
      "Phone support (business hours)",
      "White-labeled platform"
    ],
    maxStudents: 2000,
    maxAdmins: 15,
    maxTeachers: 50,
    commission: 3, // 3% per student
    isPopular: true,
    createdAt: "2024-01-01"
  },
  {
    id: 3,
    name: "Premium Plan",
    description: "Full-featured solution for large institutions",
    price: 2999,
    billingCycle: "monthly",
    features: [
      "Unlimited students",
      "Unlimited admin accounts",
      "Unlimited teacher accounts",
      "Advanced analytics with custom reports",
      "24/7 Priority support",
      "Dedicated account manager",
      "White-labeled platform",
      "API access",
      "Custom integrations"
    ],
    maxStudents: -1, // Unlimited
    maxAdmins: -1, // Unlimited
    maxTeachers: -1, // Unlimited
    commission: 2, // 2% per student
    isPopular: false,
    createdAt: "2024-01-01"
  }
];

// Mock subscriptions data (institutes subscribed to plans)
export const subscriptions = [
  {
    id: 1,
    instituteId: 1,
    planId: 2,
    startDate: "2024-01-15",
    endDate: "2025-01-15",
    status: "active",
    paymentStatus: "paid",
    amount: 1299 * 12, // Yearly amount
    discount: 10, // 10% discount
    paymentMethod: "credit_card",
    invoiceUrl: "#",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    instituteId: 2,
    planId: 3,
    startDate: "2024-02-20",
    endDate: "2025-02-20",
    status: "active",
    paymentStatus: "paid",
    amount: 2999 * 12,
    discount: 15,
    paymentMethod: "bank_transfer",
    invoiceUrl: "#",
    createdAt: "2024-02-20"
  },
  {
    id: 3,
    instituteId: 3,
    planId: 2,
    startDate: "2024-03-05",
    endDate: "2025-03-05",
    status: "pending",
    paymentStatus: "pending",
    amount: 1299 * 12,
    discount: 10,
    paymentMethod: "credit_card",
    invoiceUrl: "#",
    createdAt: "2024-03-05"
  },
  {
    id: 4,
    instituteId: 4,
    planId: 1,
    startDate: "2024-03-15",
    endDate: "2025-03-15",
    status: "blocked",
    paymentStatus: "failed",
    amount: 499 * 12,
    discount: 0,
    paymentMethod: "credit_card",
    invoiceUrl: "#",
    createdAt: "2024-03-15"
  },
  {
    id: 5,
    instituteId: 5,
    planId: 3,
    startDate: "2024-04-10",
    endDate: "2025-04-10",
    status: "active",
    paymentStatus: "paid",
    amount: 2999 * 12,
    discount: 15,
    paymentMethod: "bank_transfer",
    invoiceUrl: "#",
    createdAt: "2024-04-10"
  }
];

export const getPlans = () => {
  return Promise.resolve(plans);
};

export const getPlanById = (id) => {
  const plan = plans.find(p => p.id === id);
  return Promise.resolve(plan || null);
};

export const createPlan = (plan) => {
  const newPlan = {
    ...plan,
    id: plans.length + 1,
    createdAt: new Date().toISOString().split('T')[0]
  };
  plans.push(newPlan);
  return Promise.resolve(newPlan);
};

export const updatePlan = (id, updates) => {
  const index = plans.findIndex(p => p.id === id);
  if (index === -1) return Promise.resolve(null);
  
  plans[index] = { ...plans[index], ...updates };
  return Promise.resolve(plans[index]);
};

export const deletePlan = (id) => {
  const index = plans.findIndex(p => p.id === id);
  if (index === -1) return Promise.resolve(false);
  
  plans.splice(index, 1);
  return Promise.resolve(true);
};

// Subscription management
export const getSubscriptions = (filters = {}) => {
  let filtered = [...subscriptions];
  
  if (filters.status) {
    filtered = filtered.filter(sub => sub.status === filters.status);
  }
  
  if (filters.instituteId) {
    filtered = filtered.filter(sub => sub.instituteId === filters.instituteId);
  }
  
  if (filters.planId) {
    filtered = filtered.filter(sub => sub.planId === filters.planId);
  }
  
  return Promise.resolve(filtered);
};

export const createSubscription = (subscription) => {
  const newSubscription = {
    ...subscription,
    id: subscriptions.length + 1,
    createdAt: new Date().toISOString().split('T')[0]
  };
  subscriptions.push(newSubscription);
  return Promise.resolve(newSubscription);
};