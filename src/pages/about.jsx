import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Construction industry representing the interests of people everywhere</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>About Us</h3>
                  <p>For over twelve years, AD Construction Private Limited has been a cornerstone of development in the North-east region, particularly in the Kamrup (Rural) sector. Known for its commitment to the betterment of rural areas and the broader development of the State towards a metropolis, ADCPL has consistently gone beyond mere construction. Since its inception in 1988 by its visionary founder, Anil Das, the company has grown from a solo endeavor into a trusted name in both government and private sectors.

AD Construction stands out not only for its substantial contributions to regional development but also for its foundational values of truth, patience, and dedication. Rather than competing in the relentless rat race, the team at ADCPL focuses on delivering high-quality performance that not only distinguishes them within the industry but also sets a standard for others to aspire to. This commitment to excellence underpins their sustained success and the respect they command across the Northeast.</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpeg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" />  Utilize cutting-edge technology to reduce carbon footprints, ensuring sustainability in every project.</li>
                    <li><i className="fa-solid fa-circle-dot" /> We invest in our workforce, offering continuous training and career advancement opportunities that honor and elevate their craftsmanship.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Our projects meet the highest quality standards, achieved through rigorous quality control processes and innovative construction practices.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Committed to positive community impacts, we integrate eco-friendly materials and methods that contribute to healthier living environments.</li>
                    <li><i className="fa-solid fa-circle-dot" /> Safety is paramount in all our operations. We adhere to strict safety protocols to ensure the well-being of all stakeholders involved..</li>
                    <li><i className="fa-solid fa-circle-dot" /> Our track record speaks for itself—praised by clients and endorsed by industry leaders.</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpeg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan + Control</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/gallery-2.jpeg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Phase Plan</h3>
                <p>This step connects the design process and its miles tones with construction.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Design Pull Plan</h3>
                <p>We work with the design team to establish a detailed plan for reaching our goals.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Coordinated Layout</h3>
                <p>This process creates a single point of truth: drawings all project.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Having geometry worked out in the Layout step, prior to construction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpeg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Labor expenses are a common target for cost reduction measures in the construction industry</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p> A good material management system includes proper communication, scheduling,  and tracking tools.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Faster supplies can be used upon delivery to a construction site, the better.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Effective material management systems not only ensure that materials are in the right place</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      <TeamSlider noTop />

      <RenovationSection />

      <TestimonialSlider />

      <PartnersSlider noTop />
      
    </Layouts>
  );
};
export default About;