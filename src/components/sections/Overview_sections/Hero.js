import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Modal from '../../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Atos Digital Cloud Services <span className="azure-title-color">Azure</span> <span className='romania-team-color'>Romania</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              Atos Azure DCS Cloud Adoption Mission is to increase customer consumption growth by driving fast activation, nurturing an optimal ramp up and removing technical barriers.  
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Digital Cloud Services (DCS) consist of 4 modules which are referred to as Cloud Core. Cloud Core provides a customer with a standard process for the provision of secure public cloud resources governed by a management framework.  Cloud Core is delivered leveraging Azure native tools, fully via infra as code, intended to operate within a shared responsibility model. 
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="/overview">
                    Overview
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/serviceofferings">
                    Service Offerings
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/processandtechnologies">
                    Process and Technology
                    </Button>
                    <Button tag="a" color="primary" wideMobile href="/references">
                    References and Portfolio
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/watch?v=VLHRGtGjkO8"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/watch?v=VLHRGtGjkO8" // aici punem video pentru rulaj
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;