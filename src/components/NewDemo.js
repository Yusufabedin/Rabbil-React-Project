import React, { Component } from 'react';
import ReactDom from 'react-dom';

class NewDemo extends Component {
  myFun() {
    var container = document.getElementById('myID');
    var element = <h1> MY Name Is Fahad I am from ReactDom</h1>;
    var callback = function() {
      alert('HI i am Callback');
    };
    ReactDom.render(element, container, callback);
  }

  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h1 id='myID'>My Name Is Yusuf Abedin</h1>
      </div>
    );
  }
}

export default NewDemo;
