import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import UnAuthNavigatorState from './UnAuth'
import MainNavigatorState from './HomePage'



const stackApp = {
    Authencation: { screen: UnAuthNavigatorState },
    Home: { screen: MainNavigatorState }
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


