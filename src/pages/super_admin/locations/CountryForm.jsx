import React, { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '../../../components/ui/Dialog';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/Label';
import { useLocation } from '../../../hooks/useLocation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Form validation schema
const schema = yup.object().shape({
  name: yup.string()
    .required('Country name is required')
    .min(2, 'Name must be at least 2 characters'),
  code: yup.string()
    .required('Country code is required')
    .matches(/^[A-Z]{2}$/, 'Code must be exactly 2 uppercase letters')
});

const CountryForm = ({ isOpen, onClose, editData }) => {
  const { addCountry, updateCountry, loading } = useLocation();
  
  // Initialize React Hook Form
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      code: ''
    }
  });

  // Reset form when modal opens or edit data changes
  useEffect(() => {
    if (editData) {
      reset({
        name: editData.name || '',
        code: editData.code || '',
      });
    } else {
      // Reset form when adding new
      reset({
        name: '',
        code: '',
      });
    }
  }, [editData, isOpen, reset]);

  // Form submission handler
  const onSubmit = async (data) => {
    if (editData) {
      await updateCountry(editData.id, data);
    } else {
      await addCountry(data);
    }
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{editData ? 'Edit Country' : 'Add New Country'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Country Name
              </Label>
              <div className="col-span-3">
                <Input
                  id="name"
                  {...register('name')}
                  className={`${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="code" className="text-right">
                Country Code
              </Label>
              <div className="col-span-3">
                <Input
                  id="code"
                  {...register('code')}
                  placeholder="2-letter code (e.g., US)"
                  maxLength={2}
                  className={`${errors.code ? 'border-red-500' : 'border-gray-300'} uppercase`}
                />
                {errors.code && (
                  <p className="text-xs text-red-500 mt-1">{errors.code.message}</p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {editData ? 'Update' : 'Add'} Country
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CountryForm;