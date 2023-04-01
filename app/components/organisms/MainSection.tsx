"use client";

import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Jura } from "next/font/google";
import classNames from "classnames";
import Image from "next/image";

const jura = Jura({ subsets: ["latin"] });

const MainSection = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <MainSectionWrapper>
          <div className="background-overlay w-full h-screen relative">
            <div className="absolute bottom-[220px] max-w-[648px] left-[12%]">
              <div className="relative">
                <h2 className="text-white font-hero text-[80px] font-medium">
                  CLB Súng Sơn Tây Hồ
                </h2>
                <div className="absolute left-[326px] top-0 rotate-[225deg]">
                  <Image
                    src="/images/green-paint.png"
                    width={100}
                    height={244}
                    alt=""
                  />
                </div>

                <div className="absolute left-[60px] top-[70px] rotate-[225deg]">
                  <Image
                    src="/images/yellow-paint.png"
                    width={100}
                    height={244}
                    alt=""
                  />
                </div>
              </div>

              <p
                className={classNames(
                  jura.className,
                  "text-white text-lg font-medium mt-5 mb-5"
                )}
              >
                Chúng tôi có 12 năm kinh nghiệm trong hoạt động vui chơi giải
                trí súng bắn sơn tại Việt Nam.
              </p>

              <a
                className="text-global-secondary font-hero font-medium"
                style={{ fontSize: 30 }}
                href="tel:0911111121"
              >
                Đặt Sân Ngay -
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
  background-position: center;
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

export default MainSection;
