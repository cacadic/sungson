import styled from "@emotion/styled";
import classNames from "classnames";
import { Jura } from "next/font/google";
import React, { CSSProperties, FunctionComponent, ReactNode } from "react";

const jura = Jura({ subsets: ["latin"], variable: "--font-jura" });

type TextProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  defaultWhite?: boolean;
  type?: type;
  onClick?: (e?: any) => void;
};

type type = "title" | "body";

const Text: FunctionComponent<TextProps> = ({
  className,
  style,
  children,
  type = "body",
  defaultWhite = true,
  onClick,
}) => {
  return type === "title" ? (
    <h2
      className={classNames(
        `inline-block text-medium ${className ?? ""} font-hero`,
        {
          "cursor-pointer": onClick,
          "text-white": defaultWhite,
        }
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </h2>
  ) : (
    <span
      className={classNames(
        jura.className,
        `inline-block text-medium ${className ?? ""}`,
        {
          "cursor-pointer": onClick,
          "text-white": defaultWhite,
        }
      )}
      style={{ ...style }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Text;
