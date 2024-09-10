import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Footer from "@/src/layout/footers/footer";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Blog Details" page_title="Blog Details" />
       
      </main>
     <Footer/>
    </>
  );
};

export default BlogDetails;
