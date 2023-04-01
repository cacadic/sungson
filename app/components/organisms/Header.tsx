"use client";

import { FacebookFilled, YoutubeFilled } from "@ant-design/icons";
import classNames from "classnames";
import { Jura } from "next/font/google";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const jura = Jura({ subsets: ["latin"] });

const Header = () => {
  const [isHoverTikTok, setIsHoverTikTok] = useState<boolean>(false);

  const TikTokIcon = () =>
    useMemo(
      () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="28"
          height="28"
          viewBox="0 0 50 50"
          fill={isHoverTikTok ? "#6B946A" : "white"}
        >
          <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
        </svg>
      ),
      []
    );

  return (
    <header className="absolute top-0 px-12 w-full z-10">
      <section className="flex justify-between items-center w-full border-b-[1px] border-global-5174952 py-5">
        <div>
          <h3 className={classNames(jura.className, "text-white text-lg")}>
            Call Us{" "}
            <a href="tel:0911111121" className="text-global-accent ml-2">
              09 111111 21
            </a>
          </h3>
        </div>
        <Image
          src="/images/logo.png"
          width={200}
          height={100}
          alt="Logo Súng Sơn Hồ Tây"
        />
        <div className="flex justify-center items-center gap-x-5 cursor-pointer">
          <h3 className={classNames(jura.className, "text-white text-lg")}>
            Social Media:
          </h3>
          <a
            href="https://www.facebook.com/sungbansontayho"
            target="_blank"
            className="text-global-secondary flex justify-center items-center"
          >
            <FacebookFilled style={{ fontSize: 25 }} />
          </a>
          <a
            href="https://www.youtube.com/watch?v=LLlSwjtoDUo"
            target="_blank"
            className="text-white hover:text-global-secondary flex justify-center items-center"
          >
            <YoutubeFilled style={{ fontSize: 25 }} />
          </a>
          <a
            href="https://www.tiktok.com/@sungbansontayho"
            target="_blank"
            className="text-white hover:text-global-secondary flex justify-center items-center"
            onMouseEnter={() => setIsHoverTikTok(true)}
            onMouseLeave={() => setIsHoverTikTok(false)}
          >
            <TikTokIcon />
          </a>
        </div>
      </section>
      {/* <section className="text-center flex justify-center items-center">
        <div className="max-w-[1290px] flex justify-center items-center h-[80px] gap-x-16">
          <span
            className={classNames(
              jura.className,
              "text-global-secondary text-[15px] font-bold"
            )}
          >
            Home
          </span>
          <span
            className={classNames(
              jura.className,
              "text-white text-[15px] font-bold cursor-pointer hover:text-global-secondary transition duration-300"
            )}
          >
            About
          </span>
          <span
            className={classNames(
              jura.className,
              "text-white text-[15px] font-bold cursor-pointer hover:text-global-secondary transition duration-300"
            )}
          >
            Games
          </span>
          <span
            className={classNames(
              jura.className,
              "text-white text-[15px] font-bold cursor-pointer hover:text-global-secondary transition duration-300"
            )}
          >
            Pages
          </span>
          <span
            className={classNames(
              jura.className,
              "text-white text-[15px] font-bold cursor-pointer hover:text-global-secondary transition duration-300"
            )}
          >
            Blogs
          </span>
          <span
            className={classNames(
              jura.className,
              "text-white text-[15px] font-bold cursor-pointer hover:text-global-secondary transition duration-300"
            )}
          >
            Contact
          </span>
        </div>
      </section> */}
    </header>
  );
};

export default Header;
