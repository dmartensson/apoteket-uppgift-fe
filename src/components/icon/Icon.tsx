import Trash from "./assets/trash.svg";
import Basket from "./assets/basket.svg";
import styles from "./icon.module.css";
import { ComponentPropsWithRef } from "react";

interface IconProps extends ComponentPropsWithRef<"i"> {
  name: "Trash" | "Basket";
}

const iconMapper = {
  Trash: Trash,
  Basket: Basket,
};

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <i className={styles.icon} {...props}>
      <img src={iconMapper[name]} />
    </i>
  );
};
