import dynamic from "next/dynamic";
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import htmlcontentservice from "../service/htmlcontentservice";
import HeaderOne from "../layout/headers/header";
import Footer from "../layout/footers/footer";

function PageName() {
    let pageSlug = "";
    var url = window.location.pathname.split("?");
    if (url != null && url.length > 0) {
        pageSlug = url[0].replace("/", "");
    }
    const params = useSearchParams();
    const [pageContent, setPageContent] = useState()
    const [noPage, setNoPage] = useState(false);
    const GetHtmlContentList = async () => {
        var response = await htmlcontentservice.GetHtmlContentListbyPage(pageSlug);
       
        let pc = "";
        if (response.Code == 200) {
            if (response.Data?.length > 0) {
                response.Data.map((item) => {
                    pc += item.ContentHtml;
                })
                setPageContent(pc)
            } else {
                setNoPage(true);
            }
        }
    }
console.log(noPage);

    useEffect(() => {
        GetHtmlContentList()
    }, [pageSlug])
    return (
        <>
        <HeaderOne/>
            <div className="no-bottom no-top zebra content" id="content">
                <div id="top"></div>
                <div className="row d-flex justify-content-center align-items-center p-0 m-0" style={{ background: "white" }}>
                    <div className="col-xl-12 col-12  py-4 px-0 m-0 container">
                        {noPage == false && <div className="card rounded-3 border-0 text-black d-flex justify-content-center">
                            {pageContent &&
                                <div className="section" style={{ whiteSpace: "initial" }} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
                            }
                        </div>
                        }
                        {noPage == true && <section className="error-page-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="error-content text-center">
                                            <div className="big-title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                                <h2>Oh...ho...</h2>
                                            </div>
                                            <div className="title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                                <h2>Sorry, Something Went Wrong.</h2>
                                            </div>
                                            <div className="text">
                                                <p>The page you are looking for was moved, removed, renamed<br /> or never existed.</p>
                                            </div>
                                            <div className="btns-box wow slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                                <Link className="btn-one" href="/">
                                                    <span className="txt">Back to Home<i className="icon-refresh arrow"></i></span>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>}
                    </div>
                </div>
            </div>
            <Footer/>
        </>


    )
}
export default dynamic(() => Promise.resolve(PageName), {
    ssr: false
});