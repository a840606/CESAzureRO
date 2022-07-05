import React from 'react';
// import sections
import Hero from '../components/sections/AboutUs_section/Hero';
import FeaturesTiles from '../components/sections/AboutUs_section/FeaturesTiles';
import FeaturesSplit from '../components/sections/AboutUs_section/FeaturesSplit';
import Testimonial from '../components/sections/AboutUs_section/Testimonial';
import Cta from '../components/sections/AboutUs_section/Cta';
import StartFromTop from '../utils/StartFromTop';

const AboutUs = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/*<FeaturesTiles />
       <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
    <StartFromTop/>    </>
    
  );
}

export default AboutUs;