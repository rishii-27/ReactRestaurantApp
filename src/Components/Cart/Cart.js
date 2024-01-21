import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import classs from "./CartItem.module.css";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const handleIncreaseQuantity = (itemIndex) => {
    cartCntx.updateCartItems((prevItems) => {
      // Create a shallow copy of the previous items array
      const updatedItems = [...prevItems];

      // Increase the quantity of the item at the specified index by 1
      updatedItems[itemIndex].quantity += 1;

      // Return the updated items array
      return updatedItems;
    });
  };

  const handleDecreaseQuantity = (itemIndex) => {
    cartCntx.updateCartItems((prevItems) => {
      // Create a shallow copy of the previous items array
      const updatedItems = [...prevItems];

      // Decrease the quantity of the item at the specified index by 1
      updatedItems[itemIndex].quantity -= 1;

      // If the quantity reaches 0, remove the item from the array
      if (updatedItems[itemIndex].quantity === 0) {
        updatedItems.splice(itemIndex, 1);
      }

      // Return the updated items array
      return updatedItems;
    });
  };

  let totalAmount = 0;

  const cartItems = (
    <ul>
      {cartCntx.items.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;

        return (
          <li key={index} className={classs["cart-item"]}>
            <div>
              <h2>{item.name}</h2>
              <span className={classs.price}>${item.price}</span>
            </div>
            <div>
              <button onClick={() => handleDecreaseQuantity(index)}>-</button>
              <span>
                <b>Quantity:</b> {item.quantity}
              </span>
              <button onClick={() => handleIncreaseQuantity(index)}>+</button>
            </div>
            <div>
              <b>Total:</b>
              <span> ${itemTotal.toFixed(2)}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>
          <b style={{ marginLeft: 40 }}>Total Amount:</b>
        </span>
        <span>{totalAmount.toFixed(2)}</span>
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
