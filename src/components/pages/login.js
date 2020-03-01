import React from 'react';
const Log = () => {
  sessionStorage.setItem('userName', 'Fahad');
};
const login = () => {
  return (
    <div>
      <button onClick={Log}>LOGIN</button>
    </div>
  );
};

export default login;
