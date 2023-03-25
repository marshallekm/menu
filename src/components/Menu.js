import React, {useState} from 'react'
import MenuCard from "./MenuCard.js"

export default function Menu({items}){
return (
<div className="menu-container">
 {items.map((item) => (
  <MenuCard
  id = {item.id}
  title = {item.title}
  category = {item.category}
  price= {item.price}
  img= {item.img}
  desc= {item.desc}
  />
 ))}
 </div>
 )
}
