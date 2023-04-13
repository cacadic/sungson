"use client";

import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import HomeTemplate from "../templates/HomeTemplate";
import MobileHomeTemplate from "../templates/MobileHomeTemplate";
import { isMobile } from "react-device-detect";

const HomePage: NextPage = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div style={{ opacity: domLoaded ? 1 : 0 }}>
      {isMobile ? <MobileHomeTemplate /> : <HomeTemplate />}
    </div>
  );
};

export default HomePage;
