import React from 'react';

import {
    Text,View,TextInput,Button,StyleSheet,State,
} from 'react-native'
import { Component } from 'react/cjs/react.production.min';

class Registration extends Component
{
    checkAdre(e)
    {
        let rjx = /^[a-zA-Z]+$/
        if (!rjx.test(e))
        {
            this.setState({invalidAddess:"place ender corect"})
        }
        else
        {
            this.setState({invalidAddess:""})
            }
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 ,color:'red',marginHorizontal:30}}>Registration Form</Text>
                <TextInput placeholder='Enter FName..'  style={Styles.txtinput} />
                <TextInput placeholder='Enter LName..' onChangeText={(e) =>{this.checkAdre(e)}}
                    style={Styles.txtinput} />
                <TextInput placeholder='Enter Mobile..' keyboardType={'numeric'} style={Styles.txtinput} />
                <TextInput placeholder='Enter EmailId..' style={Styles.txtinput} />
                <TextInput placeholder='Enter Password..' style={Styles.txtinput} />
                <Text>{this.State.invalidAddess }</Text>
                <Button title='SUBMIT' title="SUBMIT"
                onPress={()=>alert('Helle')}
                />

            </View >
        );
    }
}
const Styles = StyleSheet.create({
    txtinput: {

        padding: 15,
        marginHorizontal: 20,
        marginVertical: 5.5,
        borderWidth: 2,


    },


});
export default Registration;