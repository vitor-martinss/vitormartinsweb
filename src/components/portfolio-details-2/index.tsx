

import React from 'react';
import PortfolioDetailsAreaTwo from './PortfolioDetailsAreaTwo';
import HeaderSix from '@/layouts/headers/HeaderSix';
import FooterSix from '@/layouts/footer/FooterSix';

const PortfolioDetailsTwo = () => {
  return (
    <>
      <HeaderSix style_bg={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioDetailsAreaTwo />
          </main>
          <FooterSix />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsTwo 