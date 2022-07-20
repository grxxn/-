import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./todo/todoSlice";

const reducer = combineReducers({
  todo: todoSlice
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export default store;