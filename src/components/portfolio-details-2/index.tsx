

import React from 'react';
import PortfolioDetailsAreaTwo from './PortfolioDetailsAreaTwo';
import Header from '@/layouts/header/Header';
import Footer from '@/layouts/footer/Footer';

const PortfolioDetailsTwo = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsAreaTwo />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsTwo 