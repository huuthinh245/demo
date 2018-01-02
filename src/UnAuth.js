import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import login from './screens/login'
import register from './screens/register'
import React, { Component } from 'react'
import { connect } from 'react-redux'




const stackLogin = {
    LoginForm: { screen: login },
    Register: { screen: register }
}

const stackLoginConfig = {
    navigationOption: {
        header: null
    },
    initialRouteName: 'LoginForm'
}
export const LoginNavigator = StackNavigator(stackLogin, stackLoginConfig)


// class UnAuthNavigatorState extends Component {
//     render() {
//         return (
//             <LoginNavigator
//                 screenProps={{ rootNav: this.props.navigation }}
//                 navigation={addNavigationHelpers({
//                     dispatch: this.props.dispatch,
//                     state: this.props.unAuthNav
//                 })}
//             />
//         )
//     }
// }
// const mapStateToProps = state => {
//     return { nav: state.unAuthNav }
// }
// export default connect(mapStateToProps)(UnAuthNavigatorState);