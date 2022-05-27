import React from 'react';
// import sections
import Hero from '../components/sections/Home_sections/Hero';
import FeaturesTiles from '../components/sections/Home_sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/Home_sections/FeaturesSplit';
import Testimonial from '../components/sections/Home_sections/Testimonial';
import Cta from '../components/sections/Home_sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
}

export default Home;