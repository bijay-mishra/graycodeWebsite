import Link from 'next/link';
import Image from 'next/image';
import ImagePopup from './ImagePopup';
import React, { useEffect, useState } from 'react';

import sidebar_img_1 from "@assets/img/portfolio/img-1.jpg";
import sidebar_img_2 from "@assets/img/portfolio/img-2.jpg";
import sidebar_img_3 from "@assets/img/portfolio/img-3.jpg";
import sidebar_img_4 from "@assets/img/portfolio/img-4.jpg";
import sidebar_img_5 from "@assets/img/portfolio/img-5.jpg";
import sidebar_img_6 from "@assets/img/portfolio/img-6.jpg";
import MobileMenus from '../layout/headers/mobile-menus';
import htmlcontentservice from '../service/htmlcontentservice';
import { ApiEndPoints } from '../config/apiconfig';


const Sidebar = ({sidebarOpen, setSidebarOpen, home_three}) => {
    const [data,setData]=useState("");
    const [siteInfo,setSiteInfo]=useState("")
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
 const getMediaGallary=async(pageNo, pageSize,query)=>{
    let response=await htmlcontentservice.GetWebGallaryListByKey(pageNo, pageSize,"Graycode-sidebargallary",query);
    if(response.Code==200){
     setData(response.Data.MediaGalleryListVMS)
    }

 }
 useEffect(()=>{
    getMediaGallary(1, 6, "")
 },[])


  //  images
  const img = data &&data.map((item) => ApiEndPoints.baseUrl+item.MediaPath);

  const GetSiteInfo=async()=>{
    var response = await htmlcontentservice.GetSiteInfo()
    if(response.Code==200) {
     setSiteInfo(response.Data)

    }
  }
  useEffect(()=>{ GetSiteInfo()},[])

    return (
        <>
            <div className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${home_three ? "home-3-pos" : ""}`}>
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__close">
                        <button className="offcanvas__close-btn offcanvas-close-btn" onClick={() => setSidebarOpen(false)}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M1 1L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                <div className="offcanvas__content">
                    <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo logo">
                            <Link href="/">
                            {siteInfo?.LogoPath?<Image src={ApiEndPoints.baseUrl+  siteInfo?.LogoPath} alt="logo" width={120} height={40}/>:""}
                            </Link>
                        </div>
                    </div>
                    <div className="mobile-menu fix d-lg-none"></div>
                    <div className="tp-mobile-menu-pos mean-container d-lg-none">
                        <MobileMenus />
                    </div>
                    <div className="offcanvas__popup">
                        <p>{siteInfo && siteInfo.Description}</p>
                        <div className="offcanvas__popup-gallery">
                            <h4 className="offcanvas__title">Gallery</h4>
                            {data && data.length>0 &&data.map((item, i) => 
                                <a key={i} style={{ cursor: "pointer" }} 
                                onClick={() => handleImagePopup(i)} 
                                className="popup-image">
                                   {item?.MediaPath? <Image src={ApiEndPoints.baseUrl+ item.MediaPath} alt="theme-pure" width={100} height={100} />:""}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="offcanvas__contact">
                        <h4 className="offcanvas__title">Contacts</h4>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-sharp fa-solid fa-location-dot"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="https://www.google.com/maps/place/GrayCode+Technology+Pvt.Ltd/@27.684023,85.3151115,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19ef9963d0bf:0x34db771ca3328461!8m2!3d27.684023!4d85.3176864!16s%2Fg%2F11gff_93wk?entry=ttu">{siteInfo && siteInfo?.Address1}</a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="mailto:needhelp@company.com">{siteInfo && siteInfo?.DefaultEmail} </a>
                            </div>
                        </div>
                        <div className="offcanvas__contact-content d-flex">
                            <div className="offcanvas__contact-content-icon">
                            <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="offcanvas__contact-content-content">
                            <a href="tel:01310-069824"> {siteInfo && siteInfo?.PhoneNumber1}</a>
                            </div>
                        </div>
                    </div>
                    <div className="offcanvas__social"> 
                        <a className="icon facebook" href="https://www.facebook.com/graycodetechnology"><i className="fab fa-facebook-f"></i></a>
                        <a className="icon twitter" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="icon youtube" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="icon linkedin" href="https://www.linkedin.com/company/graycodetechnology/"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                </div>
            </div>
         <div className={`body-overlay ${sidebarOpen && "opened"}`} onClick={() => setSidebarOpen(false)}></div>

         {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
        </>
    );
};

export default Sidebar;