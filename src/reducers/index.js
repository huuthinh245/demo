import pingReducer from './pingReducer';
import userReducer from './userReducer'
import { combineReducers } from 'redux';
import { nav, unAuthNav,homeNav } from './navigateReducer'
import { AuthRuducer } from './authReducer'
import actionReducer from './reduxActionReducer'
export default combineReducers({
    pingReducer,
    userReducer,
    nav,
    AuthRuducer,
    unAuthNav,
    homeNav,
    actionReducer
})