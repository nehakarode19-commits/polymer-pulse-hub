import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";
import BuySell from "./pages/BuySell";
import CrudeFeedstock from "./pages/CrudeFeedstock";
import GlobalBazaar from "./pages/GlobalBazaar";
import IndianBazaar from "./pages/IndianBazaar";
import HistoricalData from "./pages/HistoricalData";
import FutureTrend from "./pages/FutureTrend";
import Services from "./pages/Services";
import Career from "./pages/Career";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/buy-sell" element={<Layout><BuySell /></Layout>} />
          <Route path="/crude-feedstock" element={<Layout><CrudeFeedstock /></Layout>} />
          <Route path="/global-bazaar" element={<Layout><GlobalBazaar /></Layout>} />
          <Route path="/indian-bazaar" element={<Layout><IndianBazaar /></Layout>} />
          <Route path="/historical-data" element={<Layout><HistoricalData /></Layout>} />
          <Route path="/future-trend" element={<Layout><FutureTrend /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/career" element={<Layout><Career /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
