import React from "react";

const MenuItem = ({props})=> {
    return(
    <div className= "menu-items">
       { /*<img src={require(`../images/${props.image}`)}  alt={props.description} className="item-image"/>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>SEK {props.price}</p>
        <button>Add to Order</button>*/}
        <div className="menu-item">
            <img src={require(`../images/burger.jpeg`)}  alt="A delicious burger with all fixings." className="item-image"/>
            <h3>Burger</h3>
            <p>A delicious burger with all fixings.</p>
            <p>SEK 79.99</p>
            <button className="order-btn">Add to Order</button>
        </div>
        <div className ="menu-item">
            <img src={require(`../images/pizza.jpg`)}  alt="Classic pizza with your favorite toppings." className="item-image"/>
            <h3>Pizza</h3>
            <p>Classic pizza with your favorite toppings.</p>
            <p>SEK 99.99</p>
            <button className="order-btn">Add to Order</button>
        </div>
        <div className="menu-item">
            <img src={require(`../images/fries.jpg`)}  alt="Crispy golden fries served hot and fresh." className="item-image"/>
            <h3>Fries</h3>
            <p>Crispy golden fries served hot and fresh." </p>
            <p>SEK 59.99</p>
            <button className="order-btn">Add to Order</button>
        </div>
        
    </div>
);
};

export default MenuItem;