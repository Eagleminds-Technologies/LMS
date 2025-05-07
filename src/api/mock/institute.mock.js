export const institutes = [
  {
    id: 1,
    name: "Cambridge Academy",
    logo: "https://ui-avatars.com/api/?name=Cambridge+Academy&background=0D8ABC&color=fff",
    email: "admin@cambridge-academy.edu",
    contact: "+91 9876543210",
    address: "123 Education Street, Cambridge, UK",
    registrationDate: "2024-01-15",
    status: "active",
    planId: 2,
    studentsCount: 1250,
    domain: "cambridge-academy.edu",
    adminName: "Prof. James Wilson",
    expiryDate: "2025-01-15"
  },
  {
    id: 2,
    name: "Digital Learning Solutions",
    logo: "https://ui-avatars.com/api/?name=Digital+Learning&background=4CAF50&color=fff",
    email: "contact@digitallearning.com",
    contact: "+91 8765432109",
    address: "456 Tech Park, Bangalore, India",
    registrationDate: "2024-02-20",
    status: "active",
    planId: 3,
    studentsCount: 3200,
    domain: "digitallearning.com",
    adminName: "Rahul Sharma",
    expiryDate: "2025-02-20"
  },
  {
    id: 3,
    name: "Global Education Hub",
    logo: "https://ui-avatars.com/api/?name=Global+Education&background=FF5722&color=fff",
    email: "info@globaledu.org",
    contact: "+91 7654321098",
    address: "789 International Avenue, New York, USA",
    registrationDate: "2024-03-05",
    status: "pending",
    planId: 2,
    studentsCount: 850,
    domain: "globaledu.org",
    adminName: "Sarah Johnson",
    expiryDate: "2025-03-05"
  },
  {
    id: 4,
    name: "TechSkill Institute",
    logo: "https://ui-avatars.com/api/?name=TechSkill+Institute&background=673AB7&color=fff",
    email: "admin@techskill.io",
    contact: "+91 6543210987",
    address: "101 Silicon Valley, San Francisco, USA",
    registrationDate: "2024-03-15",
    status: "blocked",
    planId: 1,
    studentsCount: 420,
    domain: "techskill.io",
    adminName: "Michael Chen",
    expiryDate: "2025-03-15"
  },
  {
    id: 5,
    name: "Sunrise University",
    logo: "https://ui-avatars.com/api/?name=Sunrise+University&background=FFC107&color=fff",
    email: "admin@sunrise-university.edu",
    contact: "+91 5432109876",
    address: "202 Morning Road, Sydney, Australia",
    registrationDate: "2024-04-10",
    status: "active",
    planId: 3,
    studentsCount: 5600,
    domain: "sunrise-university.edu",
    adminName: "Dr. Emily White",
    expiryDate: "2025-04-10"
  }
];

// CRUD Operations (Mock)
export const getInstitutes = () => {
  return Promise.resolve(institutes);
};

export const getInstituteById = (id) => {
  const institute = institutes.find(inst => inst.id === id);
  return Promise.resolve(institute || null);
};

export const createInstitute = (institute) => {
  const newInstitute = {
    ...institute,
    id: institutes.length + 1,
    status: "pending",
    registrationDate: new Date().toISOString().split('T')[0],
    expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
  };
  institutes.push(newInstitute);
  return Promise.resolve(newInstitute);
};

export const updateInstitute = (id, updates) => {
  const index = institutes.findIndex(inst => inst.id === id);
  if (index === -1) return Promise.resolve(null);
  
  institutes[index] = { ...institutes[index], ...updates };
  return Promise.resolve(institutes[index]);
};

export const deleteInstitute = (id) => {
  const index = institutes.findIndex(inst => inst.id === id);
  if (index === -1) return Promise.resolve(false);
  
  institutes.splice(index, 1);
  return Promise.resolve(true);
};