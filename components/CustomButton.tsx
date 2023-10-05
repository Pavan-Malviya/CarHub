"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType}
      disabled={false}
      onClick={() => {
        handleClick;
      }}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`style`}>{title}</span>
    </button>
  );
};

export default CustomButton;
