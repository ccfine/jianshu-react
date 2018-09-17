import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import logo from "assets/logo.png"
import styles from "./header.css"

@withRouter

export default class Header extends Component {
  constructor () {
    super()
    this.handleBackHome = this.handleBackHome.bind(this)
    this.handleSwicthLogin = this.handleSwicthLogin.bind(this)
  }

  handleBackHome () {
    this.props.history.push("/")
  }

  handleSwicthLogin () {
    this.props.history.push("/login")
  }

  render () {
    return (
      <div className={ styles.container }>
        <div className={ styles["content-container"] }>
          <img src={ logo } alt="简书logo" onClick={ this.handleBackHome } className={ styles.logo } />
          <span onClick={ this.handleBackHome } className={ styles.home }>首页</span>
          <span onClick={ this.handleBackHome } className={ styles.home }>下载App</span>
          <div className={ styles["search-container"] }>
            <input placeholder="搜索" className={ styles.search } />
            <div className={ styles["search-btn"] }></div>
            <div className={ styles["search-list"] }>
              <span>热门搜索</span>
            </div>
          </div>
        </div>
        <div className={ styles["content-container"] }>
          <span className={ styles.theme }>Aa</span>
          <span className={ styles.login } onClick={ this.handleSwicthLogin }>登录</span>
          <div className={ styles.register }>注册</div>
          <div className={ styles.article }>写文章</div>
        </div>
      </div>
    )
  }
}
