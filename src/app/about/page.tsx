
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Vitor Martins::About",
  description: "A dedicated JavaScript developer with a strong passion for technology and web development.",
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;