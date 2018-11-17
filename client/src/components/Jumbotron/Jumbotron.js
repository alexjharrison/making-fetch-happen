import React from 'react';
import './Jumbotron.css';

const Jumbotron = props => {
  return (
    <div className='jumbotron '>
      <header>
        <div className='jumbotext'>
          <h1>{props.text}</h1>
          <h3>{props.subtext}</h3>
        </div>
      </header>
      <img className='jumboimg' src={props.img} alt='jumbo' />
    </div>
  );
};

export default Jumbotron;
