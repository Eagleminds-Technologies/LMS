import React, { useState } from 'react';
import { 
  Plus, 
  Search,
  Edit,
  Trash,
  Users,
  CreditCard,
  BarChart,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { Dialog } from '../../components/ui/Dialog';
import { StatusBadge } from '../../components/ui/lms/StatusBadge';

// Sample data - replace with actual API integration
const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    maxStudents: 100,
    pricePerStudent: 99,
    commission: 10,
    features: ['Basic LMS Features', 'Email Support', '5GB Storage'],
    activeSubscriptions: 45,
    status: 'active',
    createdAt: '2025-01-15',
  },
  {
    id: 2,
    name: 'Pro Plan',
    maxStudents: 500,
    pricePerStudent: 79,
    commission: 15,
    features: ['Advanced LMS Features', 'Priority Support', '25GB Storage', 'API Access'],
    activeSubscriptions: 28,
    status: 'active',
    createdAt: '2025-01-15',
  },
];

const Plans = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const columns = [
    {
      header: 'Plan Details',
      accessor: 'name',
      cell: (row) => (
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-sm text-gray-500">
            Max {row.maxStudents} students
          </div>
        </div>
      ),
    },
    {
      header: 'Pricing',
      accessor: 'pricePerStudent',
      cell: (row) => (
        <div className="space-y-1">
          <div className="font-medium">₹{row.pricePerStudent}/student</div>
          <div className="text-sm text-gray-500">
            {row.commission}% commission
          </div>
        </div>
      ),
    },
    {
      header: 'Features',
      accessor: 'features',
      cell: (row) => (
        <div className="flex flex-wrap gap-1">
          {row.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
            >
              {feature}
            </span>
          ))}
        </div>
      ),
    },
    {
      header: 'Active Subscriptions',
      accessor: 'activeSubscriptions',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-gray-500" />
          <span>{row.activeSubscriptions} institutes</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Created',
      accessor: 'createdAt',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gray-500" />
          {new Date(row.createdAt).toLocaleDateString()}
        </div>
      ),
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleEdit(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800"
            title="Edit Plan"
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-1 hover:bg-gray-100 rounded-md dark:hover:bg-gray-800 text-red-500"
            title="Delete Plan"
          >
            <Trash className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (plan) => {
    setSelectedPlan(plan);
    setIsAddDialogOpen(true);
  };

  const handleDelete = (plan) => {
    // Implement delete logic with confirmation
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Plan Management</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage subscription plans and commissions
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedPlan(null);
            setIsAddDialogOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          Add Plan
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <h4 className="text-2xl font-semibold">₹89,456</h4>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Active Subscriptions</p>
                <h4 className="text-2xl font-semibold">73</h4>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <BarChart className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Avg. Commission</p>
                <h4 className="text-2xl font-semibold">12.5%</h4>
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
            placeholder="Search plans..."
            className="w-full rounded-md border border-gray-200 pl-9 px-4 py-2 outline-none focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
      </div>

      {/* Plans Table */}
      <Card>
        <CardHeader>
          <CardTitle>Subscription Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={plans}
            className="border rounded-lg"
          />
        </CardContent>
      </Card>

      {/* Add/Edit Plan Dialog */}
      <Dialog
        open={isAddDialogOpen}
        onOpenChange={setIsAddDialogOpen}
        title={selectedPlan ? 'Edit Plan' : 'Add New Plan'}
      >
        {/* Add/Edit plan form */}
      </Dialog>
    </div>
  );
};

export default Plans;