import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Mynavigation from './Mynavigation';
import home from './pages/home';
import notfound from './pages/notfound';
import login from './pages/login';

// import Home from './pages/home';

const Myroute = () => {
  return (
    <Router>
      <Mynavigation />
      <Switch>
        <Route exact path='/' component={home} />
        <Route exact path='/login' component={login} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
        <Route path='/page3' component={Page3} />
        <Route component={notfound} />
      </Switch>
    </Router>
  );
};

export default Myroute;
