import React from "react";
import MobileHeader from "../organisms/mobile/MobileHeader";
import MobileMainSection from "../organisms/mobile/MobileMainSection";
import MobilePricingSection from "../organisms/mobile/MobilePricingSection";

const MobileHomeTemplate = () => {
  return (
    <>
      <MobileHeader />
      <MobileMainSection />
      <MobilePricingSection />
    </>
  );
};

export default MobileHomeTemplate;
