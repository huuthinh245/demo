import React from 'react';
import { View, Text, TouchableOpacity,Alert, PermissionsAndroid,Linking, NativeModules} from 'react-native'
import { connect } from "react-redux"
import store from '../store'
import { increment, decrement } from '../reducers/reduxActionReducer'
import Permissions from 'react-native-permissions'
class register extends React.Component {
    static navigationOptions = {
        title: 'Register'

    }
    constructor(props) {
        super(props);
        this.state = { photoPermission: '' }
        this.openSettings = this.openSettings.bind(this)
    }

    openSettings(){
        NativeModules.OpenSettings.openNetworkSettings(data => {
            console.log('call back data', data);
          });
    }


    componentDidMount() {
        Permissions.check('camera').then(response => {
          // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          this.setState({photoPermission:response})
        })
      }
      _requestPermission = () => {
        Permissions.request('camera').then(response => {
          // Returns once the user has chosen to 'allow' or to 'not allow' access
          // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          this.setState({photoPermission:response})
        })
      }
    async _componentDidMount() {
        
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                           'so you can take awesome pictures.'
              }
            )
            console.log(granted)
            if (granted === 'never_ask_again') {
                Linking.openURL('app-setting:').catch(err => console.error('An error occurred', err));
            } 
          } catch (err) {
            console.log(err)
          }
          
          console.log(PermissionsAndroid.RESULTS)
    }
 

    render() {
        console.log(this.state.photoPermission)
        return (

            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() =>{}}>
                    <Text>Check</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() =>this._componentDidMount()} style={{backgroundColor:'blue'}}>
                    <Text>check permission</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.openSettings} style={{backgroundColor:'yellow'}}>
                    <Text>Open Android Settings</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 30
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