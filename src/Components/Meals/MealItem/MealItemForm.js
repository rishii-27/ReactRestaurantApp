import { useState, useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
    const cartContext = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const quantityChangeHandler = (event) => {
        setQuantity(+event.target.value);
    };

    const addItemToCart = (event) => {
        event.preventDefault();
        cartContext.addItem({ ...props.item, quantity: quantity });
        console.log(cartContext);
    };

    return (
        <form className={classes.form}>
            <Input
                label="Quantity"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    value: quantity,
                    onChange: quantityChangeHandler,
                }}
            />
            <button onClick={addItemToCart}>+ Add</button>
        </form>
    );
};

export default MealItemForm;
