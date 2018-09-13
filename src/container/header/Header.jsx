import React, { Component } from "react"
import logo from "assets/logo.png"
import styles from "./header.css"

export default class Header extends Component {
  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles["content-container"] }>
          <img src={ logo } alt="简书logo" className={ styles.logo } />
          <span className={ styles.home }>首页</span>
          <span className={ styles.home }>下载App</span>
        </div>
        <div></div>
      </div>
    )
  }
}
