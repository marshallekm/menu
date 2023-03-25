import React from 'react'

export default function MenuCard({id, title, category, price, img, desc}){
  return(
  <div className="menu-body">
    <div className="menu-title">
      {title}
    </div>
    <div className= "menu-category">
      {category}
    </div>
    <div className="menu-price">
      {price}
    </div>
     <img src= {img} className= "picture" alt=""/>
    <div className="menu-description">
      {desc}
    </div>
  </div>
  )
}
