import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/logo.png';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <Image src={image1} alt="" />
                        <div className="spacer-20"></div>
                        <p>Playhost - Yorkshire's premier gaming destination. We provide high-performance gaming PCs, VR experiences, esports tournaments, and a thriving gaming community in the heart of Leeds. Join thousands of gamers who choose Playhost for their ultimate gaming experience.</p>
                        <div className="spacer-20"></div>
                        <p><strong>Address:</strong> 42 Albion Street, Leeds, West Yorkshire, LS2 8NP<br/>
                        <strong>Phone:</strong> +44 (0) 113 847 2936<br/>
                        <strong>Email:</strong> hello@leedsgaminghub.co.uk</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Gaming Services</h5>
                                    <ul>
                                        <li><Link href="#">High-Performance PCs</Link></li>
                                        <li><Link href="#">VR Gaming Experience</Link></li>
                                        <li><Link href="#">Esports Arena</Link></li>
                                        <li><Link href="#">Gaming Tournaments</Link></li>
                                        <li><Link href="#">Community Events</Link></li>
                                        <li><Link href="#">Gaming Equipment</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <div className="widget">
                                    <h5>Quick Links</h5>
                                    <ul>
                                        <li><Link href="/games">Gaming PCs</Link></li>
                                        <li><Link href="/knowledgebase">Gaming Guides</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/affliate">Partners</Link></li>
                                        <li><Link href="/location">Our Location</Link></li>
                                        <li><Link href="/news">Gaming News</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Gaming Newsletter</h5>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                            <div className="col text-center">
                                <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <Link href="#" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></Link>
                                <div className="clearfix"></div>
                            </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Stay updated with gaming news, tournaments, and exclusive offers!</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Join Our Community</h5>
                                <div className="social-icons">
                                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-discord"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-tiktok"></i></Link>
                                    <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                           Copyright {currentYear} - Playhost | Yorkshire's Premier Gaming Destination
                        </div>
                        <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="#">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;