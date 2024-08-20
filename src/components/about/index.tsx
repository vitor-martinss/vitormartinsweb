
import React from 'react';
import AboutInfo from './AboutInfo';
import PersonalInfo from './PersonalInfo';
import HeroAreaAbout from './HeroAreaAbout';

import FooterOne from '@/layouts/footers/FooterOne';
import HeaderThree from '@/layouts/headers/HeaderThree';


const About = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <HeroAreaAbout />
            <AboutInfo />
            <PersonalInfo />
          </main>
          <FooterOne style />
        </div>
      </div>
    </>
  );
};

export default About;