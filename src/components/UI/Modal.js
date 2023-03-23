import { Fragment } from "react";
import  ReactDOM  from "react-dom";
import classes from './Modal.module.css'
const BackDrop = props=>{
    return(<div className={classes.backdrop} onClick={props.onClose}/>)
}
const ModalOverly =props=>{
    return(<div className={classes.modal}>{/*class.modal*/ }
        {/* {added classes . content} */}
        <div className={classes.content}>   
            {props.children}
        </div>
    </div>)
}
const Modal = props =>{
    const portalElem = document.getElementById('overlays');    
    return(
            <Fragment>
              {ReactDOM.createPortal(<ModalOverly>{props.children}</ModalOverly>, portalElem)}
              {ReactDOM.createPortal(<BackDrop/>, portalElem)}
            </Fragment>
        )
}

export default Modal;