import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  .de_pricing-table .d-recommend{
    background: var(--primary-color);
  }
  .de_pricing-table.type-2.rec {
      border: solid 5px var(--primary-color) !important;
    }
    .dark-scheme .de_pricing-table.type-2{
        border: 0px;
    }
    .de_pricing-table .d-price h4{
        font-family: var(--body-font);
        span{
            font-size: 14px;
        }
    }
`;

import image1 from '../../public/img/icons/1.png';
import image2 from '../../public/img/icons/2.png';
import image3 from '../../public/img/icons/3.png';
import image4 from '../../public/img/icons/4.png';
import image5 from '../../public/img/payments/visa.webp';
import image6 from '../../public/img/payments/mastercard.webp';
import image7 from '../../public/img/payments/paypal.webp';
import image8 from '../../public/img/payments/skrill.webp';
import image9 from '../../public/img/payments/jcb.webp';
import image10 from '../../public/img/payments/american-express.webp';

const Server = () => {


    return(
        <>
            <GlobalStyles/>
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
                <div className="container z-9">
                    <div className="row">

                        <div className="clearfix"></div>
                        <div className="col-xl-4 col-md-6 mb-sm-30" data-aos="fade-right" data-aos-delay="100">
                            <div className="de_pricing-table type-2"  >
                                <div className="d-head mb-1" data-aos="fade-right" >
                                </div>
                                <div className="d-title">Warrior</div>
                                <div className="d-stars"><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                40<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                4GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price text-center mb-0">
                                    <h4 className="opt-1 mb-0">£14.99 <span>/monthly</span></h4>
                                    <h4 className="opt-2 mb-0">£9.99 <span>/monthly</span></h4>
                                    <p className="opt-1">£0.50 per slot </p>
                                    <p className="opt-2">£0.25 per slot </p>
                                </div>                                
                                <div className="d-action">
                                    <Link href="#" className="btn-main w-100">Order Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 mb-sm-30 fadeInRight" data-aos="fade-right" data-aos-delay="300">
                            <div className="de_pricing-table type-2 rec">
                                <div className="d-head mb-1">
                                    <div className="d-recommend">Top Seller</div>
                                </div>
                                <div className="d-title">General</div>
                                <div className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                60<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                8GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price text-center mb-0">
                                    <h4 className="opt-1 mb-0">£19.99 <span>/monthly</span></h4>
                                    <h4 className="opt-2 mb-0">£14.99 <span>/monthly</span></h4>
                                    <p className="opt-1">£0.50 per slot </p>
                                    <p className="opt-2">£0.25 per slot </p>
                                </div>
                                <div className="d-action">
                                    <Link href="#" className="btn-main w-100">Order Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 mb-sm-30 fadeInRight" data-aos="fade-right" data-aos-delay="500">
                            <div className="de_pricing-table type-2">
                                <div className="d-head mb-1">
                                </div>
                                <div className="d-title">Commander</div>
                                <div className="d-stars"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="spacer-20"></div>
                                <div className="d-specs">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="d-item">
                                                125<span>Player Slots</span>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-item">
                                                16GB<span>Memory</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <div className="d-price text-center mb-0">
                                    <h4 className="opt-1 mb-0">£29.99 <span>/monthly</span></h4>
                                    <h4 className="opt-2 mb-0">£24.99 <span>/monthly</span></h4>
                                    <p className="opt-1">£0.50 per slot </p>
                                    <p className="opt-2">£0.25 per slot </p>
                                </div>                            
                                <div className="d-action">
                                    <Link href="#" className="btn-main w-100">Order Now</Link>
                                </div>
                            </div>
                        </div>

                        </div>

                        <div className="spacer-double"></div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subtitle mb-3">Incredibly</div>
                                <h2 className="mb20">Features</h2>
                            </div>

                            <div className="col-lg-6"></div>

                            <div className="col-lg-3 col-md-6 mb-sm-20" >
                                <div className="padding30 rounded-10 bgcustom">
                                    <Image src={image1} className="mb20" alt=""/>
                                    <h4>Instant Gaming Setup</h4>
                                    <p>Get gaming immediately with our pre-configured high-performance PCs. No waiting, no setup required - just plug in and play your favorite games.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-sm-20">
                                <div className="padding30 rounded-10 bgcustom">
                                    <Image src={image2} className="mb20" alt=""/>
                                    <h4>Premium Gaming Hardware</h4>
                                    <p>Experience gaming on the latest RTX 4090 graphics cards, Intel i9 processors, and ultra-fast NVMe SSDs for the ultimate performance.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-sm-20">
                                <div className="padding30 rounded-10 bgcustom">
                                    <Image src={image3} className="mb20" alt=""/>
                                    <h4>Secure Gaming Environment</h4>
                                    <p>Your gaming accounts and personal data are protected with enterprise-grade security measures and regular system updates.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-sm-20">
                                <div className="padding30 rounded-10 bgcustom">
                                    <Image src={image4} className="mb20" alt=""/>
                                    <h4>Expert Gaming Support</h4>
                                    <p>Our gaming experts are always on hand to help with technical issues, game recommendations, and competitive strategies.</p>
                                </div>
                            </div>
                        </div>

                        <div className="spacer-double"></div>

                        <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="subtitle wow fadeInUp mb-3">Payment Methods</div>
                            <h2 className="wow fadeInUp" data-wow-delay=".2s">We accept</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image5} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image6} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image7} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image8} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image9} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div className="col-sm-2 col-4">
                                    <div className="p-2 rounded-10 bg-half-white">
                                        <Image width="70" height="50" src={image10} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    </div>
        </>
    );
}

export default Server;