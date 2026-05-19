import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer';
import BeastlyBuddy from '../shared/BeastlyBuddy';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />
      <main className="flex-1 pt-14">
        <Outlet />
      </main>
      <Footer />
      <BeastlyBuddy />
    </div>
  );
}