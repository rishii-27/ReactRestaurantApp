import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";


const Brackdrop = props => {
    return <div className={classes.backdrop} />
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

// Added overlays above root
const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Brackdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default Modal;