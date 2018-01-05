import React, { Component } from 'react';
import { ActivityIndicator, View, TextInput, Dimensions, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Container, Header, Content, Button, Text } from 'native-base'
import * as ActionTypes from '../types'
import firebase from 'firebase'



var { height, width } = Dimensions.get('window');

class login extends Component {
    static navigationOptions = {
        title: 'Authencation'
    }
    constructor(props) {
        super(props)
        console.disableYellowBox = true
        this.state = { username: 'huuthinh2209@gmail.com.vn', password: '123456' }
    }

    componentDidMount() {

    }

    _login() {
        //const { rootNav } = this.props.screenProps;
        this.props.navigation.navigate('Home')
        // const { username, password } = this.state
        // this.setState({ loading: true })
        // setTimeout(() => {
        //     this.props.dispatch({ type: ActionTypes.LOGIN_USER, payload: { username, password } })
        //     this.setState({ loading: false })
        // }, 3000)   
        // //this.props.dispatch({ type: ActionTypes.LOGIN_USER, payload: { username, password } })
    }

    renderButton() {
        return (
            this.props.loading ?
                <Button block info style={styles.buttonStyle} >
                    <ActivityIndicator size="large" color="#00ff00" />
                </Button>
                :
                <Button block info style={styles.buttonStyle} onPress={() => this._login()}>
                    <Text style={styles.textStyle}>Login</Text>
                </Button>
        )
    }

    render() {
        return (
            <View style={styles.wraper}>
                <View style={{ marginTop: width / 2 }}>
                    <View style={{ marginBottom: 10, alignItems: 'center' }}>
                        <TextInput
                            style={{ width: 400, backgroundColor: 'white', borderRadius: 20 }}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={(username) => this.setState({ username })}
                            value={this.state.username}
                        />
                    </View>
                    <View style={{ marginBottom: 10, alignItems: 'center' }}>
                        <TextInput
                            style={{ width: 400, backgroundColor: 'white', borderRadius: 50, }}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{this.props.message}</Text>
                    <Text style={{ color: 'red', textAlign: 'center' }}>{this.props.email}</Text>
                    {this.renderButton()}
                    <Button block info style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.textStyle}>register</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#E0EAFC',
        // borderRadius: 5,
        // borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    wraper: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: 'rgba(192,192,192, 0.5)',
    }
}
const mapStateToProps = (state) => {
    return {
        message: state.AuthRuducer.message,
        email: state.AuthRuducer.email,
        isLogged: state.AuthRuducer.isLoggedIn,
        loading: state.AuthRuducer.loading
    }
}

export default connect(mapStateToProps)(login)