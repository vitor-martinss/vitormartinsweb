'use client'
import React from 'react';
import ContactArea from './ContactArea';
import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';



const Contact = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <ContactArea />
          </main>
          <Footer style={true} />
        </div>
      </div>

    </>
  );
};

export default Contact;