import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { Select } from '../../../components/ui/Select';
import { useLocation } from '../../../hooks/useLocation';

const CityForm = ({ isOpen, onClose, editData, states }) => {
  const [formData, setFormData] = useState({
    name: '',
    stateId: '',
  });

  const { addCity, updateCity, loading } = useLocation();

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || '',
        stateId: editData.stateId || '',
      });
    } else {
      // Reset form when adding new
      setFormData({
        name: '',
        stateId: states.length > 0 ? states[0].id : '',
      });
    }
  }, [editData, isOpen, states]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStateChange = (value) => {
    setFormData({
      ...formData,
      stateId: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editData) {
      await updateCity(editData.id, formData);
    } else {
      await addCity(formData);
    }

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit City' : 'Add New City'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="state" className="text-right">
                State
              </Label>
              <div className="col-span-3">
                <Select
                  value={formData.stateId}
                  onValueChange={handleStateChange}
                  required
                >
                  {states.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name} ({state.countryName})
                    </option>
                  ))}
                </Select>
              </div>
            </div>
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
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {editData ? 'Update' : 'Create'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CityForm;