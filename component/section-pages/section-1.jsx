import React from 'react';
import Image from 'next/image';
import { useEffect } from "react"
import Aos from 'aos';
import "aos/dist/aos.css";

import image1 from '../../public/img/icons/1.png';
import image2 from '../../public/img/icons/2.png';
import image3 from '../../public/img/icons/3.png';
import image4 from '../../public/img/icons/4.png';


const Section = () => {
    useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
    return(
        <div className="container">
           <div className="row">
                <div className="col-lg-6">
                <div className="subtitle mb-3" data-aos="fade-up"> 
                   Incredibly features
                </div>
                 <h2 className="mb20" data-aos="fade-up" data-aos-delay="200">
                    Premium Gaming Experience
                 </h2>
                </div>

                <div className="col-lg-6"></div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="100" >
                    <div>
                        <Image src={image1} className="mb20" alt=""/>
                        <h4>Super Quick Setup</h4>
                        <p>Get gaming in minutes with our instant PC allocation system. No waiting, no queues - just plug in and play with our pre-configured high-performance gaming stations.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="300">
                    <div>
                        <Image src={image2} className="mb20" alt=""/>
                        <h4>Premium Hardware</h4>
                        <p>Experience gaming on the latest RTX 40 series graphics cards, Intel i9 processors, and lightning-fast NVMe SSDs. Our hardware is regularly upgraded to ensure peak performance.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="500">
                    <div>
                        <Image src={image3} className="mb20" alt=""/>
                        <h4>DDos Protection</h4>
                        <p>Stay protected with enterprise-grade DDoS protection and secure gaming environments. Your gaming sessions are safe with our advanced security infrastructure.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="700">
                    <div>
                         <Image src={image4} className="mb20" alt=""/>
                        <h4>Fast Support</h4>
                        <p>Our Yorkshire-based support team is available 24/7 to help with any gaming issues. Get instant assistance from local gaming experts who understand your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;