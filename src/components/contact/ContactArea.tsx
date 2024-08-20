'use client'
import React, { useState } from 'react';
import Image from 'next/image';

import contact_img from "@/assets/img/contact/contact.jpg";
import contact_flower_img_1 from "@/assets/img/contact/contact-flower.png";
import contact_flower_img_2 from "@/assets/img/contact/contact-flower-text.png";
import ContactForm from '../forms/ContactForm';


interface DataType {
  subtitle: string;
  title_1: string;
  title_2: string;
  email: string;
  mail_text: React.JSX.Element;
  categorys: {
    id: string;
    title: string;
  }[];
}


const contact_content: DataType = {
  subtitle: "Contact Me",
  title_1: "Let’s Talk",
  title_2: "About your Project",
  email: "vitormartinsweb@gmail.com",
  mail_text: <>Interested in working with me? Submit your <br /> project inquiry using the form below.</>,
  categorys: [
    { id: "frontend_development", title: "Front-End Development" },
    { id: "web_performance", title: "Web Performance Optimization" },
    { id: "accessibility", title: "Web Accessibility" },
    { id: "design_systems", title: "Design Systems" },
    { id: "code_review", title: "Code Review & Refactoring" },
    { id: "android_development", title: "Android Development" },
    { id: "iso_development", title: "iOS Development" },
    { id: "other", title: "Other" },
  ],
}

const {
  subtitle,
  title_1,
  title_2,
  email,
  mail_text,
  categorys,
} = contact_content


const ContactArea = () => {


  const [selectedCategories, setSelectedCategories] = useState<number[]>([2, 5]);
  // Function to toggle the selection of a category
  const toggleSelection = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };


  return (
    <>
      <div className="contact-inner__area contact-inner__ptb p-relative black-bg-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 offset-xl-1">
              <div className="row align-items-center">
                <div className="col-xl-9 col-lg-10">
                  <div className="contact-inner__top-section-title-box mb-70">
                    <span className="contact-inner__subtitle">{subtitle}</span>
                    <h4 className="contact-inner__title tp-char-animation tp-hero-3__content">{title_1} <br />
                      {title_2}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="contact-inner__mail-box mb-90">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 ">
                    <div className="contact-inner__mail-info">
                      <span>Email Me:</span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 ">
                    <div className="contact-inner__mail-text">
                      <p>{mail_text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="contact-inner__category mb-85">
                  <h4 className="contact-inner__category-title">I'm interested in...</h4>
                  <div className="contact-inner__category-wrapper">
                    {categorys.map((item, index) => (
                      <label key={index}
                        htmlFor={item.id}
                        onClick={() => toggleSelection(index)}
                        className={`contact-category-btn ${selectedCategories.includes(index) ? 'active' : ''}`}>
                        {item.title}
                      </label>
                    ))}
                    {categorys.map((item, index) => (
                      <input key={index} type="checkbox" id={item.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactArea;