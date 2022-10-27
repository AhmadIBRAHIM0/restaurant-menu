import React, {useState} from 'react';
import './App.css';
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Item from "./components/Item";
import items from './data/Data';

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories,] = useState(allCategories);

    const filterItems = (category: string) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };
    return (
        <>
            <Banner></Banner>
            <NavBar categories={categories} filterItems={filterItems}></NavBar>
            <Item items={menuItems}></Item>
        </>
    );
}

export default App;
