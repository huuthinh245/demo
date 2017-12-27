import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native'
import { connect } from "react-redux"
import store from '../store'
import {increment,decrement} from '../reducers/reduxActionReducer'
 class register  extends React.Component {
    render() {
        return(
            <View style={{padding:20}}>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={()=>this.props.increment()}>
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.decrement()} >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        counter:state.actionReducer.counter
    }
}
export default connect(mapStateToProps,{increment,decrement})(register)