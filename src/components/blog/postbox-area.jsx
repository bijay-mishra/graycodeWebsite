import post_data from "@/src/data/post-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import RecentPost from "./recent-post";
import Category from "./category";
import Tags from "./tags";
import SearchArea from "./search-area";
import UserProfile from "./user-profile";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { ApiEndPoints } from "@/src/config/apiconfig";

const PostboxArea = () => {
  const [blogPage, setBlogPage] = useState("");
  const GetBlogs = async () => {
    var response = await htmlcontentservice.GetBlogList(1, 4, "");
    if (response.Code == 200) {
      setBlogPage(response.Data);
    }
  };
  useEffect(() => {
    GetBlogs();
  }, []);

  return (
    <>
      <section className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper">
                {blogPage &&
                  blogPage.length > 0 &&
                  blogPage.map((item, i) => (
                    <article
                      key={i}
                      className="postbox__item format-image mb-50 transition-3"
                    >
                      <div className="postbox__thumb w-img">
                        <Link href={`/blog-details/${item.BlogSlug}`}>
                          {item?.ThumbImage ? (
                            <Image
                              src={ApiEndPoints.baseUrl + item.ThumbImage}
                              alt="theme-pure"
                              height={448.8}
                              width={776.66}
                            />
                          ) : (
                            ""
                          )}
                        </Link>
                        <div className="postbox__tag">
                          <p>{item.catagory}</p>
                        </div>
                      </div>
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            <i className="fa-light fa-calendar-days"></i>{item.AddedOn.slice(0,10)}
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href="/blog-details">{item.BlogTitle}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {item.ShortContent}
                          </p>
                        </div>
                        <div className="postbox__read-more">
                          <Link
                            href={`/blog-details/${item.BlogSlug}`}
                            className="tp-btn"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                <div className="basic-pagination text-center">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/blog">
                          <i className="fa-regular fa-angles-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <i className="fa-regular fa-angles-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="sidebar__wrapper">
                {/* <UserProfile />  */}
                {/* <SearchArea /> */}
                <RecentPost />
                {/* <Category /> */}
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostboxArea;
