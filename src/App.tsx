
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProductOverview from "./pages/ProductOverview";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import DigitalMenu from "./pages/features/DigitalMenu";
import QROrdering from "./pages/features/QROrdering";
import Analytics from "./pages/features/Analytics";
import PointOfSale from "./pages/features/PointOfSale";
import FinancialReports from "./pages/features/FinancialReports";
import CRM from "./pages/features/CRM";
import InCarOrdering from "./pages/features/CarOrdering";
import PayrollManagement from "./pages/features/PayrollManagement";
import InventoryManagement from "./pages/features/InventoryManagement";
import KitchenDisplay from "./pages/features/KitchenDisplay";
import Reservations from "./pages/features/Reservations";
import Industries from "./pages/Industries";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products/digital-menu" element={<DigitalMenu />} />
          <Route path="/products/qr-ordering" element={<QROrdering />} />
          <Route path="/products/analytics" element={<Analytics />} />
          <Route path="/products/pos" element={<PointOfSale />} />
          <Route path="/products/financial-reports" element={<FinancialReports />} />
          <Route path="/products/crm" element={<CRM />} />
          <Route path="/products/ordering-from-car" element={<InCarOrdering />} />
          <Route path="/products/payroll-management" element={<PayrollManagement />} />
          <Route path="/products/inventory-management" element={<InventoryManagement />} />
          <Route path="/products/kitchen-display" element={<KitchenDisplay />} />
          <Route path="/products/reservations" element={<Reservations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
