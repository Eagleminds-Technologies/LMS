import React from 'react';
import { 
  Users, 
  Building2, 
  CreditCard, 
  TrendingUp,
  BookOpen,
  GraduationCap,
  Calculator,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/lms/DataDisplay';
import { StatusBadge } from '../../components/ui/lms/StatusBadge';
import { cn } from '../../utils/helpers';

const stats = [
  {
    name: 'Total Institutes',
    value: '256',
    change: '+12%',
    changeType: 'positive',
    icon: Building2,
  },
  {
    name: 'Active Students',
    value: '12,234',
    change: '+18%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Monthly Revenue',
    value: '₹89,456',
    change: '+8%',
    changeType: 'positive',
    icon: CreditCard,
  },
  {
    name: 'Growth Rate',
    value: '23%',
    change: '+2.5%',
    changeType: 'positive',
    icon: TrendingUp,
  },
];

const recentInstitutes = [
  {
    id: 1,
    name: 'Tech Academy',
    students: 234,
    subscription: 'Premium',
    status: 'active',
    lastPayment: '2025-04-28',
  },
  // Add more sample data as needed
];

const columns = [
  {
    header: 'Institute Name',
    accessor: 'name',
  },
  {
    header: 'Students',
    accessor: 'students',
    cell: (row) => (
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-gray-500" />
        {row.students}
      </div>
    ),
  },
  {
    header: 'Subscription',
    accessor: 'subscription',
  },
  {
    header: 'Status',
    accessor: 'status',
    cell: (row) => <StatusBadge status={row.status} />,
  },
  {
    header: 'Last Payment',
    accessor: 'lastPayment',
    cell: (row) => new Date(row.lastPayment).toLocaleDateString(),
  },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-primary" />
                <span
                  className={cn(
                    "text-sm font-medium",
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  )}
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-semibold">{stat.value}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Course Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Active Courses</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Total Enrollments</span>
                <span className="font-semibold">45,678</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Completion Rate</span>
                <span className="font-semibold">78%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Revenue</span>
                <span className="font-semibold">₹89,456</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Annual Growth</span>
                <span className="font-semibold">23%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Avg. Transaction</span>
                <span className="font-semibold">₹2,345</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">New Institutes</span>
                <span className="font-semibold">+12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Student Growth</span>
                <span className="font-semibold">+18%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Renewal Rate</span>
                <span className="font-semibold">92%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Institutes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Institutes</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={recentInstitutes}
            className="border rounded-lg"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;