import detail from './screens/detail'
import MainHome from './Main'
import {addNavigationHelpers,StackNavigator} from 'react-navigation'
import React from 'react'
import {connect} from 'react-redux'
const stackMain = {
    Main: { screen: MainHome },
    Detail: { screen: detail }
}
const StackMainConfig = {
    navigationOption: {
        header: null,
    }
}
export const MainNavigator = StackNavigator(stackMain, StackMainConfig);

class MainNavigatorState extends React.Component {
    render(){
        return(
            <MainNavigator 
                screenProps={{rootNavigation:this.props.navigation}}
                navigation={
                    addNavigationHelpers({
                        dispatch:this.props.dispatch,
                        state:this.props.homeNav                        
                    })
                }
            />
        )
    }
} 
const mapStateToProps =(state) =>{
   return  {homeNav:state.homeNav}
}

export default connect(mapStateToProps)(MainNavigatorState)