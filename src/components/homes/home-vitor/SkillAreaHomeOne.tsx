'use client'
import React, { useEffect } from 'react';
// skill images
import skill_img_1 from "@/assets/img/skill/react.svg";
import skill_img_2 from "@/assets/img/skill/javascript.svg";
import skill_img_3 from "@/assets/img/skill/typescript.png";
import skill_img_4 from "@/assets/img/skill/nextjs.svg";
import skill_img_5 from "@/assets/img/skill/webflow.png";
import skill_img_6 from "@/assets/img/skill/vue.png";

import skill_img_7 from "@/assets/img/skill/figma.png";
import skill_img_8 from "@/assets/img/skill/sketch.png";
import skill_img_9 from "@/assets/img/skill/photoshop.png";
import skill_img_10 from "@/assets/img/skill/html.png";
import skill_img_11 from "@/assets/img/skill/in.png";
import skill_img_12 from "@/assets/img/skill/ai.png";
import skill_img_13 from "@/assets/img/skill/tanstack.png";
import skill_img_14 from "@/assets/img/skill/redux.svg";
import skill_img_15 from "@/assets/img/skill/tailwind.svg";
import skill_img_16 from "@/assets/img/skill/sass.svg";
import skill_img_17 from "@/assets/img/skill/storybook.svg";
import skill_img_18 from "@/assets/img/skill/jest.svg";
import skill_img_19 from "@/assets/img/skill/git.svg";
import skill_img_20 from "@/assets/img/skill/css.svg";
import skill_img_21 from "@/assets/img/skill/webpack.svg";
import skill_img_22 from "@/assets/img/skill/vitejs.svg";
import skill_img_23 from "@/assets/img/skill/astro.svg";



import Image, { StaticImageData } from 'next/image';


interface DataType {
  subtitle: string;
  title: string;
  info: React.JSX.Element;
  skill_data: {
    tab_id: string;
    items: {
      img: StaticImageData;
      title: string;
      percent: number;
    }[];
  }[];
}
const skill_content: DataType = {
  subtitle: "Advantage",
  title: "Skills & tools",
  info: <>For those who know what they're looking for. <br /> These are just a few of my key skills, there's much more where that came from.</>,
  skill_data: [
    {
      tab_id: "tech",
      items: [
        {
          img: skill_img_1,
          title: "React",
          percent: 85
        },
        {
          img: skill_img_2,
          title: "JavaScript",
          percent: 95
        },
        {
          img: skill_img_3,
          title: "TypeScript",
          percent: 60
        },
        {
          img: skill_img_4,
          title: "Next.js",
          percent: 90
        },
        {
          img: skill_img_13,
          title: "TanStack",
          percent: 60
        },
        {
          img: skill_img_14,
          title: "Redux",
          percent: 60
        },
        {
          img: skill_img_15,
          title: "Tailwind",
          percent: 60
        },
        {
          img: skill_img_16,
          title: "SCSS/Sass",
          percent: 60
        },
        {
          img: skill_img_17,
          title: "Storybook",
          percent: 60
        },
        {
          img: skill_img_18,
          title: "Jest",
          percent: 60
        },
        {
          img: skill_img_19,
          title: "Git",
          percent: 60
        },
        {
          img: skill_img_3,
          title: "NodeJS",
          percent: 97
        },
        {
          img: skill_img_6,
          title: "Vue",
          percent: 90
        },
        {
          img: skill_img_10,
          title: "HTML5",
          percent: 90
        },
        {
          img: skill_img_20,
          title: "CSS",
          percent: 90
        },
        {
          img: skill_img_21,
          title: "Webpack",
          percent: 90
        },
        {
          img: skill_img_22,
          title: "Vitejs",
          percent: 60
        },
        {
          img: skill_img_23,
          title: "Astro",
          percent: 60
        },
      ],
    },
    {
      tab_id: "design",
      items: [
        {
          img: skill_img_7,
          title: "Figma",
          percent: 95,
        },
        {
          img: skill_img_9,
          title: "Photoshop",
          percent: 98
        },
        {
          img: skill_img_11,
          title: "InVision",
          percent: 90
        },
        {
          img: skill_img_12,
          title: "Illustrator",
          percent: 80
        },
        {
          img: skill_img_5,
          title: "Webflow",
          percent: 80,
        },
        {
          img: skill_img_8,
          title: "Sketch",
          percent: 82
        }
      ],
    }
  ]
}
const { subtitle, title, info, skill_data } = skill_content

const SkillAreaHomeOne = () => {

  useEffect(() => {
    function tpTabLine2() {
      const marker = document.querySelector('#lineMarker') as HTMLElement;
      const item = document.querySelectorAll('.tp-marker-tab button') as NodeListOf<HTMLButtonElement>;

      // Find the initially active element
      const initiallyActive = document.querySelector('.tp-marker-tab .nav-link.active') as HTMLElement;

      // Set the initial width of the marker based on the initially active element
      if (initiallyActive) {
        marker.style.left = initiallyActive.offsetLeft + 'px';
        marker.style.width = initiallyActive.offsetWidth + 'px';
      }

      function indicator(e: HTMLElement) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
      }

      item.forEach(link => {
        link.addEventListener('click', (e) => {
          indicator(e.target as HTMLElement);
        });
      });

      marker.style.display = 'block';

      function anchorWidthCounter() {
        let anchorWidths = 0;
        let a: HTMLElement;
        let aWidth: number;
        let aPadLeft: number;
        let aPadRight: number;
        let aTotalWidth: number;

        item.forEach((elem) => {
          const activeTest = elem.classList.contains('active');

          if (activeTest) {
            // Break out of the loop.
            return;
          }

          a = elem.parentElement as HTMLElement; // Get the parent element
          aWidth = a.offsetWidth;
          aPadLeft = parseFloat(getComputedStyle(a).paddingLeft);
          aPadRight = parseFloat(getComputedStyle(a).paddingRight);
          aTotalWidth = aWidth + aPadLeft + aPadRight;

          anchorWidths = anchorWidths + aTotalWidth;
        });

        return anchorWidths;
      }
    }

    tpTabLine2();
  }, []);



  return (
    <>
      <section className="tp-skill-area pt-115 pb-105 p-relative z-index-1 fix black-bg-3 tp-footer__customize" style={{ backgroundImage: 'url(/assets/img/footer/overly-bg-2.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-section-title">
                <div className="tp-section-title-wrapper tp_text_anim mb-30 text-center">
                  <div className="tp-section-title-inner tp_title_anim p-relative">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h3 className="tp-section-title">{title}</h3>
                  </div>
                  <p>{info}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-skill-tab tp-tab d-flex align-items-center justify-content-center mb-70">
                <nav>
                  <div className="nav nav-tabs tp-marker-tab" id="nav-tab" role="tablist">
                    {skill_data.map((item, i) =>
                      <button key={i} className={`nav-link ${i === 0 ? 'active' : ''}`} id={`nav-${item.tab_id}-tab`} data-bs-toggle="tab"
                        data-bs-target={`#nav-${item.tab_id}`} type="button" role="tab" aria-controls={`nav-${item.tab_id}`}
                        aria-selected={`${i === 0 ? 'false' : 'true'}`} tabIndex={-1}> {item.tab_id}
                      </button>
                    )}
                    <span id="lineMarker"></span>
                  </div>
                </nav>

              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tab-content" id="nav-tabContent">

                {skill_data.map((item, i) =>
                  <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`}
                    id={`nav-${item.tab_id}`} role="tabpanel" aria-labelledby={`nav-${item.tab_id}-tab`} tabIndex={0}>
                    <div className="tp-skill-tab-content tp-skill-radius">
                      <div className="row">
                        {item.items.map((inner_item, index) =>
                          <div key={index} className="col-xl-2 col-lg-3 col-md-3 col-6">
                            <div className="tp-skill-item d-flex flex-column align-items-center text-center">
                              <div
                                className="tp-skill-thumb d-flex align-items-center justify-content-center flex-column">
                                <div className="tp-skill-icon">
                                  <span>
                                    <Image className='tp-skill-image' src={inner_item.img} alt="image-here" />
                                  </span>
                                </div>
                              </div>
                              <div className="tp-skill-content">
                                <h3 className="tp-skill-title">{inner_item.title}</h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillAreaHomeOne;