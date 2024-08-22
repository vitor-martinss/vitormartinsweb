'use client';
import React from 'react';
import Header from '@/layouts/header/Header';
import Hero from './Hero';
import Process from './Process';
import Project from './Projects';
import Service from './Services';
import Skill from './Skills';
import Footer from '@/layouts/footer/Footer';

const Home = () => {

  return (
    <>
      <Header />
      <div id="smooth-wrapper" className="black-bg-3">
        <div id="smooth-content">
          <main>
            <Hero />
            <Service />
            <Process />
            <Project />
            <Skill />
          </main>
          <Footer style/>
        </div>
      </div>
    </>
  );
};

export default Home;