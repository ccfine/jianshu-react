import React from "react"
import { Title } from "component/title/Title.jsx"
import styles from "./error.css"

export const Error = () => {
  return (
    <div className="container">
      <Title title="出错啦！！！" />
      <div>
        <h1 className={ styles.error }>404</h1>
        <h1 className={ styles.error }>NOT FOUND</h1>
      </div>
    </div>
  )
}
