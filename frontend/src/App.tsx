import React from 'react'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './Global.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
