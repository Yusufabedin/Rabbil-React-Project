import React, { Component } from 'react';

class Form extends Component {
  state = {
    userName: ' '
  };

  onChangeHandeler = event => {
    var myname = event.target.name;
    var myvalue = event.target.value;
    this.setState({ [myname]: myvalue });
  };

  onSubmitHandler = () => {
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <p>My First Form</p>
          <p>{this.state.userName}</p>
          <input
            name='userName'
            onChange={this.onChangeHandeler}
            type='text'
            placeholder='Your Name'
          ></input>
          <br></br>
          <input type='submit' value='Submit Now'></input>
        </form>
      </div>
    );
  }
}

export default Form;
