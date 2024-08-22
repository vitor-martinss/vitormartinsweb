'use client';
import React from 'react';
import HeaderThree from '@/layouts/headers/HeaderThree';
import Hero from './Hero';
import Process from './Process';
import Project from './Projects';
import Service from './Services';
import Skill from './Skills';
import FooterOne from '@/layouts/footers/FooterOne';

const Home = () => {

  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <Hero />
            <Service />
            <Process />
            <Project />
            <Skill />
          </main>
          <FooterOne style/>
        </div>
      </div>
    </>
  );
};

export default Home;