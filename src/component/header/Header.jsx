import React, { Component } from "react"
import styles from "./header.css"

export default class Header extends Component {
  render () {
    return (
      <div className={ styles.container }>
        头部
      </div>
    )
  }
}