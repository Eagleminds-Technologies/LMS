import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Calculator, Save, History } from 'lucide-react';

const TaxManagement = () => {
  const [cgst, setCgst] = useState(9);
  const [sgst, setSgst] = useState(9);
  
  const taxHistory = [
    { id: 1, type: 'CGST', oldRate: 8, newRate: 9, date: '2025-04-01', updatedBy: 'Admin' },
    { id: 2, type: 'SGST', oldRate: 8, newRate: 9, date: '2025-04-01', updatedBy: 'Admin' },
  ];

  const handleSaveTaxRates = () => {
    // Implement API call to save tax rates
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Tax Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Configure GST rates for the platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Current Tax Rates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Current Tax Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  CGST Rate (%)
                </label>
                <input
                  type="number"
                  value={cgst}
                  onChange={(e) => setCgst(Number(e.target.value))}
                  className="w-full rounded-md border border-gray-200 px-4 py-2"
                  min="0"
                  max="100"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  SGST Rate (%)
                </label>
                <input
                  type="number"
                  value={sgst}
                  onChange={(e) => setSgst(Number(e.target.value))}
                  className="w-full rounded-md border border-gray-200 px-4 py-2"
                  min="0"
                  max="100"
                  step="0.01"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSaveTaxRates}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Calculator */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Tax Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Base Amount (₹)
                </label>
                <input
                  type="number"
                  className="w-full rounded-md border border-gray-200 px-4 py-2"
                  placeholder="Enter amount"
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md space-y-2">
                <div className="flex justify-between text-sm">
                  <span>CGST ({cgst}%)</span>
                  <span>₹0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>SGST ({sgst}%)</span>
                  <span>₹0.00</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-medium">
                  <span>Total Amount</span>
                  <span>₹0.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tax Rate History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Tax Rate History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Old Rate</th>
                  <th className="text-left py-3 px-4">New Rate</th>
                  <th className="text-left py-3 px-4">Updated On</th>
                  <th className="text-left py-3 px-4">Updated By</th>
                </tr>
              </thead>
              <tbody>
                {taxHistory.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 px-4">{item.type}</td>
                    <td className="py-3 px-4">{item.oldRate}%</td>
                    <td className="py-3 px-4">{item.newRate}%</td>
                    <td className="py-3 px-4">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">{item.updatedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxManagement;