
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Backoffice for Carls Shop Plus (CS+)",
  description: <>
    As part of the Carlsberg Group, I contributed to the development of the CXBackoffice, a platform built using a micro-frontend architecture with single-spa. This architecture allows multiple applications to communicate through events managed by CX-Services. The core framework serves as a canvas for displaying various apps, with logic provided by JavaScript and plans to integrate React for new features.
    Key applications within the platform include:<br /><br />
    <strong>CX-Services:</strong> Facilitates app communication and shared information, such as user data.<br />
    <strong>Landing:</strong> A React-based app for backoffice presentation and login.<br />
    <strong>Navigation:</strong> Handles app permissions and navigation between apps for authorized users.<br />
    <strong>Sub-Navigation:</strong> Displays user information, app versions, and menus.<br />
    <strong>Management:</strong> Manages user permissions and file uploads with a React + Redux + Saga architecture.<br /><br />
    This scalable and modular approach ensures seamless functionality and collaboration across multiple backoffice applications.
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
                  <a className="tp-btn-border-md" href="https://cbo.lbcshop.com/" rel='noopenner' target='_blank'>
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