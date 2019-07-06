import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './components/Layout/main'
import Home from './components/home'
import Register from './components/Auth/register'
import Login from './components/Auth/login'


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;