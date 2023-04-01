"use client";

import React, { FunctionComponent } from "react";
import classNames from "classnames";
import { Jura } from "next/font/google";
import Image from "next/image";

const jura = Jura({ subsets: ["latin"] });

const MobileHeader: FunctionComponent = () => {
  return (
    <header className="absolute top-0 px-5 w-full z-10">
      <section className="flex justify-center items-center w-full border-b-[1px] border-global-5174952 py-5">
        <Image
          src="/images/logo.png"
          width={120}
          height={100}
          alt="Logo Súng Sơn Hồ Tây"
        />
      </section>
    </header>
  );
};

export default MobileHeader;
