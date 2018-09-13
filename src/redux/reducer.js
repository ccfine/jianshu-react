import { persistCombineReducers } from "redux-persist"
import storage from "redux-persist/es/storage"
import { combineReducers } from "redux-immutable"
import { home } from "reducer/home.reducer.js"

export default persistCombineReducers({
  key: "root",
  storage
}, combineReducers({
  home
}))