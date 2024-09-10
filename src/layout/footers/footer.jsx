import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import headphone from "@assets/img/footer/headphone.png";
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks, { CopyRight } from '@/src/common/social-links';
import htmlcontentservice from '@/src/service/htmlcontentservice';
import { ApiEndPoints } from '@/src/config/apiconfig';

const footer_content = { 
    info: <>Graycode Technology is your premier IT solutions provider, specializing in cutting-edge software development, IT consulting, and cloud services.</>,
    map: "https://www.google.com/maps/place/GrayCode+Technology+Pvt.Ltd/@27.684023,85.3151115,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19ef9963d0bf:0x34db771ca3328461!8m2!3d27.684023!4d85.3176864!16s%2Fg%2F11gff_93wk?entry=ttuhttps://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
    contact_text: "PERFECT SOLUTION From  It Advisor",
    service_links: [
        "Custom Software Development",
        "IT Consulting",
        "Cloud Services",
    ]
};
const { contact_text, info, map, service_links } = footer_content;

const Footer = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [siteInfo, setSiteInfo] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const GetSiteInfo = async () => {
        var response = await htmlcontentservice.GetSiteInfo();
        if (response.Code === 200) {
            setSiteInfo(response.Data);
        }
    };

    useEffect(() => {
        GetSiteInfo();
    }, []);

   const onSubmit=async(e)=>{
    let response=await htmlcontentservice.NewsLetter(e)
    if(response.Code==200){
        alert("Message sent successfully.")
        reset();
    }
    else{
       setResponseMessage(response.Message) ;
       alert(response.Message);
    }
   }

    return (
        <>
            <footer className="tp-footer-area p-relative">
                <div className="tp-footer-bg" style={{ backgroundImage: `url(/assets/img/footer/footer-bg.jpg)` }}></div>
                <div className="tp-footer-top-shape" style={{ backgroundImage: `url(/assets/img/footer/footer-top-bg.png)` }}></div>
                <div className="container container-large">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-footer-top-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-contact">
                                            <a href={`mailto:${siteInfo?.DefaultEmail}`}>Contact us at: <span>{siteInfo && siteInfo?.DefaultEmail}</span></a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
                                            <div className="tp-footer-top-right-headphone">
                                                <Image src={headphone} alt="theme-pure" />
                                            </div>
                                            <div className="tp-footer-top-right-content">
                                                <p>{contact_text}</p>
                                                <a href={`tel:${siteInfo?.PhoneNumber1}`}><span>{siteInfo && siteInfo?.PhoneNumber1}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-main-area">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-1">
                                    <div className="tp-footer-logo">
                                        <Link href="/">
                                            {siteInfo?.LogoPath ? <Image src={ApiEndPoints.baseUrl + siteInfo?.LogoPath} alt="logo" width={120} height={40} /> : ""}
                                        </Link>
                                    </div>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-info">
                                            <p>{siteInfo && siteInfo.Description}</p>
                                            <div className="tp-footer-main-location">
                                                <a target='_blank' href={map}> <i className="fa-sharp fa-light fa-location-dot"></i>
                                                    {siteInfo && siteInfo.Address1}</a>
                                            </div>
                                            <div className="tp-footer-main-mail">
                                                <a href={`mailto:${siteInfo?.DefaultEmail}`}>
                                                    <i className="fa-light fa-message-dots"></i>{siteInfo && siteInfo.DefaultEmail}
                                                    <br />
                                                    <i className="fa-light fa-message-dots"></i>{siteInfo && siteInfo.PhoneNumber1}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-2">
                                    <h3 className="tp-footer-widget-title">Services Req</h3>
                                    <div className="tp-footer-widget-content">
                                        <ul>
                                            {service_links.map((link, i) => <li key={i}><Link href="#">{link}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-3">
                                    <h3 className="tp-footer-widget-title">Contact Info</h3>
                                    <div className="tp-footer-widget-content">
                                        <div className="tp-footer-author d-flex">
                                            <div className="tp-footer-author-content">
                                                <span>Would you like to send us a message for more information?</span>
                                                <br />
                                                <a href="/contact" style={{ textDecoration: "underline", }}>Click Here?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="tp-footer-widget tp-footer-col-4">
                                    <h3 className="tp-footer-widget-title">Newsletter</h3>
                                    <div className="tp-footer-from">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="tp-footer-text-email p-relative">
                                                <input
                                                    type="text"
                                                    placeholder="Enter Email Address"
                                                    {...register("email", {
                                                        required: "Email is required.",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                            message: "Invalid email address.",
                                                        },
                                                    })}
                                                />
                                                <span
                                                    onClick={handleSubmit((e)=>onSubmit(e))}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <EmailAeroplan />
                                                </span>
                                            </div>
                                            {errors.email && <p>{errors.email.message}</p>}
                                            <div className="tp-footer-form-check">
                                                <input
                                                    className="form-check-input"
                                                    id="flexCheckChecked"
                                                    type="checkbox"
                                                    {...register("agreeTerms", {
                                                        required: "You must agree to the terms and policies.",
                                                    })}
                                                />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    I agree to all your terms and policies
                                                </label>
                                            </div>
                                            {errors.agreeTerms && <p>{errors.agreeTerms.message}</p>}
                                        </form>
                                        <div className="tp-footer-widget-social">
                                            <SocialLinks />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tp-footer-copyright-area p-relative">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner">
                                    <p><CopyRight /></p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className="tp-footer-copyright-inner text-lg-end">
                                    <Link href="/termsandconditions">Terms and conditions</Link>
                                    <Link className="ml-50" href="/privacypolicy"> Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;