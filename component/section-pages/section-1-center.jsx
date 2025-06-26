import React from 'react';
import Image from 'next/image';

import image1 from '../../public/img/icons/1.png';
import image2 from '../../public/img/icons/2.png';
import image3 from '../../public/img/icons/3.png';
import image4 from '../../public/img/icons/4.png';


const Section = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="subtitle mb-3" data-aos="fade-up">Incredibly features</div>
                    <h2 className="mb20" data-aos="fade-up" data-aos-delay="200">Premium Game Server</h2>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600" data-aos-delay="100"  >
                    <div>
                        <Image src={image1} className="mb20" alt=""/>
                        <h4>Super Quick Setup</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600" data-aos-delay="300">
                    <div>
                        <Image src={image2} className="mb20" alt=""/>
                        <h4>Premium Hardware</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                    <div>
                        <Image src={image3} className="mb20" alt=""/>
                        <h4>DDos Protection</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20" data-aos="fade-left" data-aos-duration="600" data-aos-delay="800">  
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