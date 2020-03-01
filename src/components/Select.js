import React, { useState } from 'react';

const Select = () => {
  const [state, setstate] = useState({
    city1: 'Dhaka',
    city2: 'Rajshahi',
    city3: 'Rangpur',
    city4: 'Barishal',
    show: ' '
  });

  const onChangeHandeler = event => {
    var SelectedValue = event.target.value;
    setstate({ show: SelectedValue });
  };
  return (
    <div>
      <p>{state.show}</p>
      <select onChange={onChangeHandeler} value={state.city4}>
        <option>{state.city1}</option>
        <option>{state.city2}</option>
        <option>{state.city3}</option>
        <option>{state.city4}</option>
      </select>
    </div>
  );
};

export default Select;
