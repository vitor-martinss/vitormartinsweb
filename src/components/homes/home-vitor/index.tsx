'use client';
import React from 'react';
import HeaderThree from '@/layouts/headers/HeaderThree';
import HeroAreaHomeThree from './HeroAreaHomeThree';
import ServiceAreaHomeThree from './ServiceAreaHomeThree';
import ProjectAreaHomeThree from './ProjectAreaHomeThree';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import SkillAreaHomeOne from './SkillAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeVitor = () => {

  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <HeroAreaHomeThree />
            <ServiceAreaHomeOne />
            <ServiceAreaHomeThree />
            <ProjectAreaHomeThree />
            <SkillAreaHomeOne />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  );
};

export default HomeVitor;