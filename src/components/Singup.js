import React, { Component } from 'react';

export class Singup extends Component {
  state = {
    fname: ' ',
    lname: ' ',
    email: ' ',
    mobile: ' '
  };

  onChangeHandeler = event => {
    var inputName = event.target.name;
    var inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });

    if (inputName === 'fname') {
      var namePattern = /^([a-zA-Z]){2,30}$/;
      if (!namePattern.test(inputValue)) {
        this.setState({ fname: 'Frist Name is Not valid' });
      }
    }

    if (inputName === 'lname') {
      var namePattern = /^([a-zA-Z]){2,30}$/;
      if (!namePattern.test(inputValue)) {
        this.setState({ lname: 'Lrist Name is Not valid' });
      }
    }
    if (inputName === 'email') {
      var emailPattern = /\S+@\S+\. \S+/;
      if (!emailPattern.test(inputValue)) {
        this.setState({ email: 'Email is Not valid' });
      }
    }
    if (inputName === 'mobile') {
      if (!Number(inputValue)) {
        this.setState({ mobile: 'Mobile is Not valid' });
      }
    }
  };
  render() {
    return (
      <div>
        <p>Frist Name:{this.state.fname}</p>
        <p>Last Name:{this.state.lname}</p>
        <p>Email:{this.state.email}</p>
        <p>Mobile Number:{this.state.mobile}</p>
        <from>
          <input
            onChange={this.onChangeHandeler}
            name='fname'
            type='text'
            placeholder='Frist Name'
          />
          <br></br>
          <input
            onChange={this.onChangeHandeler}
            name='lname'
            type='text'
            placeholder='Last Name'
          />
          <br></br>
          <input
            onChange={this.onChangeHandeler}
            name='email'
            type='text'
            placeholder='Frist Name'
          />
          <br></br>
          <input
            onChange={this.onChangeHandeler}
            name='mobile'
            type='text'
            placeholder='Mobile Number'
          />
          <br></br>
          <input name='submit' type='submit' value='Save Now' />
          <br></br>
        </from>
      </div>
    );
  }
}

export default Singup;
