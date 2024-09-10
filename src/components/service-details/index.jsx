import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Footer from "@/src/layout/footers/footer";

const ServiceDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Machine Learning" page_title="Service Details" />
      </main>
      <Footer/>
    </>
  );
};

export default ServiceDetails;
