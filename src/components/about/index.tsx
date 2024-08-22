
import React from 'react';
import AboutInfo from './AboutInfo';
import PersonalInfo from './PersonalInfo';
import HeroAreaAbout from './HeroAreaAbout';

import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';


const About = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <HeroAreaAbout />
            <AboutInfo />
            <PersonalInfo />
          </main>
          <Footer style />
        </div>
      </div>
    </>
  );
};

export default About;