import React from 'react';
import { Parallax } from 'react-parallax';
import YouTubePlayer from './youtubeplayer';
import Image from 'next/image';
import Link from 'next/link'; 


const Section = () => {
   const videoId = 'QB2DfxkaBeU';
    return(
        <Parallax className="home-video">
                <div className="iframeyoutube"><YouTubePlayer videoId={videoId} /></div>
                
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="overlay-bg t50 no-top no-bottom">
                    <div className="v-center">
                        <div className="container z-1000">
                            <div className="row align-items-center">                        
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="subtitle blink mb-4">Yorkshire's Gaming Revolution</div>
                                    <h1 className="mb-0 ">Playhost Experience</h1>                                    
                                </div>
                                <div className="col-lg-6 offset-lg-3 text-center text-white">
                                    <p className="">Experience the future of gaming at Yorkshire's premier gaming destination. From high-performance gaming PCs to immersive VR experiences, competitive esports tournaments, and a thriving community of gamers - everything you need for the ultimate gaming adventure is right here in Leeds.</p>
                                    <Link className="btn-main " href="/games">Explore Our Gaming Services</Link>

                                    <div className="spacer-single"></div>

                                    <div className="de-rating-ext">
                                        <span className="d-stars">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                        <span className="d-val">4.9</span>
                                        based on <strong>2,847</strong> reviews.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Parallax>
    );
}

export default Section;