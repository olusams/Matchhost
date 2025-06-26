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

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="100">
                    <div>
                        <Image src={image1} className="mb20" alt=""/>
                        <h4>Super Quick Setup</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="300">
                    <div>
                        <Image src={image2} className="mb20" alt=""/>
                        <h4>Premium Hardware</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="500">
                    <div>
                        <Image src={image3} className="mb20" alt=""/>
                        <h4>DDos Protection</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600"
                  data-aos-easing="ease" data-aos-delay="700">
                    <div>
                        <Image src={image4} className="mb20" alt=""/>
                        <h4>Fast Support</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;