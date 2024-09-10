import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// SVG icons and images
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { ApiEndPoints } from "@/src/config/apiconfig";

const ServiceArea = () => {
  const splideRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const [reloadClassName, setReloadClassName] = useState(null);
  const [newServices, setNewServices] = useState([]);
  const [itContent, setItContent] = useState("");

  const setting = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "30px",
    pagination: false,
    arrows: false,
    breakpoints: {
      1800: { perPage: 4 },
      1500: { perPage: 4 },
      1200: { perPage: 3 },
      800: { perPage: 2 },
      566: { perPage: 1 },
    },
  };

  useEffect(() => {
    const reload = document.getElementById("reload");
    setReloadClassName(reload);
  }, []);

  const scrollRotate = () => {
    if (reloadClassName) {
      reloadClassName.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
    }
  };

  useEffect(() => {
    if (reloadClassName) {
      window.addEventListener("scroll", scrollRotate);
    }
    return () => {
      window.removeEventListener("scroll", scrollRotate);
    };
  }, [reloadClassName]);

  const fetchNewServiceList = async () => {
    const response = await htmlcontentservice.GetNewsbyKey(
      1,
      99,
      "Graycode-Professional",
      "en"
    );
    if (response.Code === 200) {
      setNewServices(response.Data);
    }
  };

  const fetchItContentList = async () => {
    const response = await htmlcontentservice.GetHtmlContentListbyKey(
      1,
      99,
      "Graycode_Itcontent",
      "en"
    );
    if (response.Code === 200) {
      setItContent(response.Data?.HtmlContentVM[0]?.ContentHtml);
    }
  };

  useEffect(() => {
    fetchNewServiceList();
    fetchItContentList();
  }, []);

  useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    const handlePrevClick = () => {
      splideInstance.go("<");
    };

    const handleNextClick = () => {
      splideInstance.go(">");
    };

    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", handlePrevClick);
      nextButton.addEventListener("click", handleNextClick);
    }

    return () => {
      if (prevButton && nextButton) {
        prevButton.removeEventListener("click", handlePrevClick);
        nextButton.removeEventListener("click", handleNextClick);
      }
    };
  }, []);

  return (
    <div className="tp-service-funfact-box">
      <section className="tp-service-area pt-85 pb-50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="tp-service-title-wrapper text-center">
                <span className="tp-section-title__pre">
                  service <span className="title-pre-color">IT Solutions</span>
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  {" "}
                  {newServices && newServices?.SettingTitle}{" "}
                  <i>{newServices && newServices?.SettingSubTitle}</i>
                  <span className="title-center-shape">
                    <LineArrowTwo />
                  </span>
                </h3>
              </div>
            </div>

            <div className="col-lg-4 tp-about-wrapper">
              <div className="tp-about-nav d-none d-md-block p-relative tp-service-nav">
                <button
                  type="button"
                  className="about-button-prev-1 service-button-prev-1"
                  ref={prevButtonRef}
                >
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button
                  type="button"
                  className="about-button-next-1"
                  ref={nextButtonRef}
                >
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="tp-service-slider-wrapper">
              <Splide
                options={setting}
                ref={splideRef}
                className="service-active splide"
              >
                {newServices.NewsOutputVM &&
                  newServices.NewsOutputVM.length > 0 &&
                  newServices.NewsOutputVM.map((item, i) => (
                    <SplideSlide key={i}>
                      <div className="tp-service-wrapper p-relative mb-55 w-100">
                        <div className="tp-service-designation">
                          <p>P</p>
                        </div>
                        <h3 className="service-title">{item.NewsTitle}</h3>
                        <div className="tp-service-icon" style={{}}>
                          {item?.ThumbImage ? (
                            <Image
                              src={ApiEndPoints.baseUrl + item.ThumbImage}
                              alt="theme-pure"
                              height={68}
                              width={62}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <p
                          className="hide-text"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.3em", 
                            height: "3.9em", 
                          }}
                        >
                          {item.ShortContent}
                        </p>
                        <div className="tp-service-btn">
                          <Link href={`/service-details/${item.NewsSlug}`}>
                            Read Out More
                            <i className="fa-solid fa-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
              </Splide>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tp-service-all-btn text-center fadeUp">
                <Link className="tp-btn" href="/service-details">
                  View all Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <div dangerouslySetInnerHTML={{ __html: itContent }}></div>
    </div>
  );
};

export default ServiceArea;

