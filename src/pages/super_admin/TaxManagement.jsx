import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Calculator, Plus, Globe } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/Select';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/Label';

const TaxManagement = () => {
  // Selected country for filtering
  const [selectedCountry, setSelectedCountry] = useState("0"); // "0" means "All Countries"
  
  // Tax list - simplified to just name and value
  const [taxes, setTaxes] = useState([
    { id: 1, name: 'CGST', value: 9, countryId: 1 },
    { id: 2, name: 'SGST', value: 9, countryId: 1 },
    { id: 3, name: 'Sales Tax', value: 8.25, countryId: 2 },
    { id: 4, name: 'VAT', value: 20, countryId: 3 },
    { id: 5, name: 'GST', value: 10, countryId: 4 },
    { id: 6, name: 'HST', value: 13, countryId: 5 },
  ]);
  
  // Countries list with "All Countries" option
  const [countries, setCountries] = useState([
    { id: 0, name: 'All Countries', code: 'ALL' },
    { id: 1, name: 'India', code: 'IN' },
    { id: 2, name: 'United States', code: 'US' },
    { id: 3, name: 'United Kingdom', code: 'GB' },
    { id: 4, name: 'Australia', code: 'AU' },
    { id: 5, name: 'Canada', code: 'CA' },
  ]);
  
  // Tax groups with country selection, name and selected taxes
  const [taxGroups, setTaxGroups] = useState([
    { 
      id: 1, 
      name: 'Standard GST (India)', 
      countryId: 1, 
      taxes: [1, 2], 
      value: 18 // Calculated as sum of tax values
    },
    { 
      id: 2, 
      name: 'Standard Sales Tax (US)', 
      countryId: 2, 
      taxes: [3], 
      value: 8.25 
    },
    { 
      id: 3, 
      name: 'Standard VAT (UK)', 
      countryId: 3, 
      taxes: [4], 
      value: 20 
    },
  ]);
  
  // New tax form
  const [newTax, setNewTax] = useState({ name: '', value: 0, countryId: "1" });
  
  // New tax group form
  const [newTaxGroup, setNewTaxGroup] = useState({ 
    name: '', 
    countryId: "1", 
    taxes: [], 
    value: 0 
  });
  
  // Filtered lists based on selected country
  const [filteredTaxes, setFilteredTaxes] = useState([]);
  const [filteredTaxGroups, setFilteredTaxGroups] = useState([]);
  
  // Filter taxes and tax groups based on selected country
  useEffect(() => {
    const countryId = parseInt(selectedCountry);
    
    // Filter taxes
    setFilteredTaxes(countryId === 0 
      ? taxes 
      : taxes.filter(tax => tax.countryId === countryId)
    );
    
    // Filter tax groups
    setFilteredTaxGroups(countryId === 0
      ? taxGroups
      : taxGroups.filter(group => group.countryId === countryId)
    );
    
    // Update new tax form with selected country
    if (countryId !== 0) {
      setNewTax(prev => ({ ...prev, countryId: selectedCountry }));
      setNewTaxGroup(prev => ({ ...prev, countryId: selectedCountry, taxes: [] }));
    }
  }, [selectedCountry, taxes, taxGroups]);
  
  // Handler for adding new tax
  const handleAddTax = () => {
    if (newTax.name.trim() === '') return;
    
    const newTaxItem = {
      id: taxes.length + 1,
      name: newTax.name,
      value: parseFloat(newTax.value),
      countryId: parseInt(newTax.countryId)
    };
    
    setTaxes([...taxes, newTaxItem]);
    setNewTax({ 
      name: '', 
      value: 0, 
      countryId: selectedCountry === "0" ? "1" : selectedCountry 
    });
  };
  
  // Calculate tax group value based on selected taxes
  const calculateTaxGroupValue = (selectedTaxIds) => {
    return selectedTaxIds.reduce((sum, taxId) => {
      const tax = taxes.find(t => t.id === taxId);
      return sum + (tax ? tax.value : 0);
    }, 0);
  };
  
  // Handler for adding new tax group
  const handleAddTaxGroup = () => {
    if (newTaxGroup.name.trim() === '' || newTaxGroup.taxes.length === 0) return;
    
    const groupValue = calculateTaxGroupValue(newTaxGroup.taxes);
    
    const newGroup = {
      id: taxGroups.length + 1,
      name: newTaxGroup.name,
      countryId: parseInt(newTaxGroup.countryId),
      taxes: newTaxGroup.taxes,
      value: groupValue
    };
    
    setTaxGroups([...taxGroups, newGroup]);
    setNewTaxGroup({ 
      name: '', 
      countryId: selectedCountry === "0" ? "1" : selectedCountry, 
      taxes: [], 
      value: 0 
    });
  };
  
  // Toggle tax selection for tax group
  const toggleTaxSelection = (taxId) => {
    let updatedTaxes;
    
    if (newTaxGroup.taxes.includes(taxId)) {
      updatedTaxes = newTaxGroup.taxes.filter(id => id !== taxId);
    } else {
      updatedTaxes = [...newTaxGroup.taxes, taxId];
    }
    
    // Update tax group with new taxes and recalculate value
    setNewTaxGroup({
      ...newTaxGroup,
      taxes: updatedTaxes,
      value: calculateTaxGroupValue(updatedTaxes)
    });
  };

  // Handle country change for new tax group
  const handleCountryChange = (countryId) => {
    const numericCountryId = parseInt(countryId);
    setNewTaxGroup({
      ...newTaxGroup,
      countryId: countryId,
      taxes: [], // Reset selected taxes when country changes
      value: 0
    });
  };
  
  // Get available taxes for the new tax group's country
  const availableTaxesForGroup = taxes.filter(tax => tax.countryId === parseInt(newTaxGroup.countryId));

  // Get country name by id
  const getCountryName = (countryId) => {
    const country = countries.find(c => c.id === countryId);
    return country ? country.name : '-';
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Tax Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Configure taxes and tax groups
        </p>
      </div>
      
      {/* Country Filter */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Globe className="h-5 w-5" />
            Filter by Country
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="w-72">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.id.toString()}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <p className="text-sm text-gray-500">
              {selectedCountry === "0" 
                ? 'Showing taxes and groups from all countries' 
                : `Showing taxes and groups from ${getCountryName(parseInt(selectedCountry))}`}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tax List - Simplified to just name and value */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Tax List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Tax List */}
              <div className="space-y-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-md">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b dark:border-gray-700">
                        <th className="text-left py-2 px-4 text-xs">Tax Name</th>
                        <th className="text-left py-2 px-4 text-xs">Value (%)</th>
                        <th className="text-left py-2 px-4 text-xs">Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTaxes.length > 0 ? (
                        filteredTaxes.map((tax) => (
                          <tr key={tax.id} className="border-b dark:border-gray-700">
                            <td className="py-2 px-4">{tax.name}</td>
                            <td className="py-2 px-4">{tax.value}%</td>
                            <td className="py-2 px-4">{getCountryName(tax.countryId)}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                            No taxes found for the selected country
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add New Tax */}
              <div className="pt-4 border-t dark:border-gray-700">
                <h3 className="text-sm font-medium mb-3">Add New Tax</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="taxName">Tax Name</Label>
                      <Input
                        id="taxName"
                        placeholder="e.g. VAT"
                        value={newTax.name}
                        onChange={(e) => setNewTax({...newTax, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="taxValue">Tax Rate (%)</Label>
                      <Input
                        id="taxValue"
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        placeholder="e.g. 20"
                        value={newTax.value}
                        onChange={(e) => setNewTax({...newTax, value: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="taxCountry">Country</Label>
                    <Select 
                      value={newTax.countryId} 
                      onValueChange={(value) => setNewTax({...newTax, countryId: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.filter(c => c.id !== 0).map((country) => (
                          <SelectItem key={country.id} value={country.id.toString()}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end mt-3">
                  <Button onClick={handleAddTax} className="flex items-center gap-1">
                    <Plus className="h-4 w-4" /> Add Tax
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tax Group Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Tax Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Tax Groups List */}
              <div className="space-y-2">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-md">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b dark:border-gray-700">
                        <th className="text-left py-2 px-4 text-xs">Group Name</th>
                        <th className="text-left py-2 px-4 text-xs">Country</th>
                        <th className="text-left py-2 px-4 text-xs">Taxes</th>
                        <th className="text-left py-2 px-4 text-xs">Total Value (%)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredTaxGroups.length > 0 ? (
                        filteredTaxGroups.map((group) => (
                          <tr key={group.id} className="border-b dark:border-gray-700">
                            <td className="py-2 px-4">{group.name}</td>
                            <td className="py-2 px-4">{getCountryName(group.countryId)}</td>
                            <td className="py-2 px-4">
                              <div className="flex flex-wrap gap-1">
                                {group.taxes.map(taxId => {
                                  const tax = taxes.find(t => t.id === taxId);
                                  return tax ? (
                                    <span key={taxId} className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                      {tax.name}
                                    </span>
                                  ) : null;
                                })}
                              </div>
                            </td>
                            <td className="py-2 px-4">{group.value}%</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="py-4 px-4 text-center text-gray-500">
                            No tax groups found for the selected country
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Add New Tax Group */}
              <div className="pt-4 border-t dark:border-gray-700">
                <h3 className="text-sm font-medium mb-3">Add New Tax Group</h3>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="groupName">Group Name</Label>
                    <Input
                      id="groupName"
                      placeholder="e.g. Standard VAT"
                      value={newTaxGroup.name}
                      onChange={(e) => setNewTaxGroup({...newTaxGroup, name: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="groupCountry">Select Country</Label>
                    <Select 
                      value={newTaxGroup.countryId} 
                      onValueChange={(value) => handleCountryChange(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.filter(c => c.id !== 0).map((country) => (
                          <SelectItem key={country.id} value={country.id.toString()}>
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Select Taxes</Label>
                    {availableTaxesForGroup.length > 0 ? (
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md max-h-40 overflow-y-auto">
                        {availableTaxesForGroup.map((tax) => (
                          <div key={tax.id} className="flex items-center mb-2 last:mb-0">
                            <input
                              type="checkbox"
                              id={`tax-${tax.id}`}
                              checked={newTaxGroup.taxes.includes(tax.id)}
                              onChange={() => toggleTaxSelection(tax.id)}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label htmlFor={`tax-${tax.id}`} className="ml-2 block text-sm">
                              {tax.name} ({tax.value}%)
                            </label>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md text-center text-gray-500">
                        No taxes available for the selected country. Add taxes first.
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="groupValue">Total Group Value</Label>
                    <div className="flex items-center h-10 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                      <span>{newTaxGroup.value}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Automatically calculated from selected taxes</p>
                  </div>
                </div>
                
                <div className="flex justify-end mt-4">
                  <Button 
                    onClick={handleAddTaxGroup} 
                    className="flex items-center gap-1"
                    disabled={newTaxGroup.name.trim() === '' || newTaxGroup.taxes.length === 0}
                  >
                    <Plus className="h-4 w-4" /> Add Tax Group
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxManagement;