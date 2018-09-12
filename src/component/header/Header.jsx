import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import logo from "assets/logo.png"
import styles from "./header.css"

@withRouter

export default class Header extends Component {
  render () {
    return (
      <div className={ styles.container }>
        <div>
          <Link to="/">
            <img src={ logo } alt="简书logo" className={ styles.logo } />
          </Link>
          <Link to="/">
            <span className={ styles.home }>首页</span>
          </Link>
          <Link to="/">
            <span className={ styles.home }>下载App</span>
          </Link>
        </div>
        <div>
          haha
        </div>
      </div>
    )
  }
}
