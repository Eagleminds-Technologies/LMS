import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/Tabs';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { StatusBadge } from '../../components/ui/lms/StatusBadge';
import { 
  CreditCard, 
  Plus, 
  Search, 
  Edit,
  Trash, 
  Download, 
  Filter, 
  RefreshCcw,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// Sample subscription data
const subscriptions = [
  {
    id: '1',
    instituteName: 'Tech Academy',
    plan: 'Premium',
    status: 'active',
    startDate: '2025-01-15',
    endDate: '2026-01-15',
    amount: '₹24,999',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    autoRenew: true,
    lastPayment: '2025-01-15'
  },
  {
    id: '2',
    instituteName: 'Design School',
    plan: 'Standard',
    status: 'active',
    startDate: '2025-03-10',
    endDate: '2025-09-10',
    amount: '₹14,999',
    paymentStatus: 'paid',
    paymentMethod: 'UPI',
    autoRenew: false,
    lastPayment: '2025-03-10'
  },
  {
    id: '3',
    instituteName: 'Business Training Institute',
    plan: 'Basic',
    status: 'expired',
    startDate: '2024-11-05',
    endDate: '2025-05-05',
    amount: '₹9,999',
    paymentStatus: 'paid',
    paymentMethod: 'Net Banking',
    autoRenew: false,
    lastPayment: '2024-11-05'
  },
  {
    id: '4',
    instituteName: 'Creative Arts Academy',
    plan: 'Premium',
    status: 'active',
    startDate: '2025-04-22',
    endDate: '2026-04-22',
    amount: '₹24,999',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    autoRenew: true,
    lastPayment: '2025-04-22'
  },
  {
    id: '5',
    instituteName: 'Digital Marketing School',
    plan: 'Premium',
    status: 'active',
    startDate: '2025-02-18',
    endDate: '2026-02-18',
    amount: '₹24,999',
    paymentStatus: 'paid',
    paymentMethod: 'Debit Card',
    autoRenew: true,
    lastPayment: '2025-02-18'
  },
  {
    id: '6',
    instituteName: 'Language Learning Center',
    plan: 'Standard',
    status: 'expired',
    startDate: '2024-10-12',
    endDate: '2025-04-12',
    amount: '₹14,999',
    paymentStatus: 'overdue',
    paymentMethod: 'UPI',
    autoRenew: false,
    lastPayment: '2024-10-12'
  },
  {
    id: '7',
    instituteName: 'Coding Bootcamp',
    plan: 'Basic',
    status: 'trial',
    startDate: '2025-05-01',
    endDate: '2025-05-15',
    amount: 'Free Trial',
    paymentStatus: 'na',
    paymentMethod: 'NA',
    autoRenew: false,
    lastPayment: 'NA'
  },
];

// Sample invoices data
const invoices = [
  {
    id: 'INV-20250115-001',
    instituteName: 'Tech Academy',
    amount: '₹24,999',
    date: '2025-01-15',
    status: 'paid',
    plan: 'Premium (Annual)'
  },
  {
    id: 'INV-20250310-002',
    instituteName: 'Design School',
    amount: '₹14,999',
    date: '2025-03-10',
    status: 'paid',
    plan: 'Standard (Semi-Annual)'
  },
  {
    id: 'INV-20241105-003',
    instituteName: 'Business Training Institute',
    amount: '₹9,999',
    date: '2024-11-05',
    status: 'paid',
    plan: 'Basic (Semi-Annual)'
  },
  {
    id: 'INV-20250422-004',
    instituteName: 'Creative Arts Academy',
    amount: '₹24,999',
    date: '2025-04-22',
    status: 'paid',
    plan: 'Premium (Annual)'
  },
  {
    id: 'INV-20250218-005',
    instituteName: 'Digital Marketing School',
    amount: '₹24,999',
    date: '2025-02-18',
    status: 'paid',
    plan: 'Premium (Annual)'
  },
  {
    id: 'INV-20250412-006',
    instituteName: 'Language Learning Center',
    amount: '₹14,999',
    date: '2025-04-12',
    status: 'overdue',
    plan: 'Standard (Semi-Annual) - Renewal'
  }
];

const Subscriptions = () => {
  const [subscriptionsData, setSubscriptionsData] = useState(subscriptions);
  const [invoicesData, setInvoicesData] = useState(invoices);
  const [search, setSearch] = useState('');
  const [invoiceSearch, setInvoiceSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [planFilter, setPlanFilter] = useState('all');
  const [error, setError] = useState(null);

  // Debug log to check if data is properly loaded
  useEffect(() => {
    console.log("Subscriptions data:", subscriptionsData);
    console.log("Filtered subscriptions:", filteredSubscriptions);
  }, [subscriptionsData, search, statusFilter, planFilter]);

  // Filter subscriptions based on search term and filters
  const filteredSubscriptions = subscriptionsData ? subscriptionsData.filter(sub => {
    const matchesSearch = 
      sub.instituteName.toLowerCase().includes(search.toLowerCase()) ||
      sub.plan.toLowerCase().includes(search.toLowerCase()) ||
      sub.id.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || sub.status === statusFilter;
    const matchesPlan = planFilter === 'all' || sub.plan.toLowerCase() === planFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesPlan;
  }) : [];

  // Filter invoices based on search term
  const filteredInvoices = invoicesData.filter(invoice =>
    invoice.instituteName.toLowerCase().includes(invoiceSearch.toLowerCase()) ||
    invoice.id.toLowerCase().includes(invoiceSearch.toLowerCase()) ||
    invoice.plan.toLowerCase().includes(invoiceSearch.toLowerCase())
  );

  // Reset filters
  const resetFilters = () => {
    setStatusFilter('all');
    setPlanFilter('all');
    setSearch('');
  };

  // Define subscription table columns
  const subscriptionColumns = [
    {
      header: 'Institute',
      accessor: 'instituteName',
    },
    {
      header: 'Plan',
      accessor: 'plan',
      cell: (row) => (
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          row.plan === 'Premium' && "bg-purple-100 text-purple-800",
          row.plan === 'Standard' && "bg-blue-100 text-blue-800",
          row.plan === 'Basic' && "bg-green-100 text-green-800",
        )}>
          {row.plan}
        </span>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Start Date',
      accessor: 'startDate',
      cell: (row) => new Date(row.startDate).toLocaleDateString(),
    },
    {
      header: 'End Date',
      accessor: 'endDate',
      cell: (row) => new Date(row.endDate).toLocaleDateString(),
    },
    {
      header: 'Amount',
      accessor: 'amount',
    },
    {
      header: 'Auto-Renew',
      accessor: 'autoRenew',
      cell: (row) => row.autoRenew ? 
        <CheckCircle className="h-5 w-5 text-green-500" /> : 
        <XCircle className="h-5 w-5 text-gray-400" />,
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          {row.status === 'expired' && (
            <Button variant="ghost" size="sm" className="text-green-600">
              <RefreshCcw className="h-4 w-4" />
            </Button>
          )}
          <Button variant="ghost" size="sm" className="text-red-500">
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  // Define invoice table columns
  const invoiceColumns = [
    {
      header: 'Invoice ID',
      accessor: 'id',
    },
    {
      header: 'Institute',
      accessor: 'instituteName',
    },
    {
      header: 'Plan',
      accessor: 'plan',
    },
    {
      header: 'Date',
      accessor: 'date',
      cell: (row) => new Date(row.date).toLocaleDateString(),
    },
    {
      header: 'Amount',
      accessor: 'amount',
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (row) => (
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-medium",
          row.status === 'paid' && "bg-green-100 text-green-800",
          row.status === 'pending' && "bg-yellow-100 text-yellow-800",
          row.status === 'overdue' && "bg-red-100 text-red-800"
        )}>
          {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        </span>
      ),
    },
    {
      header: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="text-blue-600">
            <Download className="h-4 w-4" />
          </Button>
          {row.status === 'overdue' && (
            <Button variant="ghost" size="sm" className="text-green-600">
              Send Reminder
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Subscription Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Subscription
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Subscriptions</p>
                <h3 className="text-2xl font-semibold mt-1">42</h3>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Expired Subscriptions</p>
                <h3 className="text-2xl font-semibold mt-1">8</h3>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <XCircle className="h-5 w-5 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Free Trials</p>
                <h3 className="text-2xl font-semibold mt-1">5</h3>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Revenue</p>
                <h3 className="text-2xl font-semibold mt-1">₹4.2L</h3>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <CreditCard className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Subscriptions and Invoices */}
      <Tabs defaultValue="subscriptions">
        <TabsList className="mb-4">
          <TabsTrigger value="subscriptions">
            <CreditCard className="h-4 w-4 mr-2" />
            Subscriptions
          </TabsTrigger>
          <TabsTrigger value="invoices">
            <Download className="h-4 w-4 mr-2" />
            Invoices
          </TabsTrigger>
        </TabsList>

        {/* Subscriptions Tab */}
        <TabsContent value="subscriptions">
          <Card>
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-1 flex-col sm:flex-row sm:items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search subscriptions..."
                    className="pl-8 w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <select 
                    className="border rounded px-2 py-1 text-sm"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                    <option value="trial">Trial</option>
                  </select>
                  
                  <select 
                    className="border rounded px-2 py-1 text-sm"
                    value={planFilter}
                    onChange={(e) => setPlanFilter(e.target.value)}
                  >
                    <option value="all">All Plans</option>
                    <option value="premium">Premium</option>
                    <option value="standard">Standard</option>
                    <option value="basic">Basic</option>
                  </select>
                  
                  <Button variant="outline" size="sm" onClick={resetFilters}>
                    <RefreshCcw className="h-3.5 w-3.5 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={subscriptionColumns}
                data={filteredSubscriptions}
                className="border rounded-lg"
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Invoices Tab */}
        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search invoices..."
                    className="pl-8"
                    value={invoiceSearch}
                    onChange={(e) => setInvoiceSearch(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <DataTable
                columns={invoiceColumns}
                data={filteredInvoices}
                className="border rounded-lg"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Subscriptions;