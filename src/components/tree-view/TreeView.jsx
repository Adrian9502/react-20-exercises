import React from "react";
import MenuList from "./MenuList";
import "./styles.css";
export default function TreeView({ menus = [] }) {
  return (
    <li className="tree-view-container">
      <h2 className="text-light p-3">Tree View Menu Items</h2>
      <MenuList list={menus} />
    </li>
  );
}
