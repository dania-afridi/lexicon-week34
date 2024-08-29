import React from "react";
import FoodList from "./FoodList";
import FoodProducts from "./Data/data";
import MenuItem from "./MenuItem";
const Menu = ({darkMode})=>{
    
    return(
        <div className="menu">
        <FoodList products={FoodProducts}/>
        <MenuItem props={darkMode}/>
        </div>
    );
}

export default Menu;