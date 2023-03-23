import { useState,useContext,useEffect } from "react";
import CartContext from "./cart-context";
import axios from 'axios'
const CartProvider = (props) => {
   
  const [cart, setCart] = useState([]);
  
  const addItemToCartHandler = (item) => {
    let arr = [...cart];
    let isPresent = false;
    cart.forEach((product,index) => {
      if (item.title === product.title) {
        arr[index].amount = Number(item.amount)+Number(arr[index].amount)
        
        arr[index].size = arr[index].amount  + arr[index].size;
        isPresent = true;
        let {_id,...updateData}= arr[index];

        axios 
        .put(
          `https://crudcrud.com/api/4691b99d1ea94b1ab7c06f084b54d749/cart/${arr[index]._id}`,updateData
        ).then((res)=>{
          console.log(res.data,'Successfull')
        })
        .catch((error)=>{
          alert(error)
        })
        return 
      }
    });
    if (isPresent===false) {
      axios
      .post(
        `https://crudcrud.com/api/4691b99d1ea94b1ab7c06f084b54d749/cart`,{...item,amount:1})
      
      
   
    .then((res)=>{
      arr.push(res.data);
      console.log(res.data,"Successfull")
      setCart(arr)
    })
     .catch((error)=>{
      alert(error)
     })

    }
  }  
  
  const  IncreaseAndDecrease = (item,d) => {
    let ind = -1;
    cart.forEach((data,index)=>{
        if(data.title===item.title){
            ind =index
        }
    })
    const tempArr = cart;
    tempArr[ind].amount = Number(tempArr[ind].amount) + d;
    if(tempArr[ind].amount===0){
        tempArr[ind].amount =1;
    }
    setCart([...tempArr])
  };
  const removeItemHandler = (item)=>{
    let removeitem = cart.findIndex((item)=>item.id===item);
  
    const arr = [...cart];
    
    const updateItems = arr.splice(removeitem,1)
    console.log(removeitem,arr,updateItems)
    setCart(arr)
    }
    useEffect(()=>{
        axios
        .get(
          `https://crudcrud.com/api/4691b99d1ea94b1ab7c06f084b54d749/cart`
        ).then((res)=>{
            setCart(res.data)
        })
      },[])
  const cartcontext = {
    items: cart,
    incAndDecFun :IncreaseAndDecrease,
    totalAmount: cart.length,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;