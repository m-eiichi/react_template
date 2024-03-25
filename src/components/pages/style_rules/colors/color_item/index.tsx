import { type ReactElement } from "react";

import { PropsType } from "./types";
import Styles from "./color_item.module.css";

export const ColorItem = (props: PropsType): ReactElement => {
  const color_itme = [
    Styles.color_item,
    props.dark == true ? Styles.is_dark : "",
    props.solid == true ? Styles.is_solid : "",
  ];
  const color__block = [
    Styles.color__block,
    props.semantic
      ? Styles[`color${props.semantic}`]
      : Styles[`color${props.primitive}`],
  ];
  return (
    <div className={color_itme.join(" ")}>
      <div className={color__block.join(" ")}></div>
      <div className={Styles.text__block}>
        <p className={Styles.title}>{props.title}</p>
        <p className={Styles.primitive}>{props.primitive}</p>
        {props.semantic && <p className={Styles.semantic}>{props.semantic}</p>}
      </div>
    </div>
  );
};
