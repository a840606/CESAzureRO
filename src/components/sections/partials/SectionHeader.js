import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../../elements/Image';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeader = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          <div className="container-xs">
            <Image src={require('./../../../assets/images/logo_azure.svg')}
            width={340}
            height={340}/>
            {children}
            {data.title &&
              <Component className={
                classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0'
                )}></Component>
            }
       

            <p>Cloud is revolutionizing IT, as many organizations have started to move workloads to the cloud. Our goal is to help customers to quickly move to the cloud without compromising on security or compliance.</p>
            <p>We use technologies and tools that are natively available in the Azure with strong focus on added value. We aim to professionalize the customer’s use of public cloud through offering of 7*24 support channels and bring broad expertise within the customer’s reach.</p>
          </div>
         
        </div>
      }
    </>
  );
}

SectionHeader.propTypes = propTypes;
SectionHeader.defaultProps = defaultProps;

export default SectionHeader;