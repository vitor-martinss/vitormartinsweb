
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Carls Shop Plus (CS+)",
  description: <>I collaborated with a consulting team from Boost-it to develop Carls Shop Plus (CS+), a B2B eCommerce platform for the Carlsberg Group, designed for distributors and wholesalers across multiple markets. The frontend is a multi-tenant Single Page Application (SPA) built with ReactJS and TypeScript, serving five different markets with a single codebase. This architecture ensures both scalability and maintainability, providing seamless functionality across diverse regions.
  <br /><br />
  As a Front-end Web Developer, I focused on creating a highly performant, responsive UI, leveraging the shared design system, Malty. I worked closely with backend developers to integrate services like Clerk.io for personalized recommendations, Talon.one for dynamic promotions, and Umbraco CMS, alongside backoffice integrations.
  <br /><br />
  Key features of the platform included persistent cart management, customer segmentation, and dynamic pricing, all customized to meet the specific needs of different regions. We ensured that the solution adhered to GDPR compliance and followed security best practices throughout the development lifecycle. Additionally, we implemented Google Analytics to track user behavior and usability, gaining valuable insights into user interactions across the platform.
  <br /><br />
  The frontend communicated with a Backend-for-Frontend (BFF) layer to retrieve data, ensuring efficient interaction with backend services</>,
    
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
                  <span>Carlsberg Group (via consultancy)</span>
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
                  <span>2021 - Present</span>
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
                  <a className="tp-btn-border-md" href="https://www.lbconline.la/" target='_blank' rel='noopenner'>
                    View Laos market

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