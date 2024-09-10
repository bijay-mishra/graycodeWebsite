import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import shape_1 from "@assets/img/about/shape-1.png";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { ApiEndPoints } from "@/src/config/apiconfig";

// Swiper CSS imports
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';

const setting = {
  slidesPerView: 3,
  spaceBetween: 82,
  loop: true,
  navigation: {
    nextEl: ".about-button-next-1",
    prevEl: ".about-button-prev-1",
  },
  breakpoints: {
    1860: {},
    1800: {
      spaceBetween: 40,
    },
    1701: {},
    1600: {},
    1560: {},
    1400: {
      spaceBetween: 60,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 60,
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const AboutArea = () => {
  const [services, setServices] = useState([]);
  const [siteInfo, setSiteInfo] = useState({});
  const [aboutImg, setAboutImg] = useState("");
  const swiperRef = useRef(null);

  useEffect(() => {
    const getServiceList = async () => {
      const response = await htmlcontentservice.GetTestimonialsbyKey(1, 99, "Graycode-services", "en");
      if (response.Code === 200) {
        setServices(response.Data.TestimonialOutputListVM);
      }
    };

    getServiceList();
  }, []);

  useEffect(() => {
    const GetSiteInfo = async () => {
      const response = await htmlcontentservice.GetSiteInfo();
      if (response.Code === 200) {
        setSiteInfo(response.Data);
      }
    };

    GetSiteInfo();
  }, []);

  useEffect(() => {
    const GetAboutImg = async () => {
      const response = await htmlcontentservice.GetBannerImageListbyKey(1, 99, "Graycode-bannerImage", "en");
      if (response.Code === 200) {
        setAboutImg(response?.Data?.Banners[0]);
      }
    };

    GetAboutImg();
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, [services]);

  return (
    <>
      <section className="tp-about-area pb-45 pt-95 box-plr p-relative">
        <div className="tp-about-shape d-none d-xl-block">
          <Image className="shape-1" src={shape_1} alt="theme-pure" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
                {aboutImg?.ImagePath && (
                  <Image
                    src={ApiEndPoints.baseUrl + aboutImg.ImagePath}
                    alt="theme-pure"
                    height={603.61}
                    width={435.06}
                  />
                )}
              </div>
            </div>
            <div className="col-xl-8 col-lg-10">
              <div className="tp-about-wrapper pl-50">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="tp-about-title-wrapper p-relative">
                      <span className="tp-section-title__pre">
                        best <span className="title-pre-color">it service</span>
                        <AngleArrow />
                      </span>
                      <h3 className="tp-section-title">
                        {aboutImg?.Title}
                        <span className="title-left-shape">
                          <LineArrowTwo />
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="tp-about-nav d-none d-md-block p-relative">
                      <button type="button" className="about-button-prev-1">
                        <i className="fa-regular fa-arrow-left"></i>
                      </button>
                      <button type="button" className="about-button-next-1">
                        <i className="fa-regular fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tp-about-item-wrapper">
                  {services.length > 0 && (
                    <Swiper {...setting} modules={[Navigation]} ref={swiperRef} className="about-active swiper-container">
                      {services.map((item, i) => (
                        <SwiperSlide key={i} className="tp-about-item mb-30">
                          <div className="tp-about-item-thumb">
                            {item?.ProfileImagePath && (
                              <Image
                                src={ApiEndPoints.baseUrl + item.ProfileImagePath}
                                alt="theme-pure"
                                height={61}
                                width={61}
                              />
                            )}
                          </div>
                          <div className="tp-about-item-content">
                            <h4 className="about-title">{item.Name}</h4>
                            <p
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 5,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                height: "6.0em",
                                lineHeight: "1.5em",
                              }}
                            >
                              {item.MessageContent}
                            </p>
                            <div className="tp-about-item-btn">
                              <Link href="/about">
                                <i className="fa-regular fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="tp-about-call">
                    <a href={`tel:${siteInfo?.PhoneNumber1}`}>
                      <p>
                        <i className="fa-solid fa-phone"></i>
                        Provide IT services to the customers{" "}
                        <span>+977{siteInfo?.PhoneNumber1}</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
