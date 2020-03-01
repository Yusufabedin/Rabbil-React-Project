import React, { Component } from 'react';
//bootstrap
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class Wellcome extends Component {
  DoThisFromClass(a) {
    alert(a);
  }
  state = {
    name: 'Fahad',
    age: ['20', '22', '24', '25'],
    sex: 'male',
    weight: {
      class10: '56',
      class9: '40',
      class8: ['20', '22', '24', '25']
    }
  };
  ChangeName = a => {
    this.setState({ name: a });
  };
  render() {
    return (
      <div>
        <button
          className='btn btn-danger m-5'
          onClick={this.DoThisFromClass.bind(this, 'Meow')}
        >
          Click Me From class
        </button>
        <h1>I am from class {this.props.name}</h1>
        <h1>
          Name:{this.state.name} Age:{this.state.age[3]} Sex: {this.state.sex}
          weight: {this.state.weight.class8[2]}
        </h1>
        <button
          className='btn btn-dark'
          onClick={a => this.ChangeName('Mehedi')}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default Wellcome;
