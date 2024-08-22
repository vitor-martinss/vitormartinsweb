'use client'
import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import PortfolioArea from './PortfolioArea';
import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';


const Portfolio = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
            <PortfolioArea />
          </main>
          <Footer style={true} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;