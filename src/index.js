import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App.jsx"
import { store, persistor } from "./redux/store.js"
import { PersistGate } from "redux-persist/es/integration/react"
import "css/global.css"
import "css/iconfont.css"

ReactDOM.render(
  <Provider store={ store }>
    <PersistGate persistor={ persistor }>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById("root")
)
