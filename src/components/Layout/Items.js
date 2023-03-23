import React, { useState, useContext, useEffect } from 'react';
import productsArr from '../Products/Products';
import CartContext from '../Store/cart-context';
import { Button, Card, Container } from 'react-bootstrap';
const Item = ()=>{
    const cartcxt = useContext(CartContext);
   
   
    
    return(
        <Container style={{marginTop:"6rem"}}>
         <Card className='p-3'>
         <Card.Title style={{fontSize:"2rem"}}>   
            The Store
         </Card.Title>
         <hr/>
         <Card.Body>
         {productsArr.map((item) => (
          <div key={item.title}>
          <li style={{fontSize:"1.8rem"}}>{item.title}</li>
          <li style={{fontSize:"1.6rem"}}>  {item.price}</li>
          <div className='row'>
            
          <span className='col-12'>
            <Button variant=' disabled' style={{width:"3rem"}} className='m-3'  >{item.small}</Button>
            <Button variant=' disabled' style={{width:"3rem"}} className='m-3' >{item.medium}</Button>
            <Button variant=' disabled' style={{width:"3rem"}} className='m-3' >{item.large}</Button>
          </span>
          <span className='col-12'>
            <Button variant='dark' style={{width:"3rem"}} className='m-3' onClick={()=> cartcxt.addItem({...item,amount:1,id:Math.random().toString(36),size:"S "}) }>S</Button>
            <Button variant='dark' style={{width:"3rem"}} className='m-3' onClick={()=> cartcxt.addItem({...item,amount:1,id:Math.random().toString(36),size:"M "}) }>M</Button>
            <Button variant='dark' style={{width:"3rem"}} className='m-3' onClick={()=> cartcxt.addItem({...item,amount:1,id:Math.random().toString(36),size:"L "}) }>L</Button>
          </span>
          </div>
          
          </div>
          
        ))}
        
        </Card.Body>
       </Card>
        </Container>
    )
         }
export default Item; 