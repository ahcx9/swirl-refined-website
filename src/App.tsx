
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';

import { LanguageProvider } from './contexts/LanguageContext';

const NotFound = lazy(() => import('./pages/NotFound'));
const Navbar = lazy(() => import('./components/navbar/Navbar'));
const MobileStickyBar = lazy(() => import('./components/MobileStickyBar'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductOverview = lazy(() => import('./pages/ProductOverview'));
const UseCases = lazy(() => import('./pages/UseCases'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const DigitalMenu = lazy(() => import('./pages/features/DigitalMenu'));
const QROrdering = lazy(() => import('./pages/features/QROrdering'));
const VisitorAnalytics = lazy(() => import('./pages/features/VisitorAnalytics'));
const PointOfSale = lazy(() => import('./pages/features/PointOfSale'));
const InventoryManagement = lazy(() => import('./pages/features/InventoryManagement'));
const KitchenDisplay = lazy(() => import('./pages/features/KitchenDisplay'));
const CRM = lazy(() => import('./pages/features/CRM'));
const FinancialReports = lazy(() => import('./pages/features/FinancialReports'));
const Accounting = lazy(() => import('./pages/features/Accounting'));
const SwirlHardware = lazy(() => import('./pages/features/SwirlHardware'));
const CustomerDisplay = lazy(() => import('./pages/features/CustomerDisplay'));
const Loyalty = lazy(() => import('./pages/features/Loyalty'));
const Reservations = lazy(() => import('./pages/features/Reservations'));
const TokenManagement = lazy(() => import('./pages/features/TokenManagement'));
const InHouseDeliveryManagement = lazy(() => import('./pages/features/InHouseDeliveryManagement'));
const CateringManagement = lazy(() => import('./pages/features/CateringManagement'));
const Support = lazy(() => import('./pages/Support'));
const Presentation = lazy(() => import('./pages/Presentation'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const FFCC = lazy(() => import('./pages/FFCC'));

/** Standalone conversion pages render without the marketing chrome. */
const STANDALONE_ROUTES = ['/ffcc'];

function SiteChrome() {
  const { pathname } = useLocation();
  if (STANDALONE_ROUTES.includes(pathname.replace(/\/+$/, '') || '/')) return null;
  return (
    <Suspense fallback={null}>
      <Navbar />
      <MobileStickyBar />
    </Suspense>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <SiteChrome />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductOverview />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/ffcc" element={<FFCC />} />

            {/* Feature pages */}
            <Route path="/products/digital-menu" element={<DigitalMenu />} />
            <Route path="/products/qr-ordering" element={<QROrdering />} />
            <Route path="/products/visitor-analytics" element={<VisitorAnalytics />} />
            <Route path="/products/restaurant-analytics" element={<VisitorAnalytics />} />
            <Route path="/products/restaurant-point-of-sale" element={<PointOfSale />} />
            <Route path="/products/inventory-management" element={<InventoryManagement />} />
            <Route path="/products/kitchen-display" element={<KitchenDisplay />} />
            <Route path="/products/customer-relationship-management" element={<CRM />} />
            <Route path="/products/financial-reports" element={<FinancialReports />} />
            <Route path="/products/accounting" element={<Accounting />} />
            <Route path="/products/swirl-hardware" element={<SwirlHardware />} />
            <Route path="/products/customer-display" element={<CustomerDisplay />} />
            <Route path="/products/loyalty" element={<Loyalty />} />
            <Route path="/products/reservations" element={<Reservations />} />

            {/* Point of Sale modules */}
            <Route path="/token-management" element={<TokenManagement />} />
            <Route path="/in-house-delivery-management" element={<InHouseDeliveryManagement />} />
            <Route path="/catering-management" element={<CateringManagement />} />

            <Route path="/support" element={<Support />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/roadmap" element={<Roadmap />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
