// Polymer Bazaar - Main Application Entry Point
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminRoute } from "./components/AdminRoute";
import { AdminLayout } from "./components/admin/AdminLayout";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import About from "./pages/About";
import OurMethodology from "./pages/OurMethodology";
import Team from "./pages/Team";
import Timeline from "./pages/Timeline";
import Media from "./pages/Media";
import Press from "./pages/Press";
import BuySell from "./pages/BuySell";
import CrudeFeedstock from "./pages/CrudeFeedstock";
import GlobalBazaar from "./pages/GlobalBazaar";
import IndianBazaar from "./pages/IndianBazaar";
import RateRevision from "./pages/RateRevision";
import PricePrediction from "./pages/PricePrediction";
import CompanyPriceList from "./pages/CompanyPriceList";
import ExchangeRate from "./pages/ExchangeRate";
import BOPPFilm from "./pages/BOPPFilm";
import GovernmentPolicies from "./pages/GovernmentPolicies";
import HistoricalData from "./pages/HistoricalData";
import FutureTrend from "./pages/FutureTrend";
import Services from "./pages/Services";
import Events from "./pages/Events";
import PressRelease from "./pages/PressRelease";
import WhatsAppChatbot from "./pages/WhatsAppChatbot";
import Career from "./pages/Career";
import CareersDetailed from "./pages/CareersDetailed";
import JobDetail from "./pages/JobDetail";
import Partnerships from "./pages/Partnerships";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";

const App = () => (
  <>
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
          <Route path="/our-methodology" element={<Layout><ProtectedRoute><OurMethodology /></ProtectedRoute></Layout>} />
          <Route path="/team" element={<Layout><ProtectedRoute><Team /></ProtectedRoute></Layout>} />
          <Route path="/timeline" element={<Layout><ProtectedRoute><Timeline /></ProtectedRoute></Layout>} />
          <Route path="/media" element={<Layout><ProtectedRoute><Media /></ProtectedRoute></Layout>} />
          <Route path="/press" element={<Layout><ProtectedRoute><Press /></ProtectedRoute></Layout>} />
          <Route path="/buy-sell" element={<Layout><ProtectedRoute><BuySell /></ProtectedRoute></Layout>} />
          <Route path="/crude-feedstock" element={<Layout><ProtectedRoute><CrudeFeedstock /></ProtectedRoute></Layout>} />
          <Route path="/global-bazaar" element={<Layout><ProtectedRoute><GlobalBazaar /></ProtectedRoute></Layout>} />
          <Route path="/indian-bazaar" element={<Layout><ProtectedRoute><IndianBazaar /></ProtectedRoute></Layout>} />
          <Route path="/rate-revision" element={<Layout><ProtectedRoute><RateRevision /></ProtectedRoute></Layout>} />
          <Route path="/price-prediction" element={<Layout><ProtectedRoute><PricePrediction /></ProtectedRoute></Layout>} />
          <Route path="/company-price-list" element={<Layout><ProtectedRoute><CompanyPriceList /></ProtectedRoute></Layout>} />
          <Route path="/exchange-rate" element={<Layout><ProtectedRoute><ExchangeRate /></ProtectedRoute></Layout>} />
          <Route path="/bopp-film" element={<Layout><ProtectedRoute><BOPPFilm /></ProtectedRoute></Layout>} />
          <Route path="/government-policies" element={<Layout><ProtectedRoute><GovernmentPolicies /></ProtectedRoute></Layout>} />
          <Route path="/historical-data" element={<Layout><ProtectedRoute><HistoricalData /></ProtectedRoute></Layout>} />
          <Route path="/future-trend" element={<Layout><ProtectedRoute><FutureTrend /></ProtectedRoute></Layout>} />
          <Route path="/services" element={<Layout><ProtectedRoute><Services /></ProtectedRoute></Layout>} />
          <Route path="/events" element={<Layout><ProtectedRoute><Events /></ProtectedRoute></Layout>} />
          <Route path="/press-release" element={<Layout><ProtectedRoute><PressRelease /></ProtectedRoute></Layout>} />
          <Route path="/whatsapp-chatbot" element={<Layout><ProtectedRoute><WhatsAppChatbot /></ProtectedRoute></Layout>} />
          <Route path="/career" element={<Layout><ProtectedRoute><Career /></ProtectedRoute></Layout>} />
          <Route path="/careers-detailed" element={<Layout><ProtectedRoute><CareersDetailed /></ProtectedRoute></Layout>} />
          <Route path="/job/:id" element={<Layout><ProtectedRoute><JobDetail /></ProtectedRoute></Layout>} />
          <Route path="/partnerships" element={<Layout><ProtectedRoute><Partnerships /></ProtectedRoute></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/terms-conditions" element={<Layout><TermsConditions /></Layout>} />
          
          {/* Admin routes - require admin role */}
          <Route path="/admin" element={<AdminRoute><AdminLayout><AdminDashboard /></AdminLayout></AdminRoute>} />
          <Route path="/admin/users" element={<AdminRoute><AdminLayout><AdminUsers /></AdminLayout></AdminRoute>} />
          <Route path="/admin/buy-sell" element={<AdminRoute><AdminLayout><div>Buy & Sell Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/crude-feedstock" element={<AdminRoute><AdminLayout><div>Crude & Feedstock Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/global-bazaar" element={<AdminRoute><AdminLayout><div>Global Bazaar Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/indian-bazaar" element={<AdminRoute><AdminLayout><div>Indian Bazaar Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/historical-data" element={<AdminRoute><AdminLayout><div>Historical Data Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/future-trend" element={<AdminRoute><AdminLayout><div>Future Trend Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/plant-news" element={<AdminRoute><AdminLayout><div>Plant News Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/vip-delegation" element={<AdminRoute><AdminLayout><div>VIP Delegation Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/press-release" element={<AdminRoute><AdminLayout><div>Press Release Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/events" element={<AdminRoute><AdminLayout><div>Events Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/careers" element={<AdminRoute><AdminLayout><div>Careers Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/whatsapp-bot" element={<AdminRoute><AdminLayout><div>WhatsApp Bot Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/subscriptions" element={<AdminRoute><AdminLayout><div>Subscription Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/user-management" element={<AdminRoute><AdminLayout><div>User Management</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/media" element={<AdminRoute><AdminLayout><div>Media Library</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/cms-pages" element={<AdminRoute><AdminLayout><div>CMS Pages</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/notifications" element={<AdminRoute><AdminLayout><div>Notifications</div></AdminLayout></AdminRoute>} />
          <Route path="/admin/settings" element={<AdminRoute><AdminLayout><div>Settings</div></AdminLayout></AdminRoute>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </>
);

export default App;
