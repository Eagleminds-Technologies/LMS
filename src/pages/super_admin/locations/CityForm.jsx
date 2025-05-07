import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/Select';
import { useLocation } from '../../../hooks/useLocation';

const CityForm = ({ isOpen, onClose, editData, states, countries }) => {
  // Get location actions from custom hook
  const { addCity, updateCity, loading } = useLocation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    stateId: '',
  });
  
  // Filtered states based on selected country
  const [filteredStates, setFilteredStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  
  // Set form data when editing a city
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        stateId: editData.stateId ? editData.stateId.toString() : '',
      });
      
      // Find the country of the state
      if (editData.stateId && states.length > 0) {
        const state = states.find(s => s.id === editData.stateId);
        if (state && state.countryId) {
          setSelectedCountry(state.countryId.toString());
          filterStatesByCountry(state.countryId.toString());
        }
      }
    } else {
      // Reset form when adding a new city
      setFormData({
        name: '',
        stateId: '',
      });
      setSelectedCountry(countries && countries.length > 0 ? countries[0].id.toString() : '');
    }
  }, [editData, states, countries, isOpen]);
  
  // Filter states when country changes
  useEffect(() => {
    if (selectedCountry) {
      filterStatesByCountry(selectedCountry);
    }
  }, [selectedCountry, states]);
  
  // Filter states by country
  const filterStatesByCountry = (countryId) => {
    const filtered = states.filter(state => 
      state.countryId === parseInt(countryId)
    );
    setFilteredStates(filtered);
    
    // If there are filtered states and no state is selected, select the first one
    if (filtered.length > 0 && !formData.stateId) {
      setFormData(prev => ({
        ...prev,
        stateId: filtered[0].id.toString(),
      }));
    }
  };
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Handle country select changes
  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    // Reset stateId when country changes
    setFormData(prev => ({
      ...prev,
      stateId: '',
    }));
  };
  
  // Handle state select changes
  const handleStateChange = (value) => {
    setFormData({
      ...formData,
      stateId: value,
    });
  };
  
  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert stateId to number before submission
    const cityData = {
      ...formData,
      stateId: parseInt(formData.stateId),
    };
    
    try {
      if (editData) {
        // Update existing city
        await updateCity(editData.id, cityData);
      } else {
        // Add new city
        await addCity(cityData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving city:', error);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit City' : 'Add City'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                City Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-3"
                required
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="country" className="text-right">
                Country
              </Label>
              <div className="col-span-3">
                <Select 
                  value={selectedCountry} 
                  onValueChange={handleCountryChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries && countries.map((country) => (
                      <SelectItem key={country.id} value={country.id.toString()}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="stateId" className="text-right">
                State
              </Label>
              <div className="col-span-3">
                <Select 
                  value={formData.stateId} 
                  onValueChange={handleStateChange}
                  disabled={filteredStates.length === 0}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={filteredStates.length === 0 
                      ? "No states available for selected country" 
                      : "Select state"} 
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredStates.map((state) => (
                      <SelectItem key={state.id} value={state.id.toString()}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {filteredStates.length === 0 && (
                  <p className="text-xs text-gray-500 mt-1">
                    Please add states for this country first
                  </p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !formData.stateId}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CityForm;