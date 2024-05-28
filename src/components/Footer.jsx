import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-warning p-4 text-dark'>
      <div className='row justify-content-center align-items-center mx-3'>
        <div className='col-md-3 col-sm-6 mb-4'>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: 'black', fontSize: '30px', marginRight: '5px' }} />{' '}
          <span style={{ color: 'black', fontSize: '30px' }}>E-cart</span>
          <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur possimus omnis, illo explicabo ab assumenda labore deleniti .</p>
        </div>
        <div className='col-md-2 col-sm-6 mb-4'>
          <h4 className='links mb-4'>Links</h4>
          <div className='' >
            <p><Link to={'/'} className='text-dark'>Landing page</Link></p>
            <p><Link to={'/wishlist'} className='text-dark'>Wishlist</Link></p>
            <p><Link to={'/cart'} className='text-dark'>Cart</Link></p>
          </div>
        </div>
        <div className='col-md-2 col-sm-6 mb-4'>
          <h4 className='links mb-4'>Guides</h4>
          <div className='' style={{ color: 'white' }}>
            <p className='text-dark'>React</p>
            <p className='text-dark'>React Bootstrap</p>
            <p className='text-dark'>Bootswatch</p>
          </div>
        </div>
        <div className='col-md-2 col-sm-6 mb-4'>
          <div className='contact'>
            <h4>Contact Us</h4>
           <div className='d-flex'>
              <input className='rounded px-3 p-1' style={{ border: 'none' }} type="text" placeholder='Enter your Email ID' />
              <button className='rounded px-2 bg-warning
               p-1 ms-2 px-3' style={{ border: 'none', color: 'black', border:'1px solid-black' }}>Subscribe</button>
           </div>
            <div className='icon fs-4 mt-2 ms-4' style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faInstagram} className='me-2' />
              <FontAwesomeIcon icon={faTwitter} className='me-2' />
              <FontAwesomeIcon icon={faLinkedin} className='me-2' />
              <FontAwesomeIcon icon={faFacebook} />
            </div>
          </div>
        </div>
        <div className='col-md-3 col-sm-12 mb-4'>
          <img src="" alt="" />
        </div>
      </div>
      <p className='mt-4 text-center'>Copyright © 2023, E-cart built with React</p>
    </div>
  );
}

export default Footer;
