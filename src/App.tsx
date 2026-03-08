/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAdmin from './auth/RequireAdmin';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Moderation from './pages/admin/Moderation';
import Listings from './pages/admin/Listings';
import Transactions from './pages/admin/Transactions';
import Settings from './pages/admin/Settings';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="moderation" element={<Moderation />} />
          <Route path="listings" element={<Listings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
