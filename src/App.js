import React, {useState} from 'react';
import Menu from './components/Menu.js'
import items from './data.js'
import './App.css';
import Category from './components/Category.js'

const allCat = ['All', ...new Set(items.map((item)=> item.category))]
console.log(allCat)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categoryItems, setCategoryItems] = useState(allCat);


  const filterCategory = (category) => {
  if(category === 'All') {
    return setMenuItems(items)}
  const newCategory = items.filter((item) => item.category === category);
  setMenuItems(newCategory);
  }

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Menu</h2>
          <Category category ={categoryItems} filterCategory={filterCategory}/>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
