import React from 'react';
const MydataChild = data => {
  return <option>{data}</option>;
};

const Listt = () => {
  const country = ['Bangladesh', 'India', 'China', 'Pakisthan'];
  const dataItem = country.map(MydataChild);

  return (
    <div>
      <select>{dataItem}</select>
    </div>
  );
};

export default Listt;
