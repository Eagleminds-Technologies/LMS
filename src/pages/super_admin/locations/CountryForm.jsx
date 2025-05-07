import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { useLocation } from '../../../hooks/useLocation';

const CountryForm = ({ isOpen, onClose, editData }) => {
  // Get location actions from custom hook
  const { addCountry, updateCountry, loading } = useLocation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    code: '',
  });
  
  // Set form data when editing a country
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        code: editData.code || '',
      });
    } else {
      // Reset form when adding a new country
      setFormData({
        name: '',
        code: '',
      });
    }
  }, [editData, isOpen]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editData) {
        // Update existing country
        await updateCountry(editData.id, formData);
      } else {
        // Add new country
        await addCountry(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving country:', error);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit Country' : 'Add Country'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Country Name
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
              <Label htmlFor="code" className="text-right">
                Country Code
              </Label>
              <Input
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="col-span-3"
                placeholder="e.g., US, UK, CA"
                maxLength="2"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CountryForm;