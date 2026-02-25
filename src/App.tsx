
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
import VisitorAnalytics from './pages/features/VisitorAnalytics';
import PointOfSale from './pages/features/PointOfSale';
import InventoryManagement from './pages/features/InventoryManagement';
import KitchenDisplay from './pages/features/KitchenDisplay';
import InCarOrdering from './pages/features/InCarOrdering';
import CRM from './pages/features/CRM';
import FinancialReports from './pages/features/FinancialReports';
import Accounting from './pages/features/Accounting';
import SwirlHardware from './pages/features/SwirlHardware';
import CustomerDisplay from './pages/features/CustomerDisplay';
import Loyalty from './pages/features/Loyalty';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
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
          <Route path="/products/visitor-analytics" element={<VisitorAnalytics />} />
          <Route path="/products/restaurant-analytics" element={<VisitorAnalytics />} />
          <Route path="/products/restaurant-point-of-sale" element={<PointOfSale />} />
          <Route path="/products/inventory-management" element={<InventoryManagement />} />
          <Route path="/products/kitchen-display" element={<KitchenDisplay />} />
          <Route path="/products/ordering-from-car" element={<InCarOrdering />} />
          <Route path="/products/in-car-ordering" element={<InCarOrdering />} />
          <Route path="/products/customer-relationship-management" element={<CRM />} />
          <Route path="/products/financial-reports" element={<FinancialReports />} />
          <Route path="/products/accounting" element={<Accounting />} />
          <Route path="/products/swirl-hardware" element={<SwirlHardware />} />
          <Route path="/products/customer-display" element={<CustomerDisplay />} />
          <Route path="/products/loyalty" element={<Loyalty />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
