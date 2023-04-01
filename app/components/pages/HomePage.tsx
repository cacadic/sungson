"use client";

import { NextPage } from "next";
import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import HomeTemplate from "../templates/HomeTemplate";
import MobileHomeTemplate from "../templates/MobileHomeTemplate";

const HomePage: NextPage = () => {
  const breakpoints = useBreakpoint();
  return <>{breakpoints.lg ? <HomeTemplate /> : <MobileHomeTemplate />}</>;
};

export default HomePage;
