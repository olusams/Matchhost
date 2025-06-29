import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const image1 ="./img/slider/1.webp";
const image2 ="./img/slider/2.webp";
const image3 ="./img/slider/3.webp";
const image4 ="./img/slider/4.webp";

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Preload images
    const images = [image1, image2, image3, image4];
    let loadedCount = 0;
    
    images.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === images.length) {
          setIsLoading(false);
        }
      };
      img.src = src;
    });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="slider-loading">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading amazing content...</p>
          </div>
        </div>
      )}
      
      <Swiper 
        className={`mainslider ${isLoading ? 'hidden' : ''}`}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ 
          delay: 8000, // Increased from 4000 to 8000ms
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1000} // Increased transition speed for smoother effect
        effect="fade"
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => {
          console.log('Slider initialized');
          // Pause autoplay initially to allow content to load
          setTimeout(() => {
            swiper.autoplay.start();
          }, 2000);
        }}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}">${index + 1} <span className="swiper-pagination-current">/ 4</span></span>`;
          },
        }}
      >
        <SwiperSlide>
          <div className="swiper-inner" style={{
                                                backgroundImage: `url(${image1})`,
                                                width: '100%',
                                                height: '100%',
                                              }}>
              <div className="sw-caption">
                  <div className="container">
                      <div className="row gx-5 align-items-center">
                          <div className="col-lg-8 mb-sm-30">
                          <div className="subtitle blink mb-4" data-aos="fade-in" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out">
                          Servers Are Available
                          </div>

                  <h1 className="slider-title text-uppercase mb-1" data-aos="fade-in" data-aos-delay="00" data-aos-duration="1000" data-aos-easing="ease-in-out">
                           Galactic Odyssey
                  </h1>

                          </div>
                          <div className="col-lg-6">
                              <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p>
                              <div className="sw-price wp">
                                  <div className="d-starting">
                                      Starting at
                                  </div>
                                  <div className="d-price">
                                      <span className="d-cur">$</span>
                                      <span className="d-val">9.99</span>
                                      <span className="d-period">/monthly</span>
                                  </div>
                              </div>
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Order Your Game Server Now</Link>
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
                      <div className="row gx-5 align-items-center">
                          <div className="col-lg-8 mb-sm-30">
                              <div className="subtitle blink mb-4">Servers Are Available</div>
                              <h1 className="slider-title text-uppercase mb-1">Mystic Racing</h1>
                          </div>
                          <div className="col-lg-6">
                              <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p>
                              <div className="sw-price ">
                                  <div className="d-starting">
                                      Starting at
                                  </div>
                                  <div className="d-price">
                                      <span className="d-cur">$</span>
                                      <span className="d-val">12.99</span>
                                      <span className="d-period">/monthly</span>
                                  </div>
                              </div>
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Order Your Game Server Now</Link>
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
                      <div className="row gx-5 align-items-center">
                          <div className="col-lg-8 mb-sm-30">
                              <div className="subtitle blink mb-4">Servers Are Available</div>
                              <h1 className="slider-title text-uppercase mb-1">Silent Wrath</h1>
                          </div>
                          <div className="col-lg-6">
                              <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p>
                              <div className="sw-price ">
                                  <div className="d-starting">
                                      Starting at
                                  </div>
                                  <div className="d-price">
                                      <span className="d-cur">$</span>
                                      <span className="d-val">14.99</span>
                                      <span className="d-period">/monthly</span>
                                  </div>
                              </div>
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Order Your Game Server Now</Link>
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
                      <div className="row gx-5 align-items-center">
                          <div className="col-lg-8 mb-sm-30">
                              <div className="subtitle blink mb-4">Servers Are Available</div>
                              <h1 className="slider-title text-uppercase mb-1">Funk Dungeon</h1>
                          </div>
                          <div className="col-lg-6">
                              <p className="slider-text">Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore.</p>
                              <div className="sw-price ">
                                  <div className="d-starting">
                                      Starting at
                                  </div>
                                  <div className="d-price">
                                      <span className="d-cur">$</span>
                                      <span className="d-val">15.99</span>
                                      <span className="d-period">/monthly</span>
                                  </div>
                              </div>
                              <div className="spacer-10"></div>
                              <Link className="btn-main mb10" href="#">Order Your Game Server Now</Link>
                          </div>
                      </div>
                  </div>
              </div>                                
              <div className="sw-overlay"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;