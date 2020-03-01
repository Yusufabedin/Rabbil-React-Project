import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const home = () => {
  if (sessionStorage.getItem('userName') == null) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div>
        <h1>This is home</h1>
      </div>
    );
  }
};

export default home;
