import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios'
import { connect } from 'react-redux'
import * as ActionTypes from '../types'
import {Icon} from 'native-base'
class detail extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'detail',
        headerStyle:{
            backgroundColor:'#2980b9'
        },
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" />
            </TouchableOpacity>
        ),
        headerRight: (Platform.OS==='android') ? <View/> : null ,
        headerTitleStyle: {
            color:'white',
            alignSelf: 'center',
            justifyContent: 'space-between',

        }

    })

    componentDidMount() {

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
