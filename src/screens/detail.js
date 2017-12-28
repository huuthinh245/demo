import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ViewPagerAndroid } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import * as ActionTypes from '../types'
 class detail extends Component {
    static navigationOptions =({navigation, screenProps}) =>({
        title:'detail',
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>back</Text>
            </TouchableOpacity>
        ),
        headerRight: <View/>,
        headerTitleStyle:{
            alignSelf: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',

        }

    })

    componentDidMount() {
        axios.get('https://api.github.com/users/messi')
            .then(respone => {
                const {data} =respone
                console.log(data)
                this.props.dispatch({ type: ActionTypes.ADD_USER, payload: data })
            })
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}

export default connect()(detail)
