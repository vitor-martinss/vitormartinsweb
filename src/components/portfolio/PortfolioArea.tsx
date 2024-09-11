'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

import project_img_cs from '@/assets/img/portfolio-carlshop-plus/banner-carlshop-plus.jpg';
import project_img_ppcoa from '@/assets/img/portfolio-ppcoa/ppcoa-intro-small.gif';
import project_img_pousada from '@/assets/img/portfolio-pousada/pousada-website.gif';
import project_img_ogma from '@/assets/img/portfolio-ogma/ogma.jpg';

import project_img_2 from '@/assets/img/portfolio/port-inner-up-4.jpg';
import project_img_3 from '@/assets/img/portfolio/port-inner-up-5.jpg';

import project_img_4 from '@/assets/img/portfolio/port-inner-up-2.jpg';
import project_img_5 from '@/assets/img/portfolio/port-inner-up-3.jpg';
import project_img_6 from '@/assets/img/portfolio/portfolio-2.jpg';
import { gsap } from 'gsap';

interface DataType {
  blog_data_1: {
    id: number;
    img: StaticImageData;
    bg_img: string;
    path: string;
    title: string;
    category: string;
  }[];
  blog_data_2: {
    id: number;
    img: StaticImageData;
    bg_img: string;
    path: string;
    title: string;
    category: string;
  }[];
}


const project_content: DataType = {
  blog_data_1: [
    {
      id: 1,
      img: project_img_cs,
      bg_img: '/assets/img/portfolio-carlshop-plus/banner-carlshop-plus.jpg',
      path: '/portfolio/carlshop-plus',
      title: 'Carls Shop Plus',
      category: 'eCommerce',
    },
    {
      id: 3,
      img: project_img_ppcoa,
      bg_img: '/assets/img/portfolio/port-inner-up-1.jpg',
      path: '/portfolio/ppcoa',
      title: 'PPCoA - Architecture Office',
      category: 'Portfolio Website',
    },
    {
      id: 5,
      img: project_img_2,
      bg_img: '/assets/img/portfolio/port-inner-up-4.jpg',
      path: '/portfolio/rovo-agency',
      title: 'Rovo Agency',
      category: 'Textile & Fashion Industry Website',
    },
    {
      id: 7,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/nova-ims',
      title: 'NOVA IMS',
      category: 'University & Academic Website',
    },
    {
      id: 9,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/ecoprogresso',
      title: 'Ecoprogresso',
      category: 'Sustainability & Consulting Website',
    },
    {
      id: 11,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/cnpdpcj-pt',
      title: 'CNPDPCJ - Child Protection and Juvenile Justice',
      category: 'Government & Public Services Website',
    },
    {
      id: 13,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/portugal-digital-week',
      title: 'portugaldigitalweek',
      category: 'Branding',
    }
  ],
  blog_data_2: [
    {
      id: 2,
      img: project_img_2,
      bg_img: '/assets/img/portfolio/port-inner-up-1.jpg',
      path: '/portfolio/carlshop-plus-backoffice',
      title: 'Carls Shop Plus - Backoffice',
      category: 'eCommerce backoffice',
    },
    {
      id: 4,
      img: project_img_pousada,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/pousadas-da-juventude',
      title: 'Pousadas de Juventude',
      category: 'Booking Platform & eCommerce',
    },
    {
      id: 6,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/todo-mundo-usa',
      title: 'Portal Todo Mundo Usa',
      category: 'Shipping and Logistics Information Website',
    },
    {
      id: 8,
      img: project_img_ogma,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/ogma',
      title: 'Ogma',
      category: 'Institutional Website',
    },
    {
      id: 10,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/portugal-clinical-trials',
      title: 'Portugal Clinical Trials',
      category: 'Healthcare & Clinical Research Website',
    },
    {
      id: 12,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/eusoudigital',
      title: 'eusoudigital',
      category: 'Branding',
    },
    {
      id: 14,
      img: project_img_3,
      bg_img: '/assets/img/portfolio/port-inner-up-5.jpg',
      path: '/portfolio/portway',
      title: 'portway',
      category: 'Branding',
    }
  ]
}

const { blog_data_1, blog_data_2 } = project_content

const PortfolioArea = () => {


  useEffect(() => {

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
      x: '25%'
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-portfolio-bg-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.tp-portfolio-bg-text', {
        x: '-80%'
      });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.portfolio-list-scroll-text-animation',
        start: '-500 0%',
        end: 'bottom -10%',
        scrub: true,
        invalidateOnRefresh: true
      }
    })
      .to('.portfolio-list-scroll-text', {
        x: '-80%'
      });

  }, [])


  return (
    <>
      <div className="porfolio-inner__thumb-wrapper tp-portfolio-effect portfolio-list-scroll-text-animation p-relative fix  black-bg-3 pt-80 pb-50"
        data-scrub="0.0001">
        <div className="portfolio-list-scroll-text pb-80 d-flex align-items-center">
          <p>Latest Project</p>
          <p>Latest Project</p>
        </div>
        <div className="container">
          <div className="row grid gx-90">
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {blog_data_1.map((item, index) => (
                  <div key={index} className="tp-portfolio-item mb-70">
                    <Link href={item.path}>
                      <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                        <div className="tp-portfolio-thumb-img include-bg d-none"
                          style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: 'auto' }} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">0{item.id}</span>
                          <span className="tp-portfolio-meta-arrow">

                            <svg width="42" height="13" viewBox="0 0 42 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
            <div className="col-xl-6 grid-item">
              <div className="tp-portfolio-item-wrapper">
                {blog_data_2.map((item, index) => (
                  <div key={index} className="tp-portfolio-item mb-70">
                    <Link href={item.path}>
                      <div className={`tp-portfolio-thumb img-${item.id} w-img fix`}>
                        <div className="tp-portfolio-thumb-img include-bg d-none" style={{ backgroundImage: `url(${item.img})` }}></div>
                        <div className="tp-portfolio-thumb-img">
                          <Image data-speed="0.85" style={{ height: 'auto' }} src={item.img} alt="image-here" />
                        </div>
                      </div>
                      <div className="tp-portfolio-content">
                        <h3 className="tp-portfolio-title">{item.title}</h3>
                        <div className="tp-portfolio-meta d-flex align-items-center">
                          <span className="tp-portfolio-meta-count">0{item.id}</span>
                          <span className="tp-portfolio-meta-arrow">
                            <svg width="42" height="13" viewBox="0 0 42 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M35.4889 1L41 6.33338L35.4889 11.6667" stroke="currentColor"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M0.999998 6.33179H41" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <div className="tp-portfolio-meta-hover">
                            <span>{item.category}</span>
                            <span className="tp-portfolio-meta-link">View Project</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;