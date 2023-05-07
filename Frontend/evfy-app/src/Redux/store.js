import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk'
import { UserReducer } from "./User/UserReducer";
import { CarReducer } from "./Car/CarReducer";

let rootReducer = combineReducers({
    user:UserReducer,
    car:CarReducer
})

let store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store