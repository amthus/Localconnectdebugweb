
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import UserTypes from '@/components/UserTypes';
import Statistics from '@/components/Statistics';
import AppPreview from '@/components/AppPreview';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <Features />
      <UserTypes />
      <Statistics />
      <AppPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
