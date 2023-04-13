import React, { FunctionComponent } from "react";
import { Card, Rate } from "antd";
import NxImage from "next/image";
import Text from "../atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVestPatches } from "@fortawesome/free-solid-svg-icons";

const { Meta } = Card;

type PricingCardProps = {
  img?: string;
  title?: string;
  stars?: number;
};

const PricingCard: FunctionComponent<PricingCardProps> = ({
  title = "Pack 250K - 100 Viên Đạn",
  img = "/images/pricing/pricing01.jpg",
  stars = 5,
}) => {
  return (
    <div className="pricing-card">
      <div className="relative h-[247px]">
        <NxImage src={img} fill alt="Súng Sơn Tây Hồ" />
      </div>
      <div className="p-[30px]">
        <div>
          <Rate
            defaultValue={stars}
            allowClear={false}
            disabled
            allowHalf
            style={{ color: "#FF9529", fontSize: 16 }}
          />
        </div>
        <div>
          <Text className="text-[24px]">{title}</Text>
          <div className="flex justify-start items-center gap-x-2 mt-3">
            <FontAwesomeIcon
              icon={faVestPatches}
              style={{ color: "var(--e-global-color-accent)" }}
            />
            <Text>Full Giáp</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
