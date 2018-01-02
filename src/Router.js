import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {LoginNavigator} from './UnAuth'
import {MainNavigator} from './HomePage'
import {  Animated } from 'react-native'
const noTransitionConfig = () => ({
    transitionSpec: {
        duration: 10000,
        timing: Animated.timing,
        easing: Easing.step0
    }
})

const stackApp = {
    Authencation: { screen: LoginNavigator },
    Home: { screen: MainNavigator }
}

const stackAppConfig = {
    navigationOptions: {
        header: null,
        swipeEnabled:true

    }
}
export const AppNavigator = StackNavigator(stackApp, stackAppConfig);

class AppWithNavigationState extends Component {


    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                })}
            />
        )
    }
}

const mapStateToProps = state => {
    return { nav: state.nav }
}

export default connect(mapStateToProps)(AppWithNavigationState)


