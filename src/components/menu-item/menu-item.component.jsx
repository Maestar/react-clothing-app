import React from "react";
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//remember that props.title is the same as {title}
//`url(${imageUrl})` : using javascript string literals to pass the imageurl prop into a css url
//`${size} menu-item` : using string lit again to dynamically assign a second class to this object!! SO COOL


const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
  
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

export default withRouter(MenuItem); //wrapping this with withRouter gives us access to the history prop above.