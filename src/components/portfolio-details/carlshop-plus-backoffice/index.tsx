
import React from 'react';
import HeroPortfolioDetailsArea from './HeroPortfolioDetailsArea';
import PortfolioAboutArea from './PortfolioAboutArea';
import PortfolioDetailsArea from './PortfolioDetailsArea';
import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';


const PortfolioDetails = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroPortfolioDetailsArea style={true} />
            <PortfolioAboutArea />
            <PortfolioDetailsArea />
          </main>
          <Footer style={true} />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;