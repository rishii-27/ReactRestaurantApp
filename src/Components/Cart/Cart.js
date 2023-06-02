import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCntx = useContext(CartContext);

    const handleIncreaseQuantity = (itemId) => {
        cartCntx.updateCartItems((prevItems) => {
            // Find the item in the previous items array
            const itemIndex = prevItems.findIndex((item) => item.id === itemId);

            // Create a shallow copy of the previous items array
            const updatedItems = [...prevItems];

            // Increase the quantity of the item by 1
            updatedItems[itemIndex].quantity += 1;

            // Return the updated items array
            return updatedItems;
        });
    };

    const handleDecreaseQuantity = (itemId) => {
        cartCntx.updateCartItems((prevItems) => {
            // Find the item in the previous items array
            const itemIndex = prevItems.findIndex((item) => item.id === itemId);

            // Create a shallow copy of the previous items array
            const updatedItems = [...prevItems];

            // Decrease the quantity of the item by 1
            updatedItems[itemIndex].quantity -= 1;

            // If the quantity reaches 0, remove the item from the array
            if (updatedItems[itemIndex].quantity === 0) {
                updatedItems.splice(itemIndex, 1);
            }

            // Return the updated items array
            return updatedItems;
        });
    };


    const cartItems = (
        <ul>
            {cartCntx.items.map((item) => (
                <li key={item.id}>
                    <div>
                        <span>Name: {item.name}</span>
                        <span>Price: {item.price}</span>
                    </div>
                    <div>
                        <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                        <span>Quantity: {item.quantity}</span>
                        <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                    </div>
                </li>
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
