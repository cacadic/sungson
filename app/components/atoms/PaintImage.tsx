import classNames from "classnames";
import Image from "next/image";
import React, { CSSProperties } from "react";

type type = "green" | "yellow" | "brown";

type PaintProps = {
  className?: string;
  style?: CSSProperties;
  type?: type;
};

const PaintGreen = ({ className, style }: PaintProps) => {
  return (
    <div
      className={classNames(`absolute ${className ?? ""}`)}
      style={{ ...style }}
    >
      <Image
        src="/images/green-paint.png"
        fill
        alt=""
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

const PaintYellow = ({ className, style }: PaintProps) => {
  return (
    <div
      className={classNames(`absolute ${className ?? ""}`)}
      style={{ ...style }}
    >
      <Image
        src="/images/yellow-paint.png"
        fill
        style={{ objectFit: "contain" }}
        alt=""
      />
    </div>
  );
};

const PaintBrown = ({ className, style }: PaintProps) => {
  return (
    <div
      className={classNames(`absolute ${className ?? ""}`)}
      style={{ ...style }}
    >
      <Image
        src="/images/brown-paint.png"
        fill
        style={{ objectFit: "contain" }}
        alt=""
      />
    </div>
  );
};

const PaintImage = ({ type = "green", ...props }: PaintProps) => {
  switch (type) {
    case "yellow":
      return <PaintYellow {...props} />;
    case "brown":
      return <PaintBrown {...props} />;
    default:
      return <PaintGreen {...props} />;
  }
};

export default PaintImage;
