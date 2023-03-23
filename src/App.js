import React,{useState} from "react";
import Headerc from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Item from "./components/Layout/Items";
import CartProvider from "./components/Store/CartProvider";
import {Button} from 'react-bootstrap'
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler=()=>{
    setCartIsShown(true);
    console.log("czrt")
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider> 
      
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Headerc onShow={showCartHandler}/> 
      <Item/>
      
    </CartProvider>
  );
}

export default App;
