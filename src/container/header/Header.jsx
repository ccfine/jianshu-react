import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import logo from "assets/logo.png"
import styles from "./header.css"

@withRouter

export default class Header extends Component {
  constructor () {
    super()
    this.handleBackHome = this.handleBackHome.bind(this)
  }

  handleBackHome () {
    this.props.history.push("/")
  }

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles["flex-middle"] }>
          <img src={ logo } alt="简书logo" onClick={ this.handleBackHome } className={ styles.logo } />
          <span onClick={ this.handleBackHome } className={ styles.home }>首页</span>
          <span onClick={ this.handleBackHome } className={ styles.home }>下载App</span>
          <div className={ styles["search-container"] }>
            <input placeholder="搜索" className={ styles.search } />
            <div className={ styles["search-btn"] }></div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
