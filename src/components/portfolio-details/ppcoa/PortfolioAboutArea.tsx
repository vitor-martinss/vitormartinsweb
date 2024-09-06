
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Building a Dynamic and Scalable Portfolio Website for PPCoA",
  description: <>
    PPCoA is an architecture office led by Pedro Oliveira Santos Pinto Correia, a Luso-Angolan architect. The firm focuses on creating spaces that harmonize the relationship between people, space, and architecture, with projects spanning both the public and private sectors.
    <br /><br />
    The PPCoA portfolio website was developed using modern web technologies to ensure high performance, flexibility, and a seamless user experience. Built with Next.js for server-side rendering and dynamic routing, and styled with Tailwind CSS, the site delivers speed and responsiveness across all devices. TanStack was integrated for optimized data handling and efficient state management.
    <br /><br />  
    To ensure easy content updates and management, the site is fully integrated with Umbraco CMS, allowing the PPCoA team to effortlessly manage and showcase their architectural projects.
  </>,
    
}

const { subtitle, title, description } = portfolio_content

const PortfolioAboutArea = () => {
  return (
    <>
      <div id="porfolio-details" className="porfolio-details__info-wrap black-bg-3 pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-4">
              <div className="porfolio-details__left-info">
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Client</h4>
                  <span>PPCoA - Architecture office</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role in project</h4>
                  <span>Front-end Web Developer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Services</h4>
                  <span>Front-end Development</span>
                  <span>Performance Optimization</span>
                  <span>Cross-functional Collaboration</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <div className="porfolio-details__right-info">
                <div className="porfolio-details__right-title-box">
                  <span className="tp-section-subtitle-4 mb-20">{subtitle}</span>
                  <h4 className="tp-section-title-4 mb-35">{title}</h4>
                  <p>{description}</p>
                </div>
                <div className="porfolio-details__right-btn">
                  <a className="tp-btn-border-md" href="http://ppcoa.org/pt/all" target='_blank' rel='noopenner'>
                    View Website

                    <span>
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10L10 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1H10V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioAboutArea;