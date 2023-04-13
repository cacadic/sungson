import React, { FunctionComponent } from "react";
import Header from "../organisms/Header";
import MainSection from "../organisms/MainSection";
import PricingSection from "../organisms/PricingSection";

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <MainSection />
      <PricingSection />
    </>
  );
};

export default HomeTemplate;
