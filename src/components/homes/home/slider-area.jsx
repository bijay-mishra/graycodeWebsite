import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import htmlcontentservice from '@/src/service/htmlcontentservice';
import { ApiEndPoints } from '@/src/config/apiconfig';


const setting = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true, 
  }

const SliderArea = () => {
    const sliderRef = useRef(null)
const [slider,setSlider]=useState("");
const GetSliderBanner=async()=>{
    let response=await htmlcontentservice.GetBannerImageListbyKey(1,99, "Graycode-SliderBanner","en")
    if (response.Code==200){
        setSlider(response?.Data?.Banners)
    }

}
console.log(slider)
useEffect(()=>{GetSliderBanner()},[])

    return (
        <>
           <section className="tp-text-slider-area fix pt-100 pb-100">
            <div className="container-fluid gx-0">
              <div className="row gx-0">
               <div className="col-lg-12">
                  <div className="tp-text-slider">
                     <Slider {...setting} ref={sliderRef} className="tp-text-active">
                        {slider && slider?.length && slider?.map((item, i) => 
                            <div key={i} className="tp-text-item">
                                <div className="tp-text-slider-wrapper">
                                    <div className="tp-text-slider-item d-flex align-items-center">
                                       {item?.ImagePath? <Image src={ApiEndPoints.baseUrl + item.ImagePath} alt="theme-pure" height={66} width={66} />:""}
                                        <h3 className="text-title">{item.Title}</h3>
                                        <h3 className='text-title'><span>{item.Subtitle}</span></h3>
                                    </div>
                                </div>
                             </div>                        
                        )} 
                     </Slider>
                  </div>
               </div>
            </div>
            </div>
         </section> 
        </>
    );
};

export default SliderArea;