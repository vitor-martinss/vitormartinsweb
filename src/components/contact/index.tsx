'use client'
import React from 'react';
import ContactArea from './ContactArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';



const Contact = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <FooterOne style={true} />
        </div>
      </div>

    </>
  );
};

export default Contact;