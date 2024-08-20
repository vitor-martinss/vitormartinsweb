'use client'
import React from 'react';
import PortfolioSlider from './PortfolioSlider';
import PortfolioArea from './PortfolioArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';


const Portfolio = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
            <PortfolioArea />
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;