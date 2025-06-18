import { Outlet } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';

export default function AdminPage() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}
