import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
  const year=new Date();

  return(
  <footer className='main-footer' >
    <div className='insta' >
    <FontAwesomeIcon icon={faInstagram}  /><h3>Code Master</h3>
    </div>
    <div className='twiter'  >
      <FontAwesomeIcon icon={faTwitter} /><h3>Code Master</h3>
    </div>
    <div className='mail'  >
      <FontAwesomeIcon icon={faEnvelope} /><h3>Code Master</h3>
    </div>
    <p className='copy' >Copyright &copy; {year.getFullYear()}</p>
    
  </footer>
  )
}

export default Footer;
