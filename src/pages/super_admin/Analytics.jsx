import React, { useState } from 'react';
import { 
  BarChart3, 
  LineChart, 
  PieChart,
  TrendingUp, 
  TrendingDown,
  Calendar,
  Users,
  GraduationCap,
  School,
  BookOpen,
  CreditCard,
  Clock,
  Percent
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Select } from '../../components/ui/Select';
import { cn } from '../../utils/helpers';

// Sample data for analytics
const overviewStats = [
  {
    name: 'Total Revenue',
    value: '₹12,543,890',
    change: '+24%',
    changeType: 'positive',
    icon: CreditCard,
  },
  {
    name: 'Active Students',
    value: '32,456',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Course Completion',
    value: '78%',
    change: '+5%',
    changeType: 'positive',
    icon: GraduationCap,
  },
  {
    name: 'Avg. Engagement',
    value: '4.2h',
    change: '-8%',
    changeType: 'negative',
    icon: Clock,
  },
];

const monthlyData = {
  revenue: [54000, 62000, 78000, 83000, 92000, 89000, 96000, 102000, 110000, 125000, 118000, 132000],
  students: [1200, 1350, 1500, 1750, 1900, 2100, 2300, 2450, 2600, 2800, 3100, 3300],
  institutes: [12, 14, 15, 16, 17, 18, 20, 22, 24, 26, 28, 30],
  months: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
};

const subscriptionData = [
  { plan: 'Basic', percentage: 35, color: 'bg-blue-500' },
  { plan: 'Standard', percentage: 45, color: 'bg-purple-500' },
  { plan: 'Premium', percentage: 20, color: 'bg-amber-500' }
];

const courseStatistics = [
  { category: 'Technology', courses: 125, students: 4500, completion: 72 },
  { category: 'Business', courses: 85, students: 3200, completion: 68 },
  { category: 'Design', courses: 60, students: 2800, completion: 75 },
  { category: 'Marketing', courses: 45, students: 1900, completion: 82 },
  { category: 'Language', courses: 30, students: 1500, completion: 79 },
];

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('year');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Time Range:</span>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="w-32"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-primary" />
                <span
                  className={cn(
                    "text-sm font-medium flex items-center",
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  )}
                >
                  {stat.changeType === "positive" ? 
                    <TrendingUp className="h-4 w-4 mr-1" /> : 
                    <TrendingDown className="h-4 w-4 mr-1" />
                  }
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

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Revenue Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 relative">
            {/* Chart visualization would go here with a charting library */}
            <div className="flex h-full">
              {monthlyData.revenue.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col justify-end items-center">
                  <div 
                    className="w-4/5 bg-primary rounded-t-md" 
                    style={{ height: `${(value / 140000) * 100}%` }}
                  ></div>
                  <div className="text-xs mt-2 text-gray-500">{monthlyData.months[index]}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 bg-white dark:bg-gray-800 p-2 rounded-md shadow">
              <div className="text-sm font-medium">Year-to-Date: <span className="text-primary">₹1,151,000</span></div>
              <div className="text-xs text-gray-500">24% increase from last year</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Growth & Engagement Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Growth Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Student Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 relative">
              {/* Line chart visualization would be implemented with a chart library */}
              <div className="flex h-full">
                {monthlyData.students.map((value, index) => (
                  <div key={index} className="flex-1 flex justify-center">
                    <div className="relative w-full flex items-end justify-center">
                      <div className="absolute w-full" style={{ bottom: `${(value / 3500) * 100}%` }}>
                        <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
                      </div>
                      {index > 0 && (
                        <div className="absolute w-full bottom-0 border-t border-dashed border-green-400" 
                          style={{ height: `${(monthlyData.students[index-1] / 3500) * 100}%`, 
                                  transform: `skewY(${(monthlyData.students[index] - monthlyData.students[index-1]) / 50}deg)` }}></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-2">
                <div>{monthlyData.months[0]}</div>
                <div>{monthlyData.months[monthlyData.months.length - 1]}</div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm">
                <div className="font-medium">Total Growth: <span className="text-green-600">+175%</span></div>
                <div className="text-xs text-gray-500">May 2024 - Apr 2025</div>
              </div>
              <div className="text-sm">
                <div className="font-medium">Current Students: <span className="text-primary">32,456</span></div>
                <div className="text-xs text-gray-500">Active enrollments</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Institute Growth */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5" />
              Institute Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Institute Growth</span>
                <span className="text-sm font-medium">150%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Target: 36 institutes</span>
                <span>Current: 30 institutes</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Average Institute Rating</span>
                <span className="text-sm font-medium">4.2/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-amber-500 rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Institute Retention Rate</span>
                <span className="text-sm font-medium">92%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Top Performing Institute:</span>
                <span className="font-medium">Tech Masters Academy</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Most Students:</span>
                <span className="font-medium">Digital Learning Hub (3,245)</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subscription Distribution & Course Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Subscription Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-48 flex items-center justify-center my-6">
              {/* Basic pie chart visualization */}
              <div className="relative h-40 w-40">
                {subscriptionData.map((item, index) => {
                  const prevPercentage = subscriptionData
                    .slice(0, index)
                    .reduce((acc, curr) => acc + curr.percentage, 0);
                  
                  return (
                    <div
                      key={item.plan}
                      className={`absolute inset-0 ${item.color}`}
                      style={{
                        clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos(2 * Math.PI * prevPercentage / 100)}% ${50 + 50 * Math.sin(2 * Math.PI * prevPercentage / 100)}%, ${50 + 50 * Math.cos(2 * Math.PI * (prevPercentage + item.percentage) / 100)}% ${50 + 50 * Math.sin(2 * Math.PI * (prevPercentage + item.percentage) / 100)}%)`,
                        borderRadius: '50%',
                      }}
                    ></div>
                  );
                })}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 h-24 w-24 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {subscriptionData.map((item) => (
                <div key={item.plan} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`h-3 w-3 rounded-full ${item.color} mr-2`}></div>
                    <span className="text-sm">{item.plan}</span>
                  </div>
                  <span className="text-sm font-medium">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Course Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left pb-2">Category</th>
                    <th className="text-right pb-2">Courses</th>
                    <th className="text-right pb-2">Students</th>
                    <th className="text-right pb-2">Completion</th>
                  </tr>
                </thead>
                <tbody>
                  {courseStatistics.map((stat) => (
                    <tr key={stat.category} className="border-b last:border-0">
                      <td className="py-3">{stat.category}</td>
                      <td className="text-right py-3">{stat.courses}</td>
                      <td className="text-right py-3">{stat.students.toLocaleString()}</td>
                      <td className="text-right py-3">
                        <div className="flex items-center justify-end">
                          <span className="mr-2">{stat.completion}%</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 rounded-full ${
                                stat.completion > 75 ? 'bg-green-500' : 
                                stat.completion > 60 ? 'bg-amber-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${stat.completion}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Performance Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Percent className="h-5 w-5" />
            Key Performance Indicators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Student Retention</span>
                <span className="text-sm font-medium">86%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Course Completion</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-amber-500 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Revenue Growth</span>
                <span className="text-sm font-medium">24%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full" style={{ width: '24%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Instructor Rating</span>
                <span className="text-sm font-medium">4.5/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-500 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-500">New Students (May '25)</div>
              <div className="text-2xl font-semibold">1,256</div>
              <div className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% from Apr
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-500">Avg. Course Duration</div>
              <div className="text-2xl font-semibold">8.4 weeks</div>
              <div className="text-xs text-gray-500 mt-1">
                Target: 8 weeks
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-500">Content Engagement</div>
              <div className="text-2xl font-semibold">76%</div>
              <div className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +4% from Q1
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-sm text-gray-500">New Institutes (2025)</div>
              <div className="text-2xl font-semibold">8</div>
              <div className="text-xs text-amber-600 mt-1">
                53% of yearly target
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;