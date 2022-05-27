import React from 'react';
// import sections
import Hero from '../components/sections/References_sections/Hero';
import FeaturesTiles from '../components/sections/References_sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/References_sections/FeaturesSplit';
import Testimonial from '../components/sections/References_sections/Testimonial';
import Cta from '../components/sections/References_sections/Cta';

const References = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      {/*<Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default References;