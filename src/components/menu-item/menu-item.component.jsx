import React from "react";
import './menu-item.styles.scss';

//remember that props.title is the same as {title}
const MenuItem = ({title, imageUrl}) => (
  <div style={{
      backgroundImage: `url(${imageUrl})`
  }} className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>
);

export default MenuItem;