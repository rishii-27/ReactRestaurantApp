import { useContext } from "react"
import Modal from "../UI/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../store/cart-context"

const Cart = props => {
    const cartCntx = useContext(CartContext);

    const cartItems = (<ul>
        {cartCntx.items.map((item) => (
            <li>name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
        ))}</ul>)

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose
            }>close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal >
}

export default Cart
