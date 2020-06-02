import React from 'react'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'
import axios from 'axios'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './Global.css'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3333')

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={() => <Profile socket={socket} />} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
