import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../components/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { addToCart } from '../redux/slice/cartSlice';
function Home() {
  const dispatch = useDispatch()
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);
  return (
    <Row className='p-5 mt-5'>
     { data?.length > 0 ? 
     data.map(product=>(
      <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '100%' }} className='rounded shadow'>
      <Card.Img variant="top" src={product.thumbnail} height={'200px'} />
      <Card.Body>
        <Card.Title className='text-white'>{product.title.slice(0,16)}</Card.Title>
        <Card.Text>
        {product.description.slice(0,50)}...
          <p className='fs-5 mt-3 text-white'><b>Price: ₹ {product.price}</b></p>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button varient='outline-danger' style={{border:'1px solid grey'}} onClick={()=>dispatch(addToWishlist(product))}><FontAwesomeIcon icon={faHeart} className='text-danger fs-5' /></Button>
          <Button onClick={()=>dispatch(addToCart(product))}   varient='outline-success' style={{border:'1px solid grey'}}><FontAwesomeIcon icon={faCartShopping} className='fs-5' /></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>

     ))
    : <p className='text-warning fs-5 mt-3'>Loading...</p> }
    </Row>
  )
}

export default Home