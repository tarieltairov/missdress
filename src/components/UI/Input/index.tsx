import { Input } from "antd";
import React from "react";
import styles from "./input.module.scss";

interface InputPropsType {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  background?: string;
  height?: string;
}

const InputUI: React.FC<InputPropsType> = ({
  placeholder,
  onChange,
  value,
  background,
  height,
  ...rest
}) => {
  return (
    // <Input
    //   ref={ref}
    //   className={styles.input}
    //   placeholder={placeholder}
    //   onChange={onChange}
    //   value={value}
    //   style={{ background, height }}
    // />
    <input
      {...rest}
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{ background, height }}
    />
  );
};

export default InputUI;
