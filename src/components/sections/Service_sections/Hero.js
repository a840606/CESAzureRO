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
               Cloud services as a business strategy for core processes
                </p>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
               Driving digital successes across the cloud adoption framework
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



  



  <div className="row">
    <div className="col-sm-12 col-md-12">
      <div className="wpb_text_column wpb_content_element ">
          <div className="wpb_wrapper">
            <div className="title-h1 text-center"><span><span className="light">Service </span> Offerings</span></div>
          </div>
        </div>
    </div>
  </div>
  
  <div className="row">
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Compute</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual machines</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>VM deployment from custom image or MS Shared gallery</span></figure>
              <figure className="pricing-row">Access Control IAM</figure>
              <figure className="pricing-row">Snaphots</figure>
              <figure className="pricing-row">Disk management</figure>
              <figure className="pricing-row">Virtual machine Scale sets</figure>
              <figure className="pricing-row">Availability Sets</figure>
              <figure className="pricing-row">Diagnostics</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health and VM extensions</figure>
            
            </div>
    </div>
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
       <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">RecoveryServices</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Backup Recovery Service Valuts</div>
              </div>
              <figure className="pricing-row">Backup: Enable and Protect items:
                                       Azure File Share
                                       Azure VM
                                       SQL Server
                                       SAP Hana</figure>
              <figure className="pricing-row"><span >Access Control IAM</span></figure>
              <figure className="pricing-row"><span >Backup Status</span></figure>
              <figure className="pricing-row ">Backup Policy</figure>
              <figure className="pricing-row ">Backup Item management</figure>
              <figure className="pricing-row ">Azure Site Recovery</figure>
              <figure className="pricing-row ">Backup Restore</figure>
              <figure className="pricing-row ">Backup Alerts</figure>

            </div>
    </div>
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
      <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Storage</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Storage Accounts</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>Azure Storage Account Services:       Blob Service
                                                                  File Service</span></figure>
              <figure className="pricing-row"><span >Access Control IAM</span></figure>
              <figure className="pricing-row">Data Protection</figure>
              <figure className="pricing-row">Storage Account Networking / Firewall</figure>
              <figure className="pricing-row">SAS - Token for conditional access</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health</figure>
             
            </div>
    </div>
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
      <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div  className="pricing-cost">Microsoft</div>
                    <div className="time" >Network</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual Networks</div>
              </div>
              <figure className="pricing-row">Subnets</figure>
              <figure className="pricing-row"><span >Service Endpoints</span></figure>
              <figure className="pricing-row"><span>Private Endpoints</span></figure>
              <figure className="pricing-row">Peerings</figure>
              <figure className="pricing-row">Monitoring: Insights, Metrics, Resource Health</figure>

              
              <div className="pricing-row-title">
                <div className="pricing_row_title">Network Security Groups</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Access Control IAM</span></figure>
              <figure className="pricing-row"><span>Crush revenue traction</span></figure>
              <figure className="pricing-row">Crush revenue traction</figure>
              <figure className="pricing-row">User base minimum</figure>

              <div className="pricing-row-title">
                <div className="pricing_row_title">Network Interfaces</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span> IP Configuration </span></figure>
              <figure className="pricing-row"><span>NSG</span></figure>
              <figure className="pricing-row">Monitoring: Insights, Metrics, Resource Health</figure>
              <figure className="pricing-row">User base minimum</figure>

              <div className="pricing-row-title">
                <div className="pricing_row_title">Route Tables</div>
              </div>
              <figure className="pricing-row">Deployment and management</figure>
              <figure className="pricing-row"><span >User Defined Routes</span></figure>
              <figure className="pricing-row"><span>Crush revenue traction</span></figure>
              <figure className="pricing-row">Crush revenue traction</figure>
              <figure className="pricing-row">User base minimum</figure>

              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual Network Gateways</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Site2Site VPN connection</span></figure>
              <figure className="pricing-row"><span>Point2Site VPN connection</span></figure>
              <figure className="pricing-row">Express Route</figure>
              <figure className="pricing-row">Local Network Gateways</figure>
              <figure className="pricing-row">Connection management</figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Firewall</div>
              </div>
              <figure className="pricing-row">Deployment and configuration</figure>
              <figure className="pricing-row"><span >Firewall Manager</span></figure>
              <figure className="pricing-row"><span>Firewall Policies association</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Firewall Policies</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Network Rules configuration</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Application Gateway</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Basic monitoring: Insights Metrics, Resource Health</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Bastion Hosts</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Basic monitoring: Insights Metrics, Resource Health</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Load Balancer</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span >Basic monitoring: Insights Metrics, Resource Health</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Network Watcher</div>
              </div>
              <figure className="pricing-row">Network Diagnostic tools</figure>
              <figure className="pricing-row"><span >Troubleshooting Network connectivity issues</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Private Endpoints</div>
              </div>
              <figure className="pricing-row">Private Endpoints: Basic deployment, configuration and management</figure>
              <figure className="pricing-row"><span >Priavate Links: Basic deployment, configuration and management</span></figure>
              <figure className="pricing-row"><span>Application Rules configuration</span></figure>
              <figure className="pricing-row">Basic monitoring: Insights, Metrics, Resource Health</figure>
              <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Compute</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual machines</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>VM deployment from custom image or MS Shared gallery</span></figure>
              <figure className="pricing-row">Access Control IAM</figure>
              <figure className="pricing-row">Snaphots</figure>
              <figure className="pricing-row">Disk management</figure>
              <figure className="pricing-row">Virtual machine Scale sets</figure>
              <figure className="pricing-row">Availability Sets</figure>
              <figure className="pricing-row">Diagnostics</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health and VM extensions</figure>
            
            </div>
    </div> <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Compute</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual machines</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>VM deployment from custom image or MS Shared gallery</span></figure>
              <figure className="pricing-row">Access Control IAM</figure>
              <figure className="pricing-row">Snaphots</figure>
              <figure className="pricing-row">Disk management</figure>
              <figure className="pricing-row">Virtual machine Scale sets</figure>
              <figure className="pricing-row">Availability Sets</figure>
              <figure className="pricing-row">Diagnostics</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health and VM extensions</figure>
            
            </div>
    </div> <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Compute</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Virtual machines</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>VM deployment from custom image or MS Shared gallery</span></figure>
              <figure className="pricing-row">Access Control IAM</figure>
              <figure className="pricing-row">Snaphots</figure>
              <figure className="pricing-row">Disk management</figure>
              <figure className="pricing-row">Virtual machine Scale sets</figure>
              <figure className="pricing-row">Availability Sets</figure>
              <figure className="pricing-row">Diagnostics</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health and VM extensions</figure>
            
            </div>
    </div>
     <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">AAD</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Active Directory</div>
              </div>
              <figure className="pricing-row">Basic Administration at Azure Portal layer, configuration and management</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Active Directory Domain Services</div>
              </div>
              <figure className="pricing-row">Basic Administration at Azure Portal layer, configuration and management</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure DNS</div>
              </div>
              <figure className="pricing-row">Basic Administration at Azure Portal layer, configuration and management</figure>
             
            </div>
    </div>
     <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">KeyVault</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Key Vault</div>
              </div>
              <figure className="pricing-row">Deployment, management and configuration</figure>
              <figure className="pricing-row"><span>Basic monitoring: Insights Metrics, Resource Health.</span></figure>
              
            </div>
    </div> 
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Security</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Defender for Cloud</div>
              </div>
              <figure className="pricing-row">Basic Administration, management and governance</figure>
              <figure className="pricing-row"><span>Security Alerts</span></figure>
              <figure className="pricing-row">Recommendations and Subscription Security Score compliance</figure>
              <figure className="pricing-row">Snaphots</figure>
              <figure className="pricing-row">Disk management</figure>
              <figure className="pricing-row">Virtual machine Scale sets</figure>
              <figure className="pricing-row">Availability Sets</figure>
              <figure className="pricing-row">Diagnostics</figure>
              <figure className="pricing-row">Monitoring: Insights Metrics, Resource Health and VM extensions</figure>
            
            </div>
    </div> 
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">OperationalInsights</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Monitor</div>
              </div>
              <figure className="pricing-row">Basic Administration, management and governance</figure>
              <figure className="pricing-row"><span>Monitoring Alerts</span></figure>
              <figure className="pricing-row">Alert Rules</figure>
            </div>
    </div>

    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">PolicyInsights</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Policy</div>
              </div>
              <figure className="pricing-row">Basic Administration, management and governance</figure>
              <figure className="pricing-row"><span>Policy Assignments</span></figure>
            </div>
            <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">DesktopVirtualization</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Virtual Desktop</div>
              </div>
              <figure className="pricing-row">Basic Administration, management and governance</figure>
              <figure className="pricing-row"><span>Session Hosts</span></figure>
              <figure className="pricing-row"><span>Application groups</span></figure>
            </div>
            <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Logic</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Logic Apps</div>
              </div>
              <figure className="pricing-row">Deployment, basic configuration and management</figure>
           
            </div>
            <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Sql</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure SQL Database</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure SQL Managed Instance</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Synapse Analytics</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
           
            </div>
            <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">ContainerService</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Kubernetes Service (AKS)</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
           
            </div>
    </div>    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Databricks</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Azure Databricks</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
           
            </div>
    </div>    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">ContainerInstances</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">Container Instances</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
           
            </div>
    </div><div className="col-sm-3 col-md-3 pricing-column-wrapper">
         <div className="pricing-column">
              <div className="pricing-price-row">
                <div className="pricing-price-wrapper">
                  <div className="pricing-price">
                    <div className="pricing-cost">Microsoft</div>
                    <div className="time">Web</div>
                  </div>
                </div>
              </div>
              <div className="pricing-row-title">
                <div className="pricing_row_title">App Service</div>
              </div>
              <figure className="pricing-row">Basic Infrastructure deployment based on requirements, without resource configuration/management</figure>
           
            </div>
    </div>
            </div>
    </div>
  </div>
</div>
</div>
</div>

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;