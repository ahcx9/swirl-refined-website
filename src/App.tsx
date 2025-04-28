import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductOverview from "./pages/ProductOverview";
import NotFound from "./pages/NotFound";
import DigitalMenu from "./pages/features/DigitalMenu";
import QROrdering from "./pages/features/QROrdering";
import Analytics from "./pages/features/Analytics";
import PointOfSale from "./pages/features/PointOfSale";
import FinancialReports from "./pages/features/FinancialReports";
import CRM from "./pages/features/CRM";
import CarOrdering from "./pages/features/CarOrdering";
import PayrollManagement from "./pages/features/PayrollManagement";
import InventoryManagement from "./pages/features/InventoryManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductOverview />} />
          <Route path="/products/digital-menu" element={<DigitalMenu />} />
          <Route path="/products/qr-ordering" element={<QROrdering />} />
          <Route path="/products/analytics" element={<Analytics />} />
          <Route path="/products/pos" element={<PointOfSale />} />
          <Route path="/products/financial-reports" element={<FinancialReports />} />
          <Route path="/products/crm" element={<CRM />} />
          <Route path="/products/ordering-from-car" element={<CarOrdering />} />
          <Route path="/products/payroll-management" element={<PayrollManagement />} />
          <Route path="/products/inventory-management" element={<InventoryManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
