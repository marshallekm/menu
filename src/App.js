import React, {useState} from 'react';
import Menu from './components/Menu.js'
import items from './data.js'
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Menu</h2>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
