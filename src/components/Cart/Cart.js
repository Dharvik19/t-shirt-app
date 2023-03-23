import React, { useState, useContext, useEffect } from "react";
import productsArr from "../Products/Products";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";
import { Button } from "react-bootstrap";
import axios from "axios";
const Cart =(props)=>{
    const cartcxt = useContext(CartContext);
    cartcxt.sQuantity = 30;
    const [stock, setStock ] = useState(cartcxt.sQuantity);
    const [price, setPrice] = useState(0);
    const priceHandler = () => {
    let ans = 0;
    cartcxt.items.map((item) => (ans = ans + Number(item.amount) *Number( item.price)));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
    // const ITemRemoveHandler = (id) => {
    //     const arr = cartcxt.items.filter((item) => item.title !== id);
    //     cartcxt.removeItem(arr);
    //     setStock(stock+1);
    //   };
    const ITemRemoveHandler = (item) => {
        // const arr = cartctx.items.filter((item) => item.title != item.title);
        cartcxt.removeItem(item);
         const cartid = item._id 
         console.log(cartid)
        axios
        .delete(  `https://crudcrud.com/api/4691b99d1ea94b1ab7c06f084b54d749/cart/${cartid}`)
      };
    return(
        <>
        
        <div className={classes.cart}>
        <Modal>
         <h1>
            This is Cart
         </h1>
        {cartcxt.items.map((item)=>(
            <div key={item.title}> 
                <h3>{item.title}</h3>
                <p>{item.size}</p>
                <p>{item.amount}</p>
                <div className="row">
                <Button className="col-1 mx-1" onClick={()=>ITemRemoveHandler(item)} variant="dark">X</Button>
                {/* <Button className="col-1 mx-1" variant="dark">+</Button>
                <Button className="col-1 mx-1" variant="dark">-</Button> */}
                </div>
                <hr/>
            </div>
            
        ))}
        <div>
            <h3>{price}</h3>
        </div>
        <Button variant="danger"className="px-5" onClick={props.onClose}>close</Button>
        </Modal>
        </div>
        </>
    )
}
export default Cart;