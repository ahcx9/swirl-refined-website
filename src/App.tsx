
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import ProductOverview from './pages/ProductOverview';
import UseCases from './pages/UseCases';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import DigitalMenu from './pages/features/DigitalMenu';
import QROrdering from './pages/features/QROrdering';
import Analytics from './pages/features/Analytics';
import PointOfSale from './pages/features/PointOfSale';
import InventoryManagement from './pages/features/InventoryManagement';
import Reservations from './pages/features/Reservations';
import KitchenDisplay from './pages/features/KitchenDisplay';
import CarOrdering from './pages/features/CarOrdering';
import InCarOrdering from './pages/features/InCarOrdering';
import CRM from './pages/features/CRM';
import FinancialReports from './pages/features/FinancialReports';
import PayrollManagement from './pages/features/PayrollManagement';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductOverview />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
        
        {/* Feature pages */}
        <Route path="/products/digital-menu" element={<DigitalMenu />} />
        <Route path="/products/qr-ordering" element={<QROrdering />} />
        <Route path="/products/analytics" element={<Analytics />} />
        <Route path="/products/pos" element={<PointOfSale />} />
        <Route path="/products/inventory-management" element={<InventoryManagement />} />
        <Route path="/products/reservations" element={<Reservations />} />
        <Route path="/products/kitchen-display" element={<KitchenDisplay />} />
        <Route path="/products/car-ordering" element={<CarOrdering />} />
        <Route path="/products/in-car-ordering" element={<InCarOrdering />} />
        <Route path="/products/crm" element={<CRM />} />
        <Route path="/products/financial-reports" element={<FinancialReports />} />
        <Route path="/products/payroll-management" element={<PayrollManagement />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
