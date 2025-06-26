import React from 'react';
import Image from 'next/image';

import image1 from"../../public/img/misc/world-map.webp";

const Sectionloc = () => {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subtitle fadeInUp mb-3">Our Gaming Hub Location</div>
                </div>
                <div className="col-lg-6">
                    <h2 className="fadeInUp mb20" data-aos="fade-up">Located in the heart of Leeds, Yorkshire's gaming capital.</h2>
                </div>
                <div className="col-lg-6" data-aos="fade-up">
                    Conveniently situated in Leeds city centre, our gaming hub is easily accessible by public transport, with excellent parking facilities nearby. Whether you're coming from Bradford, Wakefield, York, or anywhere in Yorkshire, you'll find us in the perfect location for your gaming adventures.
                </div>

                <div className="spacer-10"></div>

                <div className="col-lg-12 fadeInUp" data-aos="fade-up">
                    <div className="p-sm-30 pb-sm-0 mb-sm-0">
                        <div className="de-map-hotspot">
                            <div className="de-spot fadeIn" style={{top:'36%', left:'48%'}}>
                                <span>Leeds, UK</span>
                                <div className="de-circle-1"></div>
                                <div className="de-circle-2"></div>
                            </div>
                            <Image src={image1} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>                        
            </div>
        </div>
        <div className="no-bottom wow fadeInRight d-flex z-1000">
          <div className="de-marquee-list wow">
            <div className="d-item">
              <span className="d-item-txt">Leeds City Centre</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Bradford</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Wakefield</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">York</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Sheffield</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Manchester</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Liverpool</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Newcastle</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Birmingham</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">London</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Edinburgh</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Cardiff</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
              <span className="d-item-txt">Belfast</span>
              <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
             </div>
          </div>
        </div>
        </>
    );
}

export default Sectionloc;