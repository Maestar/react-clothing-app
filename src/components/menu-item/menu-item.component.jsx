import React from "react";
import './menu-item.styles.scss';

//remember that props.title is the same as {title}
//`url(${imageUrl})` : using javascript string literals to pass the imageurl prop into a css url
//`${size} menu-item` : using string lit again to dynamically assign a second class to this object!! SO COOL
const MenuItem = ({title, imageUrl, size}) => (
  <div className={`${size} menu-item`}> 
  
    <div 
    className="background-image"
    style={{
        backgroundImage: `url(${imageUrl})` 
    }} >

    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>
);

export default MenuItem;