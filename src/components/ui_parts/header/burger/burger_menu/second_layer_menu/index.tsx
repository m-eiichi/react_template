import { type ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./second_layer_menu.module.css";

export const SecondLayerMenu = (props: any): ReactElement => {
  return (
    <div className={Styles.menu__second__layer}>
      <ul
        className={`${props.active === 1 ? Styles.isActive : ""}`}
        data-menu-id="1"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="style-rules/colors">Colors</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="style-rules/spaces">Spaces</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="style-rules/images">Images</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 2 ? Styles.isActive : ""}`}
        data-menu-id="2"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="ui-elements/button">Button</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-elements/headline">Headline</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-elements/input-element">Input</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 3 ? Styles.isActive : ""}`}
        data-menu-id="3"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="ui-parts/dialog">Dialog</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-parts/table">Table</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="ui-parts/edit">Edit</Link>
        </li>
      </ul>
      <ul
        className={`${props.active === 4 ? Styles.isActive : ""}`}
        data-menu-id="4"
        onMouseOver={props.handleMouseOver}
        onMouseLeave={props.handleMouseLeave}
      >
        <li onClick={props.onClick}>
          <Link to="project/react_table">ReactTable</Link>
        </li>
        <li onClick={props.onClick}>
          <Link to="project/react_table_swr">ReactTableSwr</Link>
        </li>
      </ul>
    </div>
  );
};
