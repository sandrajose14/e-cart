import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Button, Badge } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  //console.log(wishlistArray);
  return (
    <Navbar expand="lg" className=" bg-warning px-5 py-2 position-fixed w-100 top-0" style={{zIndex:"1"}}>
    <Container fluid>
      <Link to={'/'} style={{textDecoration:"none"}}><Navbar.Brand href="#" className='fs-2 text-white'><FontAwesomeIcon icon={faCartShopping} bounce className='me-3 fs-5 text-dark'/>E-CART</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
       <Nav className="ms-auto">
       <Link to={'/wishlist'}> <Button className='btn btn-outline-light rounded'><FontAwesomeIcon icon={faHeart} className='me-2 text-danger fs-5' />Wishlist  <Badge bg="secondary" className='ms-2 rounded'>{wishlistArray.length}</Badge></Button></Link>
        <Link to={'/cart'}><Button className='btn btn-outline-light rounded ms-1 me-5'><FontAwesomeIcon icon={faCartShopping} className='me-2 fs-5' /> <Badge bg="secondary" className='ms-2 rounded'>{cartArray.length}</Badge></Button></Link>
       </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header