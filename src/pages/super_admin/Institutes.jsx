import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter,
  MoreVertical,
  Edit,
  Trash,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { StatusBadge } from '../../components/ui/lms/StatusBadge';
import { Dialog } from '../../components/ui/Dialog';
import { TabNav } from '../../components/ui/lms/TabNav';

// Sample data - replace with actual API integration
const institutes = [
  {
    id: 1,
    name: 'Tech Academy',
    email: 'admin@techacademy.com',
    phone: '+91 98765 43210',
    students: 234,
    plan: 'Premium',
    status: 'active',
    location: 'Mumbai, India',
    joinDate: '2025-01-15',
  },
  // Add more sample data
];

const Institutes = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedInstitute, setSelectedInstitute] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const columns = [
    {
      header: 'Institute Name',
      accessor: 'name',
      cell: (row) => (
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      ),
    },
    {
      header: 'Contact',
      accessor: 'phone',
    },
    {
      header: 'Students',
      accessor: 'students',
    },
    {
      header: 'Plan',
      accessor: 'plan',
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Location',
      accessor: 'location',
    },
    {
      header: 'Join Date',
      accessor: 'joinDate',
      cell: (row) => new Date(row.joinDate).toLocaleDateString(),
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleView(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleEdit(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800 text-red-500"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  const tabs = [
    {
      label: 'All Institutes',
      value: 'all',
      content: (
        <DataTable
          columns={columns}
          data={institutes}
          className="border rounded-lg"
        />
      ),
    },
    {
      label: 'Active',
      value: 'active',
      content: (
        <DataTable
          columns={columns}
          data={institutes.filter(i => i.status === 'active')}
          className="border rounded-lg"
        />
      ),
    },
    {
      label: 'Pending',
      value: 'pending',
      content: (
        <DataTable
          columns={columns}
          data={institutes.filter(i => i.status === 'pending')}
          className="border rounded-lg"
        />
      ),
    },
    {
      label: 'Blocked',
      value: 'blocked',
      content: (
        <DataTable
          columns={columns}
          data={institutes.filter(i => i.status === 'blocked')}
          className="border rounded-lg"
        />
      ),
    },
  ];

  const handleView = (institute) => {
    setSelectedInstitute(institute);
    // Implement view logic
  };

  const handleEdit = (institute) => {
    setSelectedInstitute(institute);
    // Implement edit logic
  };

  const handleDelete = (institute) => {
    // Implement delete logic with confirmation
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Institutes Management</h1>
        <button
          onClick={() => setIsAddDialogOpen(true)}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add Institute
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search institutes..."
            className="w-full rounded-md border border-gray-200 pl-9 px-4 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
          <Filter className="h-4 w-4" />
          Filters
        </button>
      </div>

      {/* Tabs and Table */}
      <Card>
        <CardContent className="p-0">
          <TabNav
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </CardContent>
      </Card>

      {/* Add/Edit Institute Dialog */}
      <Dialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        title="Add New Institute"
      >
        {/* Add institute form */}
      </Dialog>
    </div>
  );
};

export default Institutes;