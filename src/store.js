import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./reducers/homeReducer";

const reducers = combineReducers({
    restuarantReducer : homeReducer
})
const middleware = [thunk]
const store = createStore(reducers, applyMiddleware(...middleware))

export default store 