"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/common/HowItWorks";
import KickBoxCard from "@/components/common/KickBoxCard";
import KickboxProcess from "@/components/KickBoxProcess";
import OurCommunity from "@/components/OurCommunity";
import IntrapreneurshipStories from "@/components/IntrapreneurshipStories";
import Faq from "@/components/Faq";
import Footer from "@/components/common/Footer";
import BackToTop from "@/components/common/BackToTop";

export default function Page() {
  useEffect(() => {
    AOS.init({
      once: true, 
      duration: 800, 
    });
  }, []);

  return (
    <> 
      <Hero />
      <KickBoxCard/>
      <HowItWorks/>
      <KickboxProcess/>
      <OurCommunity/>
      <IntrapreneurshipStories/>
      <Faq/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
