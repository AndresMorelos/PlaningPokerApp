import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Container from './components/Container'

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
import Login from './views/Login'
import SingUp from './views/Singup'
import Profile from './views/Profile'
import Rooms from './views/Rooms'
import Room from './views/Room'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/singup">
          <SingUp />
        </Route>
        <Route path="/profile">
          <Container title='Profile'>
            <Profile />
          </Container>
        </Route>
        <Route path="/rooms">
          <Container title='Rooms'>
            <Rooms />
          </Container>
        </Route>
        <Route path="/room/:roomId">
          <Container title='Room'>
            <Room />
          </Container>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
