import React, { Component } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { Title } from "component/title/Title.jsx"
import Home from "page/home/Home.jsx"
import Register from "page/register/Register.jsx"
import Login from "page/login/Login.jsx"
import { Error } from "page/error/Error.jsx"

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      hasError: false
    }
  }

  componentDidCatch () {
    this.setState({
      hasError: true
    })
  }

  render () {
    return this.state.hasError? (
      <div>
        <Title title="出错啦！！！" />
        <span>出错啦！！！</span>
      </div>
    ): (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={ Register } />
          <Route path="/login" component={ Login } />
          <Route path="/404" component={ Error } />
          <Route path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    )
  }
}