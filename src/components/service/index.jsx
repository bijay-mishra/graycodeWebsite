import React from "react"; 
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import IndustryArea from "@/src/common/industry-area";
import Footer from "@/src/layout/footers/footer";

const Sevice = () => {
  return (
    <>
      <HeaderOne />
      <main>
            <Breadcrumb top_title="Our Services" page_title="Service" />
            <ServiceArea />
            <IndustryArea service={true} />
      </main>
      <Footer/>
    </>
  );
};

export default Sevice;
