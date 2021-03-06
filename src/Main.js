import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput, Dimensions, Image, Keyboard, FlatList, Alert } from 'react-native'
import { Icon } from 'native-base'
import { connect } from 'react-redux'
import * as ActionTypes from './types'
import { Text } from 'native-base'
import store from './store'
import { NavigationActions } from "react-navigation";
const strings = {
    title: 'start',
    fetch: 'fetch data'
}
var { height, width } = Dimensions.get('window');

const actionToDispatch = NavigationActions.reset({
    index: 0,
    key: null,  // black magic
    actions: [NavigationActions.navigate({ routeName: 'Authencation' })]
})

const actionToDispatch1 = NavigationActions.navigate({
    routeName:'screen1'
})

class MainHome extends Component {
    static navigationOptions = {
        drawerLabel: 'Main',
        drawerIcon: () => (
            <Icon name='home' />
        ),
        title: 'main',
        //center title
        headerTitleStyle: {
            alignSelf: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',

        },
        // style header
        headerStyle: {
            backgroundColor: '#2980b9'
        },
    }

    constructor(props) {
        super(props)
        this.state = {
            text: 'huuthinh245'
        }
        //console.disableYellowBox = true;
    }

    componentDidMount() {
        console.log('reset')
    }

    renderLoading() {
        return (
            this.props.fetching ? <Text>Loading....</Text> : null
        )
    }

    addUser() {
        if (this.props.data) {
            this.props.dispatch({ type: ActionTypes.ADD_USER, payload: this.props.data })
        } else {
            alert('khong co data')
        }

    }

    signOut() {
        this.props.dispatch( NavigationActions.navigate({
            routeName:'screen1'
        }))
    }

    _keyExtractor = (item, index) => item.id;
    
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginBottom: 10, padding: 2 }}>
                    <Text style={{ color: 'red' }}> isPinging: {`${this.props.ping}`}</Text>
                    <TouchableOpacity onPress={() => this.props.dispatch({ type: ActionTypes.PING })}>
                        <Text>{strings.title}</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={{ width: 400, borderWidth: 1, borderRadius: 2 }}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TouchableOpacity onPress={() => [this.props.dispatch({ type: ActionTypes.FETCH_USER, payload: this.state.text }), Keyboard.dismiss()]}>
                        <Text>{strings.fetch}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => [this.props.dispatch({ type: ActionTypes.FETCH_CANCEL }), Keyboard.dismiss()]}>
                        <Text>cancel fetch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.addUser()}
                    >
                        <Text>Add user</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                        <Text>Navigation detail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.signOut()}>
                        <Text>SignOut</Text>
                    </TouchableOpacity>
                    <Text>{this.props.data.id}</Text>
                    <Text>{this.props.data.login}</Text>
                    <Text>{this.props.error}</Text>
                    {this.renderLoading()}
                </View>
                <FlatList
                    data={this.props.arr}
                    keyExtractor={this._keyExtractor}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', flex: 3, margin: 20 }}>
                            <View style={{ borderWidth: 2, borderColor: 'blue', borderRadius: 25 }}>
                                <Image source={{ uri: item.avatar_url }}
                                    style={{ width: 50, height: 50, borderRadius: 25, resizeMode:'contain'}} />
                            </View      >
                            <TouchableOpacity
                                onPress={() => {
                                    Alert.alert(
                                        'Xac nhan',
                                        'Ban co chac chan ko',
                                        [
                                            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                                            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                            { text: 'OK', onPress: () => this.props.dispatch({ type: ActionTypes.DELETE_USER, payload: item.id }) },
                                        ],
                                        { cancelable: false }
                                    )
                                }}
                                style={{ flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 10, flex: 2 }}>
                                <Text>{item.id}</Text>
                                <Text>{item.login}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ping: state.pingReducer.isPing,
        data: state.userReducer.data,
        error: state.userReducer.error,
        fetching: state.userReducer.fetching,
        arr: state.userReducer.arr
    }
}
export default connect(mapStateToProps)(MainHome)