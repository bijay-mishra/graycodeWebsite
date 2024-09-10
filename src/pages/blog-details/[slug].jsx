"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import htmlcontentservice from "@/src/service/htmlcontentservice";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import RecentPost from "@/src/components/blog/recent-post";
import Tags from "@/src/components/blog/tags";

function BlogDetail() {
  const router = useRouter();
  // var windowUrl = window?.location?.search;
  // const params = new URLSearchParams(windowUrl.toLowerCase());
  // debugger
  const pathname = usePathname();
  let slug = pathname?.replace("/blog-details/", "").split("?")[0];
  const [isloading, setIsloading] = useState(false);
  const [data, setData] = useState();
  const [noPage, setNoPage] = useState(false);
  const getBlog = async () => {

    if (slug == "" || slug == undefined) {
      return;
    }
    var response = await htmlcontentservice.GetBlogdetails(slug);
    if (response.Code == 200) {
      setData(response.Data);
      setNoPage(false);
    } else {
      setNoPage(true);
    }
  };

  console.log(data);

  useEffect(() => {
    getBlog();
  }, [router.isReady, slug]);

  // const [blogContent,setBlogContent]=useState("")
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
        <section className="postbox__area pt-120 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8">
                <div className="postbox__wrapper">
                  <article className="postbox__item format-image mb-50 transition-3">
                    <div
                      className=""
                      dangerouslySetInnerHTML={{ __html: data?.BlogContent }}
                    ></div>
                  </article>
                </div>
              </div>
            
          
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="sidebar__wrapper">
              <RecentPost />
              <Tags/>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BlogDetail;
