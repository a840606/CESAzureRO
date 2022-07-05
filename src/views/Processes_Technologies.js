import React from 'react';
// import sections
import Hero from '../components/sections/Processes_sections/Hero';
import FeaturesTiles from '../components/sections/Processes_sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/Processes_sections/FeaturesSplit';
import Testimonial from '../components/sections/Processes_sections/Testimonial';
import Cta from '../components/sections/Processes_sections/Cta';
import StartFromTop from '../utils/StartFromTop';
const Processes = () => {

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

export default Processes;