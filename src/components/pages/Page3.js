import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Page3 = ({ match }) => {
  const [state, setstate] = useState({
    myname: match.params.username
  });
  if (sessionStorage.getItem('userName') == null) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div>
        <h1>Page 3</h1>
      </div>
    );
  }
};

export default Page3;
