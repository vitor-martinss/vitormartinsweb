import HomeVitor from '@/components/homes/home-vitor';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Vitor Martins::Portfolio",
  description: "Vitor Martins a front-end web developer based in Lisbon. Specialised in creating digital experiences!",
};


const index = () => {
  return (
    <Wrapper>
      <HomeVitor />
    </Wrapper>
  );
};

export default index;