import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal';

export default function EditBookingModal({ booking, isOpen, onClose, onSave }) {
  const [form, setForm] = useState(booking || {});

  useEffect(() => setForm(booking || {}), [booking]);

  if (!isOpen || !booking) return null;

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal open={isOpen} onClose={onClose} title="Edit Booking">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          value={form.fullName || ''}
          onChange={e => handleChange('fullName', e.target.value)}
        />
        <Input
          label="Phone"
          value={form.mobile || ''}
          onChange={e => handleChange('mobile', e.target.value)}
        />
        <Input
          label="Sport"
          value={form.sportType || ''}
          onChange={e => handleChange('sportType', e.target.value)}
        />
        <Input
          label="Date"
          type="date"
          value={form.date || ''}
          onChange={e => handleChange('date', e.target.value)}
        />
        <Input
          label="Time"
          value={form.timeSlot || ''}
          onChange={e => handleChange('timeSlot', e.target.value)}
          placeholder="e.g. 10:00-11:00"
        />
        <div className="flex gap-2">
          <Button type="submit">Save</Button>
          <Button variant="outline" type="button" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
