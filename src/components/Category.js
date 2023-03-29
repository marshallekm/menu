import React from 'react'

export default function Category({category, filterCategory}){
  console.log(category)
  return(
    <div className="buttons">
      {category.map((category)=>
      <button className="button" onClick={()=> filterCategory(category)}>{category}</button>)}
     </div>
  )
}
