import React from "react"
import { Title } from "component/title/Title.jsx"

export const Error = () => {
  return (
    <div className="container">
      <Title title="出错啦！！！" />
      <div>
        <h1 className="error">404</h1>
        <h1 className="error">NOT FOUND</h1>
      </div>
    </div>
  )
}
