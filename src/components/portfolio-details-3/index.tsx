
import React from 'react';
import PortfolioDetailsThreeArea from './PortfolioDetailsThreeArea';
import Header from '@/layouts/header/Header';
import Footer from '@/layouts/footer/Footer';

const PortfolioDetailsThree = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsThreeArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsThree;