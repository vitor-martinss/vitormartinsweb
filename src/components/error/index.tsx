
import React from 'react'; 
import Breadcrumb from './Breadcrumb';
import Footer from '@/layouts/footer/Footer';
import Header from '@/layouts/header/Header';

const Error = () => {
  return (
    <>
      <Header />
      <main>
        <Breadcrumb />
        <section className="error-area black-bg-2 z-index-11 py-5">
          <div className="tp-erorr-bg"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-erorr-content text-center">
                  <h4 className="blog-list__title tp-char-animation text-light my-0 py-0">4 | <span>0 | </span>4</h4> 
                  <h2 className="tp-char-animation text-light">Ooops....</h2>
                  <h3 className="blog-list__title tp-char-animation text-light">We are sorry, something went wrong</h3>                                     
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer style/>
    </>
  );
};

export default Error;