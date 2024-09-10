import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import breadcrumb_img from "@assets/img/breadcrumb/titile.svg";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { ApiEndPoints } from "@/src/config/apiconfig";

const Breadcrumb = ({top_title = "Our Company", page_title = "Our Company"}) => {
  const [breadcrumbBanner,setBreadcrumbBanner]=useState("")
  const GetBreadcrumbBanner=async()=>{
    var response=await htmlcontentservice.GetBannerImageListbyKey(1,99,"Graycode_BreadcrumbBanner","en")
    if(response.Code==200){
      setBreadcrumbBanner(response?.Data?.Banners[0])
    }
  }
  useEffect(()=>{GetBreadcrumbBanner()},[])
  return (
    <>
      <section
        className="breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1"
        style={{backgroundImage: `url(${ApiEndPoints.baseUrl + breadcrumbBanner.ImagePath})`}}
        >
        <div className="breadcrumb__bg-overlay m-img"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="breadcrumb__content text-center">
                <h3 className="breadcrumb__title">
                  {top_title}
                  <Image src={breadcrumb_img} alt="theme-pure" />
                </h3>
                <div className="breadcrumb__list breadcrumb__list-translate">
                  <span> <Link href="/">Home</Link> </span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>pages</span>
                  <span className="dvdr"> <i className="fa-regular fa-angle-right"></i> </span>
                  <span>{page_title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
