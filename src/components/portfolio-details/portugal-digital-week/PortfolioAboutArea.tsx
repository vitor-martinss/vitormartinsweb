
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Event Platform for Digital Innovation",
  description: <>
  Portugal Digital Week is a national event that promotes digital transformation, innovation, and the adoption of new technologies across industries. The event brings together experts, businesses, and the public to discuss and explore digital strategies that can enhance productivity and economic growth.
  <br /><br />
  As part of a development team, I contributed to building the Portugal Digital Week website, which serves as the central platform for event registration, information, and scheduling. The platform was built using a monolithic architecture, with Umbraco CMS managing the dynamic content. The frontend was developed using Vanilla JavaScript, SCSS (with BEM methodology for organized styling), and Pug for HTML templating, ensuring a responsive and informative user experience.
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
                  <span>Wy Group</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Role in project</h4>
                  <span>Front-end Web Developer</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title mb-20">Services</h4>
                  <span>Front-end Development</span>
                  <span>Cross-functional Collaboration</span>
                </div>
                <div className="porfolio-details__left-content">
                  <h4 className="porfolio-details__left-info-title">Year</h4>
                  <span>2021</span>
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
                <a className="tp-btn-border-md" href="https://www.portugaldigitalweek.pt/" target='_blank' rel="noopenner">                    
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