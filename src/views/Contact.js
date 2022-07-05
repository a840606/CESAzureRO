import React from 'react';
// import sections
import Hero from '../components/sections/Contact_section/Hero';
import FeaturesTiles from '../components/sections/Contact_section/FeaturesTiles';
import FeaturesSplit from '../components/sections/Contact_section/FeaturesSplit';
import Testimonial from '../components/sections/Contact_section/Testimonial';
import Cta from '../components/sections/Contact_section/Cta';
import StartFromTop from '../utils/StartFromTop';

const Contact = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/*<FeaturesTiles />
       <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
   <StartFromTop/>
    </>
  );
}

export default Contact;