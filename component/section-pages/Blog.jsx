import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/news/1.webp';
import image2 from '../../public/img/news/2.webp';
import image3 from '../../public/img/news/3.webp';


const Section = () => {
    return(
        <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <div className="subtitle wow fadeInUp mb-3" data-aos="fade-up">Latest Gaming Updates</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s" data-aos="fade-up">News &amp; Events</h2>
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                    <div className="row g-4" data-aos="fade-up">
                        <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="d-tagline">
                                            <span>esports</span>
                                            <span>tournament</span>
                                        </div>
                                        <Image src={image1} alt=""/>
                                    </div>
                                    <div className="post-text">
                                        <div className="d-date">15.12.2024</div>
                                        <h4><Link href="#">Playhost Hosts Yorkshire's Biggest Esports Tournament<span></span></Link></h4>
                                        <p>Join us for the ultimate gaming showdown as we host Yorkshire's largest esports tournament featuring League of Legends, CS:GO, and Valorant competitions with over £5,000 in prizes...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="d-tagline">
                                            <span>vr</span>
                                            <span>technology</span>
                                        </div>
                                        <Image src={image2} alt=""/>
                                    </div>
                                    <div className="post-text">
                                        <div className="d-date">10.12.2024</div>
                                        <h4><Link href="#">New VR Gaming Zone Opens at Playhost<span></span></Link></h4>
                                        <p>Experience the future of gaming with our brand new VR gaming zone featuring the latest Meta Quest 3 headsets and immersive gaming experiences for all ages...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 mb10">
                        <div className="bloglist item">
                                <div className="post-content">
                                    <div className="post-image">
                                        <div className="d-tagline">
                                            <span>community</span>
                                            <span>events</span>
                                        </div>
                                        <Image src={image3} alt=""/>
                                    </div>
                                    <div className="post-text">
                                        <div className="d-date">05.12.2024</div>
                                        <h4><Link href="#">Gaming Community Meetup: Connect with Fellow Yorkshire Gamers<span></span></Link></h4>
                                        <p>Join our monthly gaming community meetup where gamers from across Yorkshire come together to share strategies, form teams, and celebrate our shared passion for gaming...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
    );
}

export default Section;