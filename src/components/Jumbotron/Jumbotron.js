import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => {
  return (
    <div className='jumbotron'>
      <h1 className='jumbotext'>{props.text}</h1>
      <img className='jumboimg' src={props.img} alt='jumbo' />
    </div>
  );
};

export default Jumbotron;
