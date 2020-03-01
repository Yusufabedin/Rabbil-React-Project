import React from 'react';
import styles from '../Mycss.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Hello = props => {
  const TextStyle = {
    backgroundColor: 'black',
    color: 'red',
    fontSize: '30px'
  };
  const DoThis = a => {
    alert(a);
  };
  return (
    <div>
      <button
        className='btn btn-primary m-5'
        onClick={DoThis.bind(this, 'I am Yusuf')}
      >
        Click Me
      </button>
      <h2
        style={{
          backgroundColor: 'blue',
          color: 'white',
          height: '50px',
          margin: '40px',
          padding: '10px'
        }}
      >
        Name:{props.name} And Age: {props.age}
      </h2>
      <h1 style={TextStyle}>I am Object Style</h1>
      <h3 className={styles.Modulecss}>I am Module CSS</h3>
    </div>
  );
};

export default Hello;
