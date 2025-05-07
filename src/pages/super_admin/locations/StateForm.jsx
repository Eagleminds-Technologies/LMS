import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/Select';
import { useLocation } from '../../../hooks/useLocation';

const StateForm = ({ isOpen, onClose, editData, countries }) => {
  // Get location actions from custom hook
  const { addState, updateState, loading } = useLocation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    countryId: '',
  });
  
  // Set form data when editing a state
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        countryId: editData.countryId ? editData.countryId.toString() : '',
      });
    } else {
      // Reset form when adding a new state
      setFormData({
        name: '',
        countryId: countries && countries.length > 0 ? countries[0].id.toString() : '',
      });
    }
  }, [editData, countries, isOpen]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle select changes
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert countryId to number before submission
    const stateData = {
      ...formData,
      countryId: parseInt(formData.countryId),
    };
    
    try {
      if (editData) {
        // Update existing state
        await updateState(editData.id, stateData);
      } else {
        // Add new state
        await addState(stateData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving state:', error);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit State' : 'Add State'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                State Name
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
              <Label htmlFor="countryId" className="text-right">
                Country
              </Label>
              <div className="col-span-3">
                <Select 
                  value={formData.countryId} 
                  onValueChange={(value) => handleSelectChange('countryId', value)}
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
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !formData.countryId}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StateForm;