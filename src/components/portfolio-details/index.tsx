
import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import HeroPortfolioDetailsArea from './HeroPortfolioDetailsArea';
import PortfolioAboutArea from './PortfolioAboutArea';
import PortfolioDetailsArea from './PortfolioDetailsArea';
import Footer from '@/layouts/footer/Footer';


const PortfolioDetails = () => {
  return (
    <>
      <HeaderFour style={true} />
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