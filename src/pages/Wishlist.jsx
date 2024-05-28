import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  // console.log(wishlistArray);

  //cart and removefrom wishlist
  const handleCart =(item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }

  //console.log(handleCart);
  const home=()=>{
    navigate('/')
  }
  return (
    <div className='mt-5'>
      <h1 style={{letterSpacing:'3px'}} className='text-center mt-5 
      text-danger'>WISHLIST</h1>
     {wishlistArray?.length > 0 ?
      <Row className='p-5'>
      { wishlistArray.map((product)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '100%' }} className='rounded'>
        <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
        <Card.Body>
          <Card.Title className='text-white'>{product.title.slice(0,16)}</Card.Title>
          <Card.Text>
          {product.description.slice(0,50)}...
            <p className='fs-5 mt-3 text-white'><bdo>Price : $ 80</bdo></p>
          </Card.Text>
          <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(removeFromWishlist(product.id))} varient='outline-danger' style={{border:'1px solid grey'}}><FontAwesomeIcon icon={faTrash} className='text-danger fs-5' /></Button>
            <Button onClick={()=>handleCart(product)} varient='outline-success' style={{border:'1px solid grey'}}><FontAwesomeIcon icon={faCartShopping} className='fs-5' /></Button>
          </div>
        </Card.Body>
      </Card>
        </Col>
      ))
        }
    </Row>
    :
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://evyapari.com/static/media/empty_wishlist.4b6281beecbb34e00bf3.png" alt="" height={'250px'}/>
      <button onClick={home} className='btn btn-success mb-5'>Go to Home</button>
    </div>}
   
    </div>
  )
}

export default Wishlist