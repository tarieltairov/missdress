import { Button } from "antd";
import React, { ReactNode } from "react";
import styles from "./ordering.module.scss";

interface ButtonPropsType {
  children: string | ReactNode;
  disabled?: boolean;
  width?: string;
  type?: "button" | "submit" | "reset" | undefined;
  height?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const OrderingButton: React.FC<ButtonPropsType> = ({
  children,
  disabled,
  type,
  backgroundColor,
  height,
  width,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
      htmlType={type}
      block
      type="primary"
      style={{ backgroundColor, width, height }}
      disabled={disabled}
      className={styles.btn}
    >
      {children}
    </Button>
  );
};

export default OrderingButton;
