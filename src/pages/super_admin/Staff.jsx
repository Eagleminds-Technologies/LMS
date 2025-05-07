import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Users,
  Shield,
  Mail,
  Phone,
  Calendar,
  Edit,
  Trash,
  Key
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { RoleTag } from '../../components/ui/lms/RoleTag';
import { Dialog } from '../../components/ui/Dialog';

// Sample data - replace with actual API integration
const staffMembers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@lms.com',
    phone: '+91 98765 43210',
    role: 'admin',
    permissions: ['institute_management', 'staff_management', 'plan_management'],
    status: 'active',
    joinDate: '2025-01-15',
  },
  // Add more sample data
];

const Staff = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const columns = [
    {
      header: 'Staff Member',
      accessor: 'name',
      cell: (row) => (
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      ),
    },
    {
      header: 'Role',
      accessor: 'role',
      cell: (row) => <RoleTag role={row.role} />,
    },
    {
      header: 'Contact',
      accessor: 'phone',
      cell: (row) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span>{row.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <span>{row.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: 'Permissions',
      accessor: 'permissions',
      cell: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.permissions.map((permission) => (
            <span
              key={permission}
              className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {permission.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => (
        <span className={
          row.status === 'active' 
            ? 'text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full text-sm'
            : 'text-red-600 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full text-sm'
        }>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      ),
    },
    {
      header: 'Join Date',
      accessor: 'joinDate',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          {new Date(row.joinDate).toLocaleDateString()}
        </div>
      ),
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePermissions(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
            title="Manage Permissions"
          >
            <Key className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
            title="Edit Staff"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800 text-red-500"
            title="Delete Staff"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  const handlePermissions = (staff) => {
    setSelectedStaff(staff);
    // Implement permissions management logic
  };

  const handleEdit = (staff) => {
    setSelectedStaff(staff);
    setIsAddDialogOpen(true);
  };

  const handleDelete = (staff) => {
    // Implement delete logic with confirmation
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Staff Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage SaaS staff members and their permissions
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedStaff(null);
            setIsAddDialogOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add Staff Member
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Total Staff</p>
                <h4 className="text-2xl font-semibold">24</h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Admin Staff</p>
                <h4 className="text-2xl font-semibold">8</h4>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search staff members..."
            className="w-full rounded-md border border-gray-200 pl-9 px-4 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
      </div>

      {/* Staff Table */}
      <Card>
        <CardHeader>
          <CardTitle>Staff Members</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={staffMembers}
            className="border rounded-lg"
          />
        </CardContent>
      </Card>

      {/* Add/Edit Staff Dialog */}
      <Dialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        title={selectedStaff ? 'Edit Staff Member' : 'Add New Staff Member'}
      >
        {/* Add/Edit staff form */}
      </Dialog>
    </div>
  );
};

export default Staff;