import React from 'react';
import { Redirect } from 'react-router-dom';

const Page1 = () => {
  if (sessionStorage.getItem('userName') == null) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div>
        <h1>Page 1</h1>
      </div>
    );
  }
};

export default Page1;
