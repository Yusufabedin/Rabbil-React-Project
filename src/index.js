import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Protfolio from './Pages/Protfolio';

import * as serviceWorker from './serviceWorker';

const myrouter = <div></div>;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
