import React, { useState } from 'react';

const Textarea = () => {
  const [state, setstate] = useState({
    desc: 'Please insert Some Text',
    userInput: ' '
  });

  const onChangeHandeler = event => {
    var mytext = event.target.value;
    setstate({ userInput: mytext });
  };
  return (
    <div>
      <textarea placeholder='Your Massage' onChange={onChangeHandeler} />
      <p>{state.userInput}</p>
    </div>
  );
};

export default Textarea;
