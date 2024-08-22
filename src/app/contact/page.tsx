
import Contact from '@/components/contact';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Vitor Martins::Contact",
  description: "If in doubt, reach me out! Vitor Martins a front-end web developer based in Lisbon.",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;