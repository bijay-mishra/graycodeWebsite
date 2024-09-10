import { ApiEndPoints } from "@/src/config/apiconfig";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import AngleArrow from "@/src/svg/angle-arrow";
import LineArrowThree from "@/src/svg/line-arrow3";
import RightArrow from "@/src/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogArea = () => {
  const [homeBlog, setHomeBlog] = useState("");
 
  const GetHomeBlog = async () => {
    var response = await htmlcontentservice.GetBlogList(1, 4, "");
    if (response.Code == 200) {
      setHomeBlog(response.Data);
    }
  };
  useEffect(() => {
    GetHomeBlog();
  }, []);

  return (
    <>
      <section className="tp-blog-area pt-80 pb-60">
        <div className="container container-large">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="tp-blog-title-wrapper">
                    <span className="tp-section-title__pre">
                      Upcoming <span className="title-pre-color">News</span>
                      <AngleArrow />
                    </span>
                    <h3 className="tp-section-title">
                      Recent Blog & News in 
                      <span className="title-color">
                          Company
                      </span>
                      <span className="title-right-shape">
                        <LineArrowThree />
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                  </div>
                </div>
              </div>
            </div>

            {homeBlog &&
              homeBlog.length > 0 &&
              homeBlog.slice(0, 3).map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                  <div className="tp-blog-wrapper mb-30">
                    <div className="tp-blog-thumb">
                      <Link href="/blog-details">
                        {item?.ThumbImage ? (
                          <Image
                            src={ApiEndPoints.baseUrl + item.ThumbImage}
                            alt="theme-pure"
                            height={243}
                            width={425}
                          />
                        ) : (
                          ""
                        )}
                      </Link>
                    </div>
                    <div className="tp-blog-content">
                      <div className="tp-blog-details ">
                        <div className="tp-blog-date">
                          <span>
                            <i className="fa-light fa-calendar-days"></i>{item?.AddedOn?.slice(0,10)}
                          </span>
                        </div>
                      </div>
                      <h3
                        className="tp-blog-title"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          lineHeight: "1.3em", // Adjust as per your design
                          maxHeight: "2.6em", // lineHeight * 2 lines
                        }}
                      >
                        <Link
                          href="/blog-details"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          {item.BlogTitle}
                        </Link>
                      </h3>
                      <div className="tp-blog-btn d-flex justify-content-between">
                        <div className="read-more p-relative">
                          <Link href={`/blog-details/${item.BlogSlug}`}>
                            Read More{" "}
                            <span>
                              {" "}
                              <RightArrow />{" "}
                            </span>
                          </Link>
                        </div>
                        <div className="fvrt">
                          <span>
                            <i className="fa-light fa-heart"></i>
                          </span>
                        </div>
                      </div>
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

export default BlogArea;
