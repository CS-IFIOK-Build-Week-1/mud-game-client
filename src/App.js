import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header'
import About from './pages/about/about'
import UserLogin from './pages/user-login/user-login'
import UserRegistration from './pages/user-registration/user-registration'
import UserDashboard from './pages/dashboard/dashboard'

import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/login">
            <UserLogin />
          </Route>

          <Route exact path="/register">
            <UserRegistration />
          </Route>

          <Route exact path="/dashboard">
            <UserDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
