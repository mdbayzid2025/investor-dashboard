import { BrowserRouter, Navigate, useRoutes } from 'react-router';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { LoginPage } from './pages/LoginPage';

// Admin Components
import { AdminLayout } from './components/AdminLayout';
import { AdminApprovals } from './pages/admin/AdminApprovals';
import { AdminBilling } from './pages/admin/AdminBilling';
import { AdminCMS } from './pages/admin/AdminCMS';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminIndividualChat } from './pages/admin/AdminIndividualChat';
import { AdminInvestorBrief } from './pages/admin/AdminInvestorBrief';
import { AdminManagement } from './pages/admin/AdminManagement';
import { AdminNotifications } from './pages/admin/AdminNotifications';
import { AdminRequestDetails } from './pages/admin/AdminRequestDetails';
import { AdminRequests } from './pages/admin/AdminRequests';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminStock } from './pages/admin/AdminStock';
import { AdminStockDetails } from './pages/admin/AdminStockDetails';
import { AdminTransactions } from './pages/admin/AdminTransactions';
import { AdminUsers } from './pages/admin/AdminUsers';

function AppRoutes() {
  const element = useRoutes([
    // Public Routes with Navbar and Footer
    {
      path: "/",
      element: <AdminLayout />,
       children: [
        { index: true, element: <AdminDashboard /> },
        { path: "users", element: <AdminUsers /> },
        { path: "admins", element: <AdminManagement /> },
        { path: "transactions", element: <AdminTransactions /> },
        { path: "requests", element: <AdminRequests /> },
        { path: "requests/:id", element: <AdminRequestDetails /> },
        { path: "requests/:requestId/chat/:chatId", element: <AdminIndividualChat /> },
        { path: "settings", element: <AdminSettings /> },
        { path: "stock", element: <AdminStock /> },
        { path: "stock/:id", element: <AdminStockDetails /> },
        { path: "notifications", element: <AdminNotifications /> },
        { path: "billing", element: <AdminBilling /> },
        { path: "investor-brief", element: <AdminInvestorBrief /> },
        { path: "cms", element: <AdminCMS /> },
        { path: "approvals", element: <AdminApprovals /> },
        { path: "approvals/requests/:id", element: <AdminRequestDetails /> },
        { path: "approvals/stock/:id", element: <AdminStockDetails /> }
      ]
    },
   
      // Auth Routes
    { path: "/login", element: <LoginPage /> },

    // Catch all
    { path: "*", element: <Navigate to="/" replace /> }
  ]);

  return element;
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;