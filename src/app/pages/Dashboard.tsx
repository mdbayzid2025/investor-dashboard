import React from 'react';
import { Outlet } from 'react-router';
import { DashboardLayout } from '@/app/components/DashboardLayout';

export function Dashboard() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
