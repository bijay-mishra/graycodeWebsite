import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FeatureArea from '../homes/home/feature-area';
import BlogArea from '@/src/common/blog-area';
import AboutArea from '../homes/home/about-area';
import Footer from '@/src/layout/footers/footer';

const About = () => {
    return (
        <>
          <HeaderOne />  
          <main>
            <Breadcrumb top_title="Our Company"  page_title="Our Company" />
            <AboutArea about={true} /> 
            <FeatureArea about={true} />          
            <BlogArea />
          </main>
          <Footer/>
        </>
    );
};

export default About;