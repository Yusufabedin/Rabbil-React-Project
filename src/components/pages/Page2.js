import React from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';

const Page2 = () => {
  if (sessionStorage.getItem('userName') == null) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div>
        <h1>Page 2</h1>
      </div>
    );
  }
};

export default Page2;
