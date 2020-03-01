import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  const [state, setstate] = useState({
    postData: ' ',
    pstResult: ' '
  });

  const onChangeHandeler = event => {
    var mydata = event.target.value;
    setstate({ postData: mydata });
  };

  const onClickHandeler = () => {
    axios.post('', '');
    .then(response=>{

    })
    .catch(error=>{
        
    })
  };

  return (
    <div>
      <input onChange={onChangeHandeler} type='text' />
      <button onClick={onClickHandeler}>Send</button>
    </div>
  );
};

export default Post;
