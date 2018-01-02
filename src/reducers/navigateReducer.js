import { NavigationActions } from 'react-navigation'
import { combineReducers } from 'redux'
import { AppNavigator } from '../Router'
// import { LoginNavigator } from '../UnAuth'
// import { MainNavigator } from '../HomePage'

// const initRootNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Authencation'))
// const initAuthNavState = LoginNavigator.router.getStateForAction(LoginNavigator.router.getActionForPathAndParams('LoginForm'))
//const initHomeNavState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Main'))
export const nav = (state , action) => {
    let nextState = AppNavigator.router.getStateForAction(action, state)
    //if nextState undefined return state 
    return nextState || state
}

// export const unAuthNav = (state , action) => {
//     let nextState = LoginNavigator.router.getStateForAction(action, state)
//     return nextState || state
// }
// export const homeNav = (state ,action) =>{
//     let nextState=MainNavigator.router.getStateForAction(action,state)
//     return nextState || state
// }

