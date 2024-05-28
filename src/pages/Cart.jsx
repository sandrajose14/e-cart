import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const [total,setTotal]=useState(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  //function to access the cart state
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.id)); // Dispatch remove action
  }
  //to get total
  
const getTotal =()=>{
  if(cartArray.length>0){
    setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
// setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2,0))
}
useEffect(()=>{
  getTotal()
},[cartArray])
// console.log(total);
//function to checkout
const checkout = ()=>{
  alert('your order placed succesfully')
  dispatch(emptyCart())
  navigate('/')
}
const home = ()=>{
  navigate('/')
}
  return (
    <div className='mt-5'>
     <h1 style={{letterSpacing:'3px'}} className='text-center mt-5  
      text-danger'>CART</h1>
      { cartArray?.length > 0 ?

        <div className='row mt-5'>
        <div className='col-md-8 p-5 d-flex justify-content-center align-items-center'style={{overflowX:'auto'}}>
        <table className='table table-shadow'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartArray.map((product,index)=>(
      <tr>
 <td>{index+1}</td>
 <td>{product.title}</td>
 <td><img src={product.thumbnail} alt="" height={'200px'} width={'200px'} /></td>
 <td>$ {product.price}</td>
 <td><button  onClick={() => handleRemoveFromCart(product)} className='btn btn-danger text-white'><FontAwesomeIcon icon={faTrash} /></button></td>
</tr>
          ))}
         
        </tbody>
      </table>
        </div>
        <div className='col-md-4 p-5 d-flex justify-content-center align-items-center'>
          <div className='shadow p-4'>
            <h3 className='text-warning mb-4'>Cart Summary</h3>
            <h5>Total number of product : <span className='text-warning'>{cartArray.length}</span></h5>
            <h5>Total Price: <span className='text-warning'>${total}</span></h5>
            <button onClick={checkout} className='btn btn-success mt-4 w-100'>Checkout</button>
          </div>
        </div>
  
      </div>:  <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyVcPuaC_ZDNRM7qSn7G2pD1Q8NAZpbVQJ9VguI3vlw&s" alt="" height={'250px'}/>
      <button onClick={home} className='btn btn-success mt-5 mb-3'>Go to Home</button>
    </div>
      }
    </div>
  )
}

export default Cart