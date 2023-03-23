import React,{useContext} from "react";
import CartContext from "../Store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton =(props)=>{
const cartCntx = useContext(CartContext);
const amountofitems = cartCntx.items.length;
    return (
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
        
        </span>
        <span>Your Cart</span>
        {/* <span>{cartCntx.message}</span> */}
        <span className={classes.badge}>{amountofitems}</span>
       
        </button>
    )
}
export default HeaderCartButton;