import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import shape_2 from  "@assets/img/support/shape-bg.png";
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import htmlcontentservice from '@/src/service/htmlcontentservice';
import { ApiEndPoints } from '@/src/config/apiconfig';

const FaqArea = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    function handleClick(index) {
      setActiveIndex(index === activeIndex ? null : index);
    }

    const [faq,setFaq]=useState("")
    const[faqImg,setFaqImg]=useState("")
    const GetFaqList=async()=>{
      var response=await htmlcontentservice.GetFAQHomeListbyKey(1,99,"Graycode_Home_FAQ", "en")
      if(response.Code==200){
         setFaq(response.Data.FAQOutputs)
      }
    }
    useEffect(()=>{GetFaqList()},[])
 const GetFaqImage=async()=>{
   var response=await htmlcontentservice.GetBannerImageListbyKey(1,99,"Graycode_FAQBanner", "en")
   if(response.Code==200){
      setFaqImg(response?.Data?.Banners[0])
   }
 }
 useEffect(()=>{GetFaqImage()},[])
   
    return (
        <>
            <section className="tp-support-area tp-support-bg p-relative pb-110">
            <div className="container container-large">
               <div className="tp-support-shape">
                 {faqImg?.ImagePath?<Image className="shape-1" src={ApiEndPoints.baseUrl + faqImg?.ImagePath} alt="theme-pure" width={578} height={591} />:""}
                  <Image className="shape-2" src={shape_2} alt="theme-pure" />
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-8 col-xl-10">
                     <div className="tp-support-title-wrapper text-center">
                        <span className="tp-section-title__pre">
                           best IT <span className="title-pre-color">Support</span>
                           <AngleArrow /> 
                        </span>
                        <h3 className="tp-section-title">{faqImg && faqImg?.Title} <span className="title-color">{faqImg && faqImg?.Subtitle}</span>
                           <span className="title-center-shape">
                            <LineArrowTwo /> 
                           </span>
                        </h3>
                     </div>

                     <div className="tp-support-faq faq-style-1">
                        <div className="tp-faq-tab-content tp-accordion">
                           <div className="accordion" id="general_accordion">
                            {faq && faq.length && faq.map((item, i) => 
                                <div key={i} className={`accordion-item`}>
                                    <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                    <button 
                                    className={`accordion-button ${activeIndex===i? " ":"collapsed"}`} 
                                    type="button" 
                                    onClick={()=>handleClick(i)}
                                    >
                                        {item.Question}
                                    </button>
                                    </h2>
                                    <div 
                                    id={`collapse${item.accordion_id}`} 
                                    className={`accordion-collapse collapse ${activeIndex===i ? "show":""}`} 
                                    aria-labelledby={`heading${item.accordion_id}`} 
                                    data-bs-parent="#general_accordion"
                                    >
                                    <div className="accordion-body">
                                        <p>{item.Answer}</p>
                                    </div>
                                    </div>
                                </div> 
                            )} 
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

export default FaqArea;