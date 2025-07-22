import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CreateBookingModal({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({ fullName: '', mobile: '', /* Add more fields as needed */ });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <Modal open={isOpen} onClose={onClose} title="Create Booking">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Name" value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} />
        <Input label="Phone" value={form.mobile} onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))} />
        {/* Add more fields as needed */}
        <div className="flex gap-2">
          <Button type="submit">Create</Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
}
