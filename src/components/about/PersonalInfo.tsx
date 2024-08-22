'use client';
import Image from "next/image";

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png"; 


interface DataType {
  subtitle: string;
  title: string;
  email: string;
  experience_data: {
    id: number;
    time: string;
    designation: string;
    company: string;
  }[];
  education_data: {
    id: number;
    time: string;
    designation: string;
    collage: string;
  }[];
}

const personal_content: DataType = {
  subtitle: 'Personal Info',
  title: 'Delivering expertise with a touch of creativity and a commitment to excellence.',
  email: "vitormartinsweb@gmail.com",
  experience_data: [
    {
      id: 1,
      time: "2021 - Present",
      designation: "Front-end Developer",
      company: "Carlsberg Group",
    },
    {
      id: 1,
      time: "2019 - 2021",
      designation: "Front-end Developer",
      company: "WYgroup",
    },
    {
      id: 2,
      time: "2018 - 2021",
      designation: "Freelancer Web Designer",
      company: "VM Web Designer",
    },
    {
      id: 3,
      time: "2013 - 2015",
      designation: "Project Manager",
      company: "Sales Gama",
    },
    {
      id: 4,
      time: "2009 - 2013",
      designation: "Administrative",
      company: "Potencial - Construction Services",
    },
    {
      id: 5,
      time: "2006 - 2009",
      designation: "Financial Clerk",
      company: "Potencial - Financial Services",
    }
  ],
  education_data: [
    {
      id: 1,
      time: "2024 - 2026",
      designation: "Software Engineering",
      collage: "Master of Business Administration (MBA)",
    },
    {
      id: 2,
      time: "2020 - 2021",
      designation: "React & NodeJS Bootcamp",
      collage: "GoStack - Rocketseat",
    },
    {
      id: 3,
      time: "2017 - 2018",
      designation: "Web Design",
      collage: "LSD - Lisbon School of Design",
    },
    {
      id: 4,
      time: "2011 - 2012",
      designation: "Project Management ",
      collage: "Master of Business Administration (MBA)",
    },
    {
      id: 5,
      time: "2006 - 2010",
      designation: "Business Administration and Management",
      collage: "Bachelor's Degree",
    }
  ]
}

const { subtitle, title, email, experience_data, education_data } = personal_content

const PersonalInfo = () => {

  return (
    <>
      <div className="ab-personal-info__area black-bg-3 pb-30 tp-personal-info-pin-section">
        <div className="container">
          <div className="row">

            <div className="col-xl-6 col-lg-6">
              <div className="tp-personal-info-pin">
                <div className="ab-personal-info__left-box mr-200">
                  <div className="tp-services-wrapper tp-services-capsule-wrapper p-relative"
                    data-tp-throwable-scene="true">
                    <div className="ab-personal-info__left-content">
                      <h4 className="ab-personal-info__left-content-title">
                        <span>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M26.7012 1.29878C25.8354 0.433026 24.7007 0.00012207 23.5659 0.00012207C22.4311 0.00012207 21.2964 0.433085 20.4306 1.29878L18.792 2.93738L25.0623 9.20812L26.7012 7.56934C27.567 6.70353 27.9999 5.56887 27.9999 4.43409C27.9999 3.29925 27.567 2.16446 26.7012 1.29878Z"
                              fill="currentcolor" />
                            <path
                              d="M1.96617 19.7631L0.108182 21.6212L0 27.9999L6.37874 27.8917L8.23685 26.0336L1.96617 19.7631Z"
                              fill="currentcolor" />
                            <path
                              d="M17.9672 3.76208L11.5667 10.1625L2.79102 18.9382L9.06158 25.2088L17.8373 16.4331L24.2376 10.0329L17.9672 3.76208ZM10.1426 18.6818L9.31775 17.857L10.1238 17.0509L10.9487 17.8758L10.1426 18.6818ZM12.2686 16.5558L11.4437 15.731L12.2686 14.9061L13.0934 15.731L12.2686 16.5558ZM14.4134 14.4111L13.5886 13.5862L14.414 12.7614L15.2388 13.5862L14.4134 14.4111ZM16.5587 12.2662L15.7339 11.4414L16.5587 10.6166L17.3836 11.4414L16.5587 12.2662Z"
                              fill="currentcolor" />
                            <path d="M27.9982 26.8334H13.3506V28H27.9982V26.8334Z" fill="currentcolor" />
                          </svg>
                        </span>
                        {subtitle}
                      </h4>
                      <p>{title}</p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div> 

                    <div className="tp-services-capsule-item-wrapper">
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Front-end Development</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Optimization</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Design Systems</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FFDB59", color: "#121212" }}>Consulting</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Performance</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C"}}>SEO</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#00CC97" }}>Responsive</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>UI/UX Implementation</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#FF759C" }}>Google Analytics</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="tp-services-capsule-item" style={{ backgroundColor: "#19B3F1" }}>Testing</span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="">
                          <Image src={shape_1} alt="brand-img" />
                        </span>
                      </p>
                      <p data-tp-throwable-el="">
                        <span className="">
                          <Image src={shape_2} alt="brand-img" />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="ab-personal-info__right-wrap">
                <div className="ab-personal-info__exprience mb-85 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                  <h4 className="ab-personal-info__right-title">
                    <span>
                      <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.002 0L16.3174 11.6667L28.002 14L16.3174 16.3333L14.002 28L11.6555 16.3333L0.00195312 14L11.6555 11.6667L14.002 0Z" fill="currentcolor" />
                      </svg>
                    </span>{' '}
                    Experience
                  </h4>

                  {experience_data.map((item, index) => (
                    <div key={index} className="ab-personal-info__exprience-box d-flex align-items-start ">
                      <span className="ab-personal-info__exprience-length">{item.time}</span>
                      <div className="ab-personal-info__exprience-content">
                        <h4 className="ab-personal-info__exprience-title">{item.designation}</h4>
                        <span>{item.company}</span>
                      </div>
                    </div>
                  ))}

                </div>

                <div className="ab-personal-info__exprience mb-85 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                  <h4 className="ab-personal-info__right-title">
                    <span>

                      <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.3744 5.36788L16.3119 0.0534375C16.1101 -0.0178125 15.8899 -0.0178125 15.6881 0.0534375L0.625626 5.36788C0.251126 5.5 0.000500749 5.85375 7.49189e-07 6.25087C-0.000499251 6.648 0.249313 7.00231 0.623501 7.13531L15.686 12.4901C15.7876 12.5262 15.8938 12.5443 16 12.5443C16.1063 12.5443 16.2124 12.5262 16.314 12.4901L31.3765 7.13531C31.7507 7.00231 32.0004 6.648 32 6.25087C31.9995 5.85375 31.7489 5.5 31.3744 5.36788Z" fill="currentcolor" />
                        <path d="M29.748 17.8816V9.7041L27.873 10.3707V17.8816C27.3083 18.2067 26.9277 18.8157 26.9277 19.5142C26.9277 20.2125 27.3083 20.8217 27.873 21.1467V25.754C27.873 26.2717 28.2928 26.6915 28.8105 26.6915C29.3283 26.6915 29.748 26.2717 29.748 25.754V21.1468C30.3128 20.8218 30.6934 20.2126 30.6934 19.5142C30.6934 18.8158 30.3129 18.2067 29.748 17.8816Z" fill="currentcolor" />
                        <path d="M15.9996 14.4192C15.6778 14.4192 15.3608 14.3645 15.0575 14.2566L6.58984 11.2463V15.3718C6.58984 16.3812 7.64278 17.2347 9.71941 17.9087C11.5295 18.4962 13.7598 18.8198 15.9996 18.8198C18.2393 18.8198 20.4697 18.4962 22.2798 17.9087C24.3564 17.2347 25.4093 16.3812 25.4093 15.3718V11.2463L16.9417 14.2566C16.6383 14.3645 16.3214 14.4192 15.9996 14.4192Z" fill="currentcolor" />
                      </svg>

                    </span> {' '}
                    Education
                  </h4>

                  {education_data.map((item, index) => (
                    <div key={index} className="ab-personal-info__exprience-box d-flex align-items-start ">
                      <span className="ab-personal-info__exprience-length">{item.time}</span>
                      <div className="ab-personal-info__exprience-content">
                        <h4 className="ab-personal-info__exprience-title">{item.designation}</h4>
                        <span>{item.collage}</span>
                      </div>
                    </div>
                  ))}

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;