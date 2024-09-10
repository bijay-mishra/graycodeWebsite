import Image from 'next/image';
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrow from "@/src/svg/line-arrow";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/src/modals/video-popup";
import React, { useState, useEffect } from "react";


import shape_1 from "@assets/img/hero/shape-1.png";
import shape_2 from "@assets/img/hero/shape-2.png";
import shape_3 from "@assets/img/hero/shape-3.png";
import shape_4 from "@assets/img/hero/shape-4.png";
import shape_5 from "@assets/img/hero/shape-7.png";

// Added Swiper CSS imports
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

import htmlcontentservice from '@/src/service/htmlcontentservice';
import { ApiEndPoints } from '@/src/config/apiconfig';

SwiperCore.use([Autoplay, Navigation, EffectFade]);

// Slider settings
const settings = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};

// Shapes
const shapes = [
  { id_cls: 1, img: shape_1 },
  { id_cls: 2, img: shape_2 },
  { id_cls: 3, img: shape_3 },
  { id_cls: 4, img: shape_4 },
  { id_cls: 7, img: shape_5 },
];

const HeroSlider = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [heroImg, setHeroImg] = useState([]);

  const GetHeroList = async () => {
    const response = await htmlcontentservice.GetBannerImageListbyKey(1, 99, "Graycode-herobanner", "en");
    // debugger
    if (response.Code === 200) {
      setHeroImg(response?.Data?.Banners);
    }
  };

  console.log(heroImg);
  
  useEffect(() => {
    GetHeroList();
  }, []);

  return (
    <>
      <section className="tp-hero-area tp-hero-space">
        <div className="tp-hero-wrapper p-relative">
          <div className="hero-active-1 swiper-container">
            {heroImg && heroImg.length > 0 && ( // Conditional rendering of Swiper
              <Swiper {...settings} modules={[Autoplay, Navigation, EffectFade]}>
                {heroImg.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="tp-hero-inner-1">
                      <div className="container">
                        <div className="tp-hero-shape">
                          {shapes.map((shape, index) =>
                            shape.id_cls ? <Image key={index} className={`shape-${shape.id_cls}`} src={shape.img} alt="theme-pure" /> : ""
                          )}
                        </div>
                        <div className="tp-hero-1">
                          <div className="tp-hero-bg tp-hero-overlay p-relative" style={{ backgroundImage: `url(${ApiEndPoints.baseUrl + item.ImagePath})` }}></div>
                          <div className="row">
                            <div className="col-lg-7">
                                <div className="tp-hero-title-wrapper">
                              <div className="tp-hero-content p-relative">
                                  <span className="tp-section-title__pre p-relative">
                                    best
                                    <span className="title-pre-color">it solutions</span>
                                    <AngleArrow />
                                  </span>
                                  <h3 className="tp-hero-title">
                                    {item.Title} <LineArrow />
                                    {/* <span className="title-color">{item.Subtitle}</span> */}
                                     <br />
                                    <span className="title-text-transparent">{item.Subtitle}</span>
                                  </h3>
                                  <div className="tp-hero-btn">
                                    <Link className="tp-btn" href="/about">
                                      Learn More{" "}
                                      <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="tp-hero-shape-animation">
                                  <span></span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="tp-hero-play-btn">
                                <button className="popup-video" onClick={() => setIsVideoOpen(true)}>
                                  <i className="fa-sharp fa-solid fa-play"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div className="tp-hero-nav d-none d-xxl-block">
            <button type="button" className="hero-button-prev-1 tp-btn-hover-clear alt-color">
              <i className="fa-regular fa-arrow-left"></i>
              <b></b>
            </button>
            <button type="button" className="hero-button-next-1 tp-btn-hover-clear alt-color">
              <i className="fa-regular fa-arrow-right"></i>
              <b></b>
            </button>
          </div>

          <div className="tp-hero-bottom">
            <div className="tp-hero-experince"></div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"bRrIhgn52m0"} />
      {/* video modal end */}
    </>
  );
};

export default HeroSlider;