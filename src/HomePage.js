import detail from './screens/detail'
import MainHome from './Main'
import { addNavigationHelpers, StackNavigator, DrawerNavigator } from 'react-navigation'
import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity, Text, View, Animated } from 'react-native'
import { Icon } from 'native-base'
import draw2 from './screens/draw2'



const DrawerStack = DrawerNavigator({
    Main: { screen: MainHome },
    screen1: { screen: detail },
    screen2: { screen: draw2 },
})

// const stackMain = {
//      Main: { screen: MainHome },
//      Detail: {
//        screen: detail,
//     },
//     Drawer:{screen:DrawerStack}
// }
// const StackMainConfig = {
//     navigationOption: {
//         header: null,
//     }
// }
//export const MainNavigator = StackNavigator(stackMain, StackMainConfig);

export const MainNavigator = StackNavigator({
    Drawer: { screen: DrawerStack }
}, {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#2980b9' },
            headerTitleStyle: { alignSelf: 'center' },
            headerTintColor: 'white',
            gesturesEnabled: false,
            swipeEnabled:false,
            headerLeft: <Icon
                onPress={() => {
                    if (navigation.state.index === 0) {
                        navigation.navigate('DrawerOpen')
                    } else {
                        navigation.navigate('DrawerClose')
                    }
                }
                }
                name='menu'
                style={{ color: 'white', }} />,
            headerRight: <View />
        })
    })

// class MainNavigatorState extends React.Component {
//     render() {
//         return (
//             <MainNavigator/*  */
//                 screenProps={{ rootNavigation: this.props.navigation }}
//                 navigation={
//                     addNavigationHelpers({
//                         dispatch: this.props.dispatch,
//                         state: this.props.homeNav
//                     })
//                 }
//             />
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return { nav: state.nav }
// }

// export default connect(mapStateToProps)(MainNavigatorState)