import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ pageName }) => {
  return (
    <div className='header'>
      <Link to='/making-fetch-happen'>
        <img className='logo' src={'img/fetch_purple.png'} alt='site logo' />
      </Link>
      <nav>
        <ul>
          <li
            className={
              window.location.pathname.split('/').reverse()[0] ===
              'in-home-training'
                ? 'active'
                : 'not-active'
            }
          >
            <Link className='link' to='/in-home-training'>
              IN-HOME TRAINING
            </Link>
          </li>
          <li
            className={
              window.location.pathname.split('/').reverse()[0] === 'register'
                ? 'active'
                : 'not-active'
            }
          >
            <Link className='link' to='/register'>
              REGISTER
            </Link>
          </li>
          <li
            className={
              window.location.pathname.split('/').reverse()[0] === 'about'
                ? 'active'
                : 'not-active'
            }
          >
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li
            className={
              window.location.pathname.split('/').reverse()[0] === 'contact'
                ? 'active'
                : 'not-active'
            }
          >
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
