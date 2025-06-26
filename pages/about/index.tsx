import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Parallax } from "react-parallax";
import { Link } from "react-scroll";
import Navbar from '../../component/layout/Navbar';
import Preloader from '../../component/layout/preloader';
import Reviews from '../../component/section-pages/CustomerReviews';
import Footer from '../../component/section-pages/footer';
import ScrollToTopBtn from '../../component/layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

`;

export default function Home() {
  useEffect(() => {
      if (typeof window !== 'undefined') {
          const loader = document.getElementById('mainpreloader');
          if (loader)
          setTimeout(() => {
            loader.classList.add("fadeOut");
            loader.style.display = 'none';
          }, 600)
      }
    }, []);
  return (
    <>
    <Head>
      <title>About Playhost - Yorkshire's Premier Gaming Destination</title>
      <meta name="description" content="Discover the story behind Playhost - Yorkshire's premier gaming destination. From our humble beginnings to becoming the region's leading gaming community." />
      <link rel="icon" href="../img/icon.png" type="image/gif" sizes="16x16"/>
    </Head>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* section */}
      <Parallax className="" bgImage="/img/background/subheader-about.webp" strength={5}>  
        <section className="no-bg">
          <div className="container z-9">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="subtitle  mb-3">About Playhost</div>
                  </div>
                  <div className="col-lg-6">
                      <h2 className=" mb20" data-wow-delay=".2s">Yorkshire's Gaming Revolution</h2>
                  </div>                 
              </div>
          </div>
        </section>
      </Parallax>

      {/* section */}
      <section>
        <div className="container">
              <div className="row align-items-center gh-5">
                  <div className="col-lg-6 position-relative">
                      <div className="images-deco-1">
                          <Image src="/img/misc/building.webp" width={500} height={300} className="d-img-1" alt=""/>
                          <Image src="/img/misc/girl-ai.webp" width={300} height={400} className="d-img-2" alt=""/>
                          <div className="d-img-3 bg-color"></div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="subtitle mb20">We are Playhost</div>
                      <h2 >The beginning</h2>
                      <p >Born in the heart of Yorkshire's vibrant city, Playhost emerged from a simple vision: to create the ultimate gaming destination where passion meets technology. What started as a small gaming cafe in 2018 has evolved into Yorkshire's premier gaming community.</p>
                      <div className="year-card ">
                          <h1><span className="id-color">6</span></h1>
                          <div className="atr-desc">Years<br/>Gaming<br/>Excellence</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="row gx-5">
                        <div className="col-lg-6 col-md-6">
                            <h4>Our Vision</h4>
                            <p>To be the leading gaming destination in Yorkshire, fostering a community where gamers of all levels can connect, compete, and create unforgettable experiences. We envision a future where gaming transcends entertainment to become a powerful force for community building, skill development, and technological innovation in Leeds and beyond.</p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h4>Our Mission</h4>
                            <p>To provide an inclusive, state-of-the-art gaming environment that empowers players to explore their potential, connect with like-minded individuals, and experience the latest in gaming technology. We're committed to creating a space where every gamer feels welcome, supported, and inspired to achieve their gaming dreams.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
        <div className="container">
          <div className="row">
              <div className="col-lg-3">
                  <div className="subtitle mb20">Our Gaming Team</div>
                  <h2 className="mb20 wow fadeInUp">Meet the Legends</h2>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="#"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src="/img/team/1.webp" width={300} height={300} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Marcus "Pixel" Thompson</h4>
                      Gaming Director & Founder
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <Link to="#"><i className="fa-brands fa-facebook fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-twitter fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-linkedin fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-instagram fa-lg"></i></Link>
                                      <Link to="#"><i className="fa-brands fa-tiktok fa-lg"></i></Link>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src="/img/team/3.webp" width={300} height={300} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Sarah "Viper" Chen</h4>
                      Esports Manager
                  </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 mb-sm-30">
                  <div className="f-profile text-center">
                      <div className="fp-wrap f-invert">
                          <div className="fpw-overlay">
                              <div className="fpwo-wrap">
                                  <div className="fpwow-icons">
                                      <a href="#"><i className="fa-brands fa-facebook fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-twitter fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-linkedin fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-instagram fa-lg"></i></a>
                                      <a href="#"><i className="fa-brands fa-tiktok fa-lg"></i></a>
                                  </div>
                              </div>
                          </div>                                  
                          <div className="fpw-overlay-btm"></div>
                          <Image src="/img/team/4.webp" width={300} height={300} className="fp-image img-fluid" alt=""/>
                      </div>

                      <h4>Alex "TechWiz" Rodriguez</h4>
                      VR & Tech Specialist
                  </div>
              </div>

          </div>
        </div>
      </section>

      {/* section */}
      <section className="no-top">
       <Reviews/>
      </section>

      {/* section */}
      <section className="no-top">
       <div className="container">
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color" >15425</h3>
                        <h4 className="text-uppercase">Happy<br/>Gamers</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">8745</h3>
                        <h4 className="text-uppercase">Servers<br/>Ordered</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer id-color">235</h3>
                        <h4 className="text-uppercase">Awards<br/>Winning</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-sm-30 position-relative">
                    <div className="de_count text-light wow fadeInUp">
                        <h3 className="timer text-line">15</h3>
                        <h4 className="text-uppercase">Years<br/>Experience</h4>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}
