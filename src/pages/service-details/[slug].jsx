"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";


function ServiceDetail() {
  const router = useRouter();
  const pathname = usePathname();
  let slug = pathname?.replace("/service-details/", "").split("?")[0];
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState();
  const [noPage, setNoPage] = useState(false);
  const getService = async () => {
    setData('')
    if (slug == "" || slug == undefined) {
      return;
      
    }
    var response = await htmlcontentservice.GetNewsDetail(slug);
    if (response.Code == 200) {
      setData(response.Data);
      setNoPage(false);
    } else {
      setNoPage(true);
    }
  };

  useEffect(() => {
    getService();
  }, [router.isReady, slug]);
  
  console.log(data,"fata");
  return (
    <>
      <HeaderOne />
      <main>
      <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
      <div style={{
        width:"90%",
         margin:"5rem auto 5rem auto",  
      }}>
      <div dangerouslySetInnerHTML={{ __html: data?.NewsContent }}>
      </div> 
      </div>      
      </main>
      <Footer />
    </>
  );
}

export default ServiceDetail;





// <div class="tp-service-details-thumb"><img alt="theme-pure" loading="lazy" width="780" height="473" decoding="async" data-nimg="1" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.3561ab17.jpg&amp;w=828&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.3561ab17.jpg&amp;w=1920&amp;q=75 2x" src="../../_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-1.3561ab17.jpg&amp;w=1920&amp;q=75" style="color: transparent;"></div>
