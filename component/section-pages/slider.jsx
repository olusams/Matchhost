import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay, A11y, Thumbs, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const image1 ="../../img/slider/5.webp";
const image2 ="../../img/slider/6.webp";
const image3 ="../../img/slider/7.webp";
const image4 ="../../img/slider/8.webp";

const YourComponent = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <div className="doubleslider">
    <Swiper
      className="mainslider"
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
      modules={[Navigation, Pagination, Autoplay, Thumbs]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 8000 }}
    >
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image1})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">Yorkshire's Premier Gaming Experience</div>
                            <h1 className="slider-title text-uppercase mb-1">High-Performance Gaming PCs</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="slider-text">Experience gaming like never before with our cutting-edge gaming PCs featuring RTX 4090 graphics, Intel i9 processors, and ultra-fast SSDs. Join the elite gaming community in Leeds and dominate every game.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="/games">Book Your Gaming Session</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image2})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">Immersive Virtual Reality</div>
                            <h1 className="slider-title text-uppercase mb-1">VR Gaming Experience</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="slider-text">Step into the future of gaming with our state-of-the-art VR equipment. From Beat Saber to Half-Life: Alyx, experience immersive worlds that blur the line between reality and fantasy.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="/pricing">Try VR Gaming Today</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sw-overlay"></div>
        </div>         
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image3})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">Competitive Esports Arena</div>
                            <h1 className="slider-title text-uppercase mb-1">Esports Tournaments</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="slider-text">Compete in our professional esports arena with tournament-grade equipment and live streaming capabilities. Join weekly tournaments in League of Legends, CS:GO, Valorant, and more.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="/pricing2">Join Tournament</Link>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-inner" style={{
                                              backgroundImage: `url(${image4})`,
                                              width: '100%',
                                              height: '100%',
                                            }}>
            <div className="sw-caption">
                <div className="container">
                    <div className="row gx-5 align-items-center text-center">
                        <div className="col-lg-8 mb-sm-30 mx-auto">
                            <div className="subtitle blink mb-4">Gaming Community Events</div>
                            <h1 className="slider-title text-uppercase mb-1">Community Gaming</h1>
                        </div>
                        <div className="col-lg-6 mx-auto">
                            <p className="slider-text">Connect with fellow gamers in Yorkshire's largest gaming community. From LAN parties to game launch events, we host regular gatherings that bring gamers together in the heart of Leeds.</p>
                            <div className="spacer-10"></div>
                            <Link className="btn-main mb10" href="/pricing3">Join Community</Link>
                        </div>
                    </div>
                </div>
            </div>                                
            <div className="sw-overlay"></div>
        </div>
      </SwiperSlide>
      {/* Add more slides here */}
    </Swiper>
    <Swiper
        direction={'vertical'}
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
        freeMode={true}
        spaceBetween={10}
        slidesPerView={3}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-slider"
      >
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image1})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  NEW
              </span>
              <h3>Gaming PCs</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image2})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  VR
              </span>
              <h3>VR Gaming</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image3})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  ESPORTS
              </span>
              <h3>Tournaments</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide" style={{
                                              backgroundImage: `url(${image4})`,
                                            }}>
          <div className="sw-caption-thumb">
              <span className="d-tag">
                  COMMUNITY
              </span>
              <h3>Events</h3>
          </div>
        </SwiperSlide>
        {/* Add more thumbnail slides here */}
      </Swiper>
    </div>
  );
};

export default YourComponent;
