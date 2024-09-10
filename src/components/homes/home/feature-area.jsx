import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowFive from "@/src/svg/line-arrow-5";
import shape_1 from "@assets/img/feature/shape-1.png";
import shape_2 from "@assets/img/feature/shape-2.png";
import shape_3 from "@assets/img/feature/img-shape.png";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { ApiEndPoints } from "@/src/config/apiconfig";


const FeatureArea = ({ about }) => {
  const [features, setFeatures] = useState("");
  const GetFeaturesList = async () => {
    var response = await htmlcontentservice.GetTestimonialsbyKey(
      1,
      99,
      "Graycode-features",
      "en"
    );
    if (response.Code == 200) {
      setFeatures(response.Data);
    }
  };
  useEffect(() => {
    GetFeaturesList();
  }, []);

  return (
    <>
      <section
        className={`tp-feature-area ${
          about ? "feature-breadcrumb pb-100" : ""
        }`}
      >
        {about ? null : (
          <div className="tp-feature-shape">
            <Image src={shape_1} alt="theme-pure" />
          </div>
        )}
        <div className="container container-large">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-feature-title-wrapper">
                <span className="tp-section-title__pre">
                  feature <span className="title-pre-color">IT Solutions</span>
                  <AngleArrow />
                </span>
                <h3 className="tp-section-title">
                  {features && features?.SettingTitle}{" "}
                  <span className="title-color">
                    {features && features?.SettingSubTitle}
                  </span>
                  <span className="title-right-shape">
                    <LineArrowFive />
                  </span>
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-feature-wrapper p-relative">
              </div>
            </div>
          </div>
          <div className="row">
            {features &&
              features.TestimonialOutputListVM.length > 0 &&
              features.TestimonialOutputListVM.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div
                    className="tp-feature-item-box p-relative wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".3s"
                  >
                    <div className="tp-feature-item p-relative mb-30">
                      <div className="tp-feature-item-shape">
                        <Image src={shape_2} alt="theme-pure" />
                      </div>
                      <div className="tp-feature-item-wrapper">
                        <div className="tp-feature-item-thumb">
                          <div className="shape">
                            <Image src={shape_3} alt="theme-pure" />
                          </div>
                          {item?.ProfileImagePath ? (
                            <Image
                              src={ApiEndPoints.baseUrl + item.ProfileImagePath}
                              className="thumb"
                              alt="theme-pure"
                              height={200}
                              width={150}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="tp-feature-item-content">
                          <h3 className="feature-title">
                            <Link href="/about">{item.Name}</Link>
                            <span>
                              <AngleArrow />
                            </span>
                          </h3>
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              height: "2.6em", 
                              lineHeight: "1.3em", 
                            }}
                          >
                            {item.MessageContent}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tp-feature-item-btn">
                      <Link href="/about">
                        <i className="fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
