import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/modal'

export default function EditBookingModal({ booking, isOpen, onClose, onSave }) {
  const [form, setForm] = useState(booking || {});

  useEffect(() => setForm(booking || {}), [booking]);

  if (!isOpen || !booking) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <Modal open={isOpen} onClose={onClose} title="Edit Booking">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Name" value={form.fullName || ''} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} />
        <Input label="Phone" value={form.mobile || ''} onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))} />
        {/* Add more fields as needed */}
        <div className="flex gap-2">
          <Button type="submit">Save</Button>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
}
