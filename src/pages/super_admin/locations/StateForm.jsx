import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/Select';
import { useLocation } from '../../../hooks/useLocation';

const StateForm = ({ isOpen, onClose, editData }) => {
  const [formData, setFormData] = useState({
    name: '',
    countryId: '',
  });

  const { addState, updateState, loading, countries } = useLocation();

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        countryId: editData.countryId || '',
      });
    } else {
      // Reset form when adding new
      setFormData({
        name: '',
        countryId: countries.length > 0 ? countries[0].id : '',
      });
    }
  }, [editData, isOpen, countries]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (value) => {
    setFormData({
      ...formData,
      countryId: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editData) {
      await updateState(editData.id, formData);
    } else {
      await addState(formData);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit State' : 'Add New State'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="country" className="text-right">
                Country
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.countryId}
                  onValueChange={handleCountryChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.id}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
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
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {editData ? 'Update' : 'Add'} State
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default StateForm;