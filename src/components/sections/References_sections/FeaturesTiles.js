import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <p className='customers'>Supporting Customers</p>
          <div className={tilesClasses}>
         
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="100">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/logo-vgz.png')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    VGZ
                    </h4>
                 
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/NHS_Scotland_logo.svg.png')}
                      alt="Features tile icon 02"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   NHS Scotland
                    </h4>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/ferring.jpg')}
                      alt="Features tile icon 03"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
Ferring Pharmaceuticals
                    </h4>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank mb-16">
                  <Image
                      src={require('./../../../assets/images/clients/plan_international.png')}
                      alt="Features tile icon 03"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8">
                    Plan international
                    </h4>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom features-center" >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/Migros_logo.png')}
                      alt="Features tile icon 04"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Migros
                    </h4>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-white mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/Swiss_Life_logo_logotype_SwissLife.png')}
                      alt="Features tile icon 05"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   SwissLife
                    </h4>

                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/philips.png')}
                      alt="Features tile icon 06"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                   Philips
                    </h4>
                  
                </div>
              </div>
            </div>
            

          </div>
        </div>
        <div className={innerClasses}>
        <p className='customers'>Onboarding Customers</p>
          <div className={tilesClasses}>
         
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/forreign_affairs_netherlands.jpg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Ministery of Forreign Affairs Netherlands
                    </h4>
                 
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/flanders.jpg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Government of Flanders
                    </h4>
                 
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/pierre_fabre.jpg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Pierre Fabre
                    </h4>
                 
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/clients/credendo.jpg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Credendo
                    </h4>
                 
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image-blank-blank mb-16">
                    <Image
                      src={require('./../../../assets/images/logo.svg')}
                      alt="Features tile icon 01"
                      width={128}
                      height={128} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Atos Shared Network Global
                    </h4>
                 
                </div>
              </div>
            </div>
    </div>
    </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;