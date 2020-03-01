import React from 'react';
//this is function components
import Hello from './components/Hello';
//this is class commponets
import Wellcome from './components/Wellcome';
// import logo from './logo.svg';
import Condition from './components/Condition';
import Refresh from './components/Refresh';
import NewDemo from './components/NewDemo';
import Form from './components/Form';
import Singup from './components/Singup';
//Funstional componnent
import Textarea from './components/Textarea';
import Select from './components/Select';
import List from './components/Listt';
//import Countrylist from './components/Countrylist';
//import Post from './components/Post';
//import Mytable from './components/Mytable';
import Jsonlist from './components/Jsonlist';
//import Mynavigation from './components/Mynavigation';
import Myroute from './components/Myroute';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Myroute />
      <Hello age='26' name='Yusuf' />
      <Wellcome name='one' />
      <Condition />
      <Refresh />
      <NewDemo />
      <Form />
      <Singup />
      <Textarea />
      <Select />
      <List />
      <Jsonlist />
    </div>
  );
}

export default App;
