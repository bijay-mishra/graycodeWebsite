import { ApiEndPoints } from '@/src/config/apiconfig';
import htmlcontentservice from '@/src/service/htmlcontentservice';
import AngleArrow from '@/src/svg/angle-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ServiceArea = () => {
    const [servicePage,setServicePage]=useState("")
    const [siteInfo,setSiteInfo]=useState("")
    const GetServicePageList=async()=>{
        var response=await htmlcontentservice.GetNewsbyKey(1,99,"Graycode_ServicePage","en")
        if(response.Code==200){
            setServicePage(response.Data)
        }
    }
    useEffect(()=>{GetServicePageList()},[])
 const GetSiteInfo=async()=>{
    var response=await htmlcontentservice.GetSiteInfo()
    if(response.Code==200){
        setSiteInfo(response.Data)
    }
 }
 useEffect(()=>{GetSiteInfo()},[])

    return (
        <>
           <section className="tp-service-breadcrumb-area p-relative pt-120">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tp-service-breadcrumb-title-wrapper">
                            <span className="tp-section-title__pre">
                                service <span className="title-pre-color">IT Solutions</span>
                                <AngleArrow /> 
                            </span>
                            <h3 className="tp-section-title">
                                {servicePage && servicePage?.SettingTitle} <br /><span className="title-color">{servicePage && servicePage?.SettingSubTitle}</span> 
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-service-breadcrumb-title-wrapper justify-content-start justify-content-xl-end d-flex">
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {servicePage.NewsOutputVM && servicePage.NewsOutputVM.length>0 && servicePage.NewsOutputVM.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-service-3-content breadcrumb-item mb-30">
                                <div className="tp-service-3-content-thumb">
                                  {item?.ThumbImage?<Image src={ApiEndPoints.baseUrl + item.ThumbImage} alt="theme-pure" height={44} width={44} />:""}
                                </div>
                                <h4 className="tp-service-breadcrumb-title">
                                    <Link href="/service-details">{item.NewsTitle}</Link></h4>
                                <p>{item.ShortContent}</p>
                                <div className="tp-service-btn">
                                    <Link href={`/service-details/${item.NewsSlug}`}>
                                        Read More 
                                        <i className="fa-solid fa-arrow-up-right"></i>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        )} 
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 text-center">
                            <div className="tp-about-call fadeUp">
                                <a href="tel:01310-069824">
                                    <p><i className="fa-solid fa-phone"></i> 
                                    Provide IT services to hundreds customers <span>+977-{siteInfo && siteInfo?.PhoneNumber1}</span>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default ServiceArea;