import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Header from "container/header/Header.jsx"
import Main from "page/main/Main.jsx"
import styles from "./home.css"

export default class Home extends Component {
  render () {
    const { match } = this.props
    return (
      <div>
        <Header />
        <div className={ styles.container }>
          <Switch>
            <Route path={ `${match.url}` } exact component={ Main } />
            <Redirect to="/404"  />
          </Switch>
        </div>
      </div>
    )
  }
} 