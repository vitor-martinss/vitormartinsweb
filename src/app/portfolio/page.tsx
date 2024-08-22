
import Portfolio from '@/components/portfolio';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Vitor Martins::Portfolio",
  description: "Latest projects from Vitor Martins a front-end web developer based in Lisbon.",
};


const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;