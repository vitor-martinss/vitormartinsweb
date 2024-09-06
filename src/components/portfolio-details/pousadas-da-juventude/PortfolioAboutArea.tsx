
import React from 'react';


const portfolio_content = {
  subtitle: "ABOUT THE PROJECT",
  title: "Dynamic Hostel Search and Booking Platform",
  description: <>
    The Pousadas de Juventude website is a monolithic platform built on Umbraco CMS, designed to offer an intuitive and seamless booking experience for users searching for youth hostels across Portugal. I developed the frontend using Vanilla JavaScript, SCSS (following the BEM methodology), and Pug for HTML templating.
    <br /><br />  
    One of the standout features of this project is the Pousadas page, where users can easily search for hostels using an interactive map. Integrating the Google Maps API to display hostel locations and enable search functionality was both challenging and rewarding, as it enhanced the user experience and allowed for more dynamic interactions on the platform.
    <br /><br />  
    In addition to the main website, I also developed the Pousadas de Juventude shop, offering users a streamlined eCommerce experience for purchasing travel-related products and services.
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
                  <a className="tp-btn-border-md" href="https://www.pousadasjuventude.pt/" target='_blank' rel='noopenner'>
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