import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfileSettings from './pages/ProfileSettings';
import OrderHistory from './pages/OrderHistory';
import MyWardrobe from './pages/MyWardrobe';
import EcoImpact from './pages/EcoImpact';
import PaymentMethods from './pages/PaymentMethods';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-earth-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/wardrobe" element={<MyWardrobe />} />
            <Route path="/eco-impact" element={<EcoImpact />} />
            <Route path="/payment" element={<PaymentMethods />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
