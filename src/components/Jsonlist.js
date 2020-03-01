import React from 'react';

const Jsonlist = () => {
  const mylist = [
    {
      City: 'Dhaka',
      Zip: '6000'
    },
    {
      City: 'Rajshahi',
      Zip: '5000'
    },
    {
      City: 'Rangpur',
      Zip: '8000'
    },
    {
      City: 'Barishal',
      Zip: '7000'
    }
  ];

  const dataItemCity = mylist.map(dataCity => {
    return <option>{dataCity.City}</option>;
  });
  const dataItemZip = mylist.map(dataZip => {
    return <option>{dataZip.Zip}</option>;
  });
  return (
    <div>
      <select>{dataItemCity}</select>
      <select>{dataItemZip}</select>
    </div>
  );
};

export default Jsonlist;
