import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);

    const addItemToCartHandler = item => {
        updateItems([...items, item])
    }

    const removeItemFromCartHandler = id => { }

    const updateCartItems = (quantity) => {
        updateItems(quantity);
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        updateCartItems: updateCartItems,
        message: "Hii"
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider
