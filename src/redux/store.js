import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import reducer from "./reducer.js"

export const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension? window.devToolsExtension(): f => f
))

export const persistor = persistStore(store)
