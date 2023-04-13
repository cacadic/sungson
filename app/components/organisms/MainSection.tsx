import React from "react";
import { Jura } from "next/font/google";
import Text from "../atoms/Text";
import PaintImage from "../atoms/PaintImage";
import styled from "styled-components";

const jura = Jura({ subsets: ["latin"] });

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <div className="background-overlay w-full h-screen relative">
        <div className="absolute bottom-[220px] max-w-[648px] left-[12%]">
          <div className="relative">
            <Text type="title" className="text-[80px]">
              CLB Súng Sơn Tây Hồ
            </Text>
            <PaintImage className="left-[326px] w-[100px] h-[200px] -top-10" />
            <PaintImage
              type="yellow"
              className="left-[65px] w-[100px] h-[200px] top-2"
            />
          </div>

          <Text className="text-lg mt-5 mb-5">
            Chúng tôi có 12 năm kinh nghiệm trong hoạt động vui chơi giải trí
            súng bắn sơn tại Việt Nam.
          </Text>

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
  );
};

const MainSectionWrapper = styled.section`
  background-image: url("/images/main_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default MainSection;
