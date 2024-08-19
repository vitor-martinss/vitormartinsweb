import HomeVitor from '@/components/homes/home-vitor';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Home Vitor - Diego - Personal Creative Portfolio & Resume Next js Template",
};


const index = () => {
  return (
    <Wrapper>
      <HomeVitor />
    </Wrapper>
  );
};

export default index;