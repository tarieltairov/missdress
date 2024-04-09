import { Button } from "antd";
import React, { ReactNode } from "react";
import styles from "./button.module.scss";

interface ButtonPropsType {
  children: string | ReactNode;
  disabled?: boolean;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  height?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const ButtonUI: React.FC<ButtonPropsType> = ({
  children,
  disabled,
  width,
  type,
  backgroundColor,
  height,
  onClick,
}) => {
  return (
    <Button
      htmlType={type}
      block
      type="primary"
      style={{ width, height, backgroundColor }}
      disabled={disabled}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonUI;
