import React from 'react';
import { View, Text, TouchableOpacity, Alert, PermissionsAndroid, Linking, NativeModules } from 'react-native'
import { connect } from "react-redux"
import store from '../store'
import { increment, decrement } from '../reducers/reduxActionReducer'
import Permissions from 'react-native-permissions'
import Camera from 'react-native-camera';
class register extends React.Component {
    static navigationOptions = {
        title: 'Register'

    }
    constructor(props) {
        super(props);
        this.state = { photoPermission: '', granted: '', flag: false }
        this.openSettings = this.openSettings.bind(this)

    }
    async  requestPermissionAndroid() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    'title': 'Cool Photo App Camera Permission',
                    'message': 'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.setState({ flag: true })
            } else {
            }
        } catch (err) {
            console.warn(err)
        }
    }

    openSettings() {
        NativeModules.OpenSettings.openNetworkSettings(data => {
            console.log('call back data', data);
        });
        this._requestPermission()
    }

    permissionChecking() {
        Permissions.check('camera').then(response => {
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            alert(response)
            this.setState({ photoPermission: response })
            if (response === 'authorized') {
                this.setState({ flag: true })
            }
        })
    }
    // componentDidMount() {
    //     this._checkCameraAndPhotos();
    //     //this.requestPermissionAndroid();
    // }

    // Request permission to access photos
    _requestPermission = () => {
        Permissions.check('camera').then(response => {
            
            // Returns once the user has chosen to 'allow' or to 'not allow' access
            // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
            if (response === 'authorized') {
                this.setState({ flag: true ,photoPermission:response})
            } else if (response === 'denied') {
                this._checkCameraAndPhotos()
            } else if (response === 'restricted') {
                this._alertForPhotosPermission();
            }
        })

    }
    
    // Check the status of multiple permissions
     _checkCameraAndPhotos() {
        Permissions.request('camera').then(response => console.log(response))
    }

    // This is a common pattern when asking for permissions.
    // iOS only gives you once chance to show the permission dialog,
    // after which the user needs to manually enable them from settings.
    // The idea here is to explain why we need access and determine if
    // the user will say no, so that we don't blow our one chance.
    // If the user already denied access, we can ask them to enable it from settings.
    _alertForPhotosPermission() {
        Alert.alert(
            'Can we access your photos?',
            'We need access so you can set your profile pic',
            [
                {
                    text: 'No way',
                    onPress: () => console.log('Permission denied'),
                    style: 'cancel',
                },
                this.state.photoPermission == 'restricted'
                    ? { text: 'OK', onPress:()=>{} }
                    : { text: 'Open Settings', onPress: () => this.openSettings() },
            ],
        )
    }
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }



    render() {
        console.log(this.state.flag)
        return (

            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() =>{}}>
                    <Text>Check</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => this._requestPermission()} style={{ backgroundColor: 'blue', height: 100 }}>
                    <Text>check permission</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._checkCameraAndPhotos()} style={{ backgroundColor: 'yellow', height: 100 }}>
                    <Text>Open Android Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._alertForPhotosPermission()} style={{ backgroundColor: '#93b5ed', height: 100 }}>
                    <Text>always denied</Text>
                </TouchableOpacity>
                <Text>{this.state.photoPermission}</Text>
                {
                    this.state.flag &&
                    <Camera
                        ref={(cam) => {
                            this.camera = cam;
                        }}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}>
                        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                    </Camera>
                }
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
};
const mapStateToProps = (state) => {
    return {
        counter: state.actionReducer.counter
    }
}
export default connect(mapStateToProps, { increment, decrement })(register)