import React from "react";
import Text from "../../atoms/Text";
import pricingData from "../data/pricing.json";
import PricingCard from "../../molecules/PricingCard";

const MobilePricingSection = () => {
  return (
    <section className="flex justify-center items-center bg-global-background">
      <div className="mb-20">
        <div className="flex flex-col justify-center items-center">
          <Text className="text-[50px]" type="title">
            Bảng giá
          </Text>
          <Text className="text-lg">Các gói chơi áp dụng cho từng người</Text>
        </div>
        <div className="mt-10">
          {pricingData.map(({ img, stars, title }) => (
            <div key={title} className="mb-10">
              <PricingCard title={title} img={img} stars={stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobilePricingSection;
