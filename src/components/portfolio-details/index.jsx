import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import Footer from "@/src/layout/footers/footer";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="IT Advisor" page_title=" Portfolio Details" />
      </main>
      <Footer/>
    </>
  );
};

export default PortfolioDetails;
