import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useBookings } from '@/hooks/useBookings';
import { useAuthContext } from '@/context/AuthContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import BlockSlotModal from '@/components/BlockSlotModal';
import BlockDateModal from '@/components/BlockDateModal';
import EditBookingModal from '@/components/EditBookingModal';
import CreateBookingModal from '@/components/CreateBookingModal';

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { logout } = useAuth();
  const { user } = useAuthContext();
  const [dateFilter, setDateFilter] = useState('');
  const [searchFilter, setSearchFilter] = useState('');
  const [showBlockSlotModal, setShowBlockSlotModal] = useState(false);
  const [showBlockDateModal, setShowBlockDateModal] = useState(false);

  // new states for modals
  const [editBooking, setEditBooking] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { bookings, loading: bookingsLoading, refetch } = useBookings({
    dateFilter,
    searchFilter,
  });

  useEffect(() => {
    if (!user) setLocation('/admin-access-sptp2024');
  }, [user, setLocation]);

  const handleLogout = async () => {
    try {
      await logout();
      toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
      setLocation('/admin-login');
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to logout. Please try again.', variant: 'destructive' });
}
