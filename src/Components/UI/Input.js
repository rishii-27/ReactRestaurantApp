import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>

            {/* Spread all properties of props.input as separate attributes for the input element */}
            <input {...props.input} />
        </div>
    );
};

export default Input;