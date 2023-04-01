"use client";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Jura } from "next/font/google";
import classNames from "classnames";
import Image from "next/image";

const jura = Jura({ subsets: ["latin"] });

const MobileMainSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <MainSectionWrapper>
          <div className="background-overlay w-full h-screen relative">
            <div className="absolute bottom-[100px] max-w-full left-5">
              <div className="relative">
                <h2 className="text-white font-hero text-[40px] font-medium">
                  CLB Súng Sơn Tây Hồ
                </h2>
                <div className="absolute left-[160px] -top-2 rotate-[225deg]">
                  <Image
                    src="/images/green-paint.png"
                    width={70}
                    height={244}
                    alt=""
                  />
                </div>

                <div className="absolute left-[30px] top-[30px] rotate-[225deg]">
                  <Image
                    src="/images/yellow-paint.png"
                    width={60}
                    height={244}
                    alt=""
                  />
                </div>
              </div>

              <p
                className={classNames(
                  jura.className,
                  "text-white text-lg font-medium my-2 pr-2"
                )}
              >
                Chúng tôi có 12 năm kinh nghiệm trong hoạt động vui chơi giải
                trí súng bắn sơn tại Việt Nam.
              </p>

              <a
                className="text-global-secondary font-hero font-medium float-right mr-10"
                style={{ fontSize: 25 }}
                href="tel:0911111121"
              >
                Đặt Sân Ngay
              </a>
            </div>
          </div>
        </MainSectionWrapper>
      )}
    </>
  );
};

const MainSectionWrapper = styled.section`
  background-image: url("/images/main_bg.jpg");
  background-position: right -150px top 0;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .background-overlay {
    background-color: transparent;
    background-image: linear-gradient(180deg, #010b002e 60%, #010b00 100%);
    opacity: 1;
    transition: all 0.3s, border-radius 0.3s, opacity 0.3s;
  }
`;

export default MobileMainSection;
