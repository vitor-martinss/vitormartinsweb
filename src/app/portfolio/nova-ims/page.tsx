
import PortfolioDetails from '@/components/portfolio-details/nova-ims';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Portfolio Details - Personal Creative Portfolio & Resume Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;