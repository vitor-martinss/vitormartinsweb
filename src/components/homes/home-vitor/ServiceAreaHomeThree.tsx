'use client';
import Link from 'next/link'; 
import Image from 'next/image';
import React from 'react';
import circle_img from "@/assets/img/footer/footer-circle-img.png";
import service_shape_1 from "@/assets/img/portfolio/shape-1.png";
import service_shape_2 from "@/assets/img/portfolio/shape-2.png";
import service_star_icon from "@/assets/img/portfolio/star.png";
import StrategyIcno from '@/svg/home-3/StrategyIcno';
import LeadershipIcon from '@/svg/home-3/LeadershipIcon';
import DevelopmentIcon from '@/svg/home-3/DevelopmentIcon';

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_info: React.JSX.Element;
  btn_text: React.JSX.Element;
  service_data: {
    id: number;
    icon: JSX.Element;
    title: React.JSX.Element;
    sm_des: React.JSX.Element;
    tag_1: string;
    tag_2: string;
  }[];
}


const service_content: DataType = {
  subtitle: "MY PROCESS",
  title: <>How I <br /> Carry Out My Projects</>,
  sm_info: <>I offer a range of services to enhance your website and achieve your goals.</>,
  btn_text: <>Call me to get more extra service <span>Call Now</span></>,
  service_data: [
    {
      id: 1,
      icon: <StrategyIcno />,
      title: <>Planning</>,
      sm_des: <>I create a detailed project plan, defining goals, timelines, and best practices for a successful execution.</>,
      tag_1: "Project Goals",
      tag_2: "Timeline & Milestones",
    },
    {
      id: 2,
      icon: <DevelopmentIcon />,
      title: <>Development</>,
      sm_des: <>I build and code your project, implementing designs into a functional and responsive website.</>,
      tag_1: "Front-End Coding",
      tag_2: "Interactive Features",
    },
    {
      id: 3,
      icon: <DevelopmentIcon />,
      title: <>Testing</>,
      sm_des: <>I test the website to ensure it meets quality standards and performs well across all browsers.</>,
      tag_1: "Quality Assurance",
      tag_2: "Testing",
    },
    {
      id: 4,
      icon: <LeadershipIcon />,
      title: <>Maintenance</>,
      sm_des: <>I provide ongoing support and updates to keep your website running smoothly and efficiently.</>,
      tag_1: "Regular Updates",
      tag_2: "Performance Monitoring",
    },
  ]
}

const { subtitle, title, sm_info, btn_text, service_data } = service_content

const ServiceAreaHomeThree = ({ style }: any) => {
  return (
    <>
      <div id="service" className={`tp-service-3__area services-panel-area tp-service-3__overlay-bg ${style ? 'sv-iiner__customize' : ''} black-bg-2 pt-150 pb-125 z-index-1`}>

        <div className="tp-service-3__shape-1">
          <Image src={service_shape_1} alt="image-here" />
        </div>
        <div className="tp-service-3__shape-2 d-none d-lg-block">
          <Image src={service_shape_2} alt="image-here" />
        </div>
        <div className="tp-service-3__shape-3">
          <Image data-speed="1.2" src={service_star_icon} alt="image-here" />
        </div>
        
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="tp-service-3__title-box services-panel-pin">
                <span className="tp-section-subtitle-3 tp_title_anim">{subtitle}</span>
                <h3 className="tp-section-title-3 tp_title_anim">{title}</h3>
                <p className="tp_title_anim">{sm_info}</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tp-service-3__right-wrap">

                {service_data.map((item, i) => (
                  <div key={i} className="tp-service-3__item d-flex align-items-start mb-25 services-panel">
                    <div className="tp-service-3__icon">
                      <span>
                        {item.icon}
                      </span>
                    </div>
                    <div className="tp-service-3__content">
                      <h3 className="tp-service-3__content-title">
                        <Link href="/service-details">{item.title}</Link>
                      </h3>
                      <p>{item.sm_des}</p>
                      <div className="tp-service-3__content-tag">
                        <span className="mr-5">{item.tag_1}</span>
                        <span>{item.tag_2}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="tp-service-3__btn-box">
                  <Link href="/contact">{btn_text}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ServiceAreaHomeThree;