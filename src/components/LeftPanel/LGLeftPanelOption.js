import React from "react";
import "./leftpanel.scss";

export default function LGLeftPanelOption({ text, Icon, active }) {
  return (
    <div className={`leftpanel-option  ${active && "leftpanel-option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}