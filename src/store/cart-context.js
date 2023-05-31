import React from 'react'

const CartContext = React.createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    message: "Hii"
});

export default CartContext;