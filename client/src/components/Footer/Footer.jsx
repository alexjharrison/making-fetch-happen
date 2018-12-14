import React from 'react';
import './footer.css';

const Footer = props => {
  return (
    <div className='footer'>
      <p>Making Fetch Happen LLC </p>
      <div className='footer-contact'>
        <p>(781) 613-0539</p>
        <a href='mailto:Shelley@MakingFetchHappenBoston.com'>
          Shelley@MakingFetchHappenBoston.com
        </a>
      </div>
      <p>© 2018</p>
      <div className='footer-images'>
        <img src={'img/kennelpro.jpg'} alt='kennel-pro' />
        <img src={'img/iaabc.jpg'} alt='iaabc' />
      </div>
    </div>
  );
};

export default Footer;
