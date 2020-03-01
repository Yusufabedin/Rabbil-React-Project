import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Mynavigation = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeStyle={{ color: 'red' }} to='/'>
            Home
          </NavLink>
          <NavLink exact activeStyle={{ color: 'green' }} to='/page1'>
            Page1
          </NavLink>
          <NavLink exact activeStyle={{ color: 'black' }} to='/page2'>
            Page2
          </NavLink>
          <NavLink exact activeStyle={{ color: 'orange' }} to='/page3'>
            Page3
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Mynavigation;
