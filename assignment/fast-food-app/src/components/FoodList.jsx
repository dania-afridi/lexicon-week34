import React from "react";
import MenuItem from "./MenuItem";

const FoodList = ({foodItems})=>{
    return(
        <div className="food-list">
        {
            (foodItems && foodItems.length >0 )? (foodItems.map((item)=>(
                <MenuItem key={item.id} image={item.image} name={item.name} description={item.description} price={item.price}
                />
            ))) :  (<p>No items available.</p>)
        }
        </div>
    );
};

export default FoodList;