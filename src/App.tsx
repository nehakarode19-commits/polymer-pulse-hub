import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
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
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
          
          {/* Protected routes - require active subscription */}
          <Route path="/profile" element={<Layout><ProtectedRoute><Profile /></ProtectedRoute></Layout>} />
          <Route path="/about" element={<Layout><ProtectedRoute><About /></ProtectedRoute></Layout>} />
          <Route path="/buy-sell" element={<Layout><ProtectedRoute><BuySell /></ProtectedRoute></Layout>} />
          <Route path="/crude-feedstock" element={<Layout><ProtectedRoute><CrudeFeedstock /></ProtectedRoute></Layout>} />
          <Route path="/global-bazaar" element={<Layout><ProtectedRoute><GlobalBazaar /></ProtectedRoute></Layout>} />
          <Route path="/indian-bazaar" element={<Layout><ProtectedRoute><IndianBazaar /></ProtectedRoute></Layout>} />
          <Route path="/historical-data" element={<Layout><ProtectedRoute><HistoricalData /></ProtectedRoute></Layout>} />
          <Route path="/future-trend" element={<Layout><ProtectedRoute><FutureTrend /></ProtectedRoute></Layout>} />
          <Route path="/services" element={<Layout><ProtectedRoute><Services /></ProtectedRoute></Layout>} />
          <Route path="/career" element={<Layout><ProtectedRoute><Career /></ProtectedRoute></Layout>} />
          <Route path="/job/:id" element={<Layout><ProtectedRoute><JobDetail /></ProtectedRoute></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
