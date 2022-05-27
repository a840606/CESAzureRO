import React from 'react';
// import sections
import Hero from '../components/sections/Overview_sections/Hero';
import FeaturesTiles from '../components/sections/Overview_sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/Overview_sections/FeaturesSplit';
import Testimonial from '../components/sections/Overview_sections/Testimonial';
import Cta from '../components/sections/Overview_sections/Cta';

const Overview = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      {/*<FeaturesTiles />*/}
       <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      {/*<Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default Overview;