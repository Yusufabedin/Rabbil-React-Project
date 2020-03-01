import React, { Component } from 'react';

class Condition extends Component {
  state = {
    login: false
  };

  render() {
    const { login } = this.state;
    return <div>{login ? <h1>I am Frist</h1> : <h1>I Am Second</h1>}</div>;
  }
}

export default Condition;
