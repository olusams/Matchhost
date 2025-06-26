import React from 'react';
import { Parallax } from "react-parallax";
import Image from 'next/image';
import Link from 'next/link';

const image1 ='../../img/background/1.webp';
import image2 from'../../public/img/misc/avatar.webp';

const Section = () => {
    return(
        <div className="container position-relative">
            <div className="row">
                <div className="col-lg-12">
                    <Parallax className="p-0" bgImage={image1} strength={300}>  
                    <div className="padding60 sm-padding40 sm-p-2 position-relative">
                        
                        <div className="row z-1">
                            <div className="col-lg-6">
                                <div className="subtitle mb-3" data-aos="fade-up">Level up your gaming</div>
                                <h2 className="wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up" data-aos-delay="100">Unlock Your Gaming Full Potential</h2>
                                <p className="wow fadeInUp" data-aos="fade-up">At Playhost, we believe every gamer deserves the ultimate experience. Our state-of-the-art facilities, professional-grade equipment, and passionate community create the perfect environment for your gaming journey. Whether you're a casual player or aspiring esports champion, we provide everything you need to dominate the competition.</p>
                                <div className="spacer-10"></div>
                                <Link className="btn-main mb10" href="/games" data-aos="fade-up">Book Your Gaming Session</Link>
                            </div>
                        </div>
                        
                    </div>
                    </Parallax>
                    <Image src={image2} className="sm-hide position-absolute avatar px-2"  alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Section;