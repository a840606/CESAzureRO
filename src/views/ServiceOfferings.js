import React from 'react';
// import sections
import Hero from '../components/sections/Service_sections/Hero';
import FeaturesTiles from '../components/sections/Service_sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/Service_sections/FeaturesSplit';
import Testimonial from '../components/sections/Service_sections/Testimonial';
import Cta from '../components/sections/Service_sections/Cta';
import StartFromTop from '../utils/StartFromTop';

const ServiceOfferings = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/* <FeaturesTiles /> */}
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
      <StartFromTop/>
    </>
  );
}

export default ServiceOfferings;