import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner pageTitle={"Services"} pageDesc={"our values and vaulted us to the top of our industry."} />

      <ServicesSection />

      {/* Construction Services Start */}
      <section className="gap no-top construction-services">
        <div className="container">
          <Tab.Container id="services-tab-content" defaultActiveKey="tab-service-0">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>Construction Services</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-0">Discover Your Ideal Property</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-1">Experience Unmatched Elegance</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-2">Invest with Confidence</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-3">Invest in Your Future Today</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-4">Enhance Your Lifestyle</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                <Tab.Pane eventKey="tab-service-0" title="General Contracting">
                  <figure>
                    <img className="w-100" src="/img/service3.jpeg" alt="Services Nav Image 1" />
                    <figcaption>
                      <h3>Discover Your Ideal Property</h3>
                      <p>Explore our curated selection of properties tailored to your unique lifestyle. From sophisticated urban apartments to expansive suburban estates, find the perfect home that meets your needs.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-1" title="Construction Consultant">
                  <figure>
                    <img className="w-100" src="/img/service7.jpeg" alt="Services Nav Image 2" />
                    <figcaption>
                      <h3>Experience Unmatched Elegance</h3>
                      <p>Immerse yourself in luxury and refinement with our premium real estate offerings. Our properties are designed to deliver an exceptional living experience with unparalleled comfort and sophistication.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-2" title="Metal Roofin">
                  <figure>
                    <img className="w-100" src="/img/service2.jpeg" alt="Services Nav Image 3" />
                    <figcaption>
                      <h3>Invest with Confidence</h3>
                      <p>Capitalize on prime real estate opportunities with our diverse portfolio. Secure a valuable asset for the future while benefiting from strategic investment options available today.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-3" title="House Renovation">
                  <figure>
                    <img className="w-100" src="/img/service9.jpeg" alt="Services Nav Image 4" />
                    <figcaption>
                      <h3>Invest in Your Future Today</h3>
                      <p>Unlock the potential of property investment with our diverse portfolio. Secure a smart investment for tomorrow while enjoying the benefits today.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-4" title="Green Building">
                  <figure>
                    <img className="w-100" src="/img/service4.jpeg" alt="Services Nav Image 5" />
                    <figcaption>
                      <h3>Enhance Your Lifestyle</h3>
                      <p>Transform your living experience with our modern and meticulously designed properties. Our real estate solutions are crafted to align with contemporary lifestyles and elevate everyday living..</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}

      <CountersSection />

      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
            <figure>
              <img className="w-100" src="/img/construction.jpeg" alt="Video PopUp Image" />
            </figure>
            <a className="video-play-btn" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
            </a>
          </div>
        </div>
      </div>
      <ModalVideo channel='youtube' isOpen={isOpen} videoId="uemObN8_dcw" onClose={() => setOpen(false)} />
      {/* Video PopUp Start */}

     
      {/* Service Style Two End */}
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}