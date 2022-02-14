import React from 'react';

import {
    Text,View,TextInput,Button,StyleSheet,State,
} from 'react-native'
import { Component } from 'react/cjs/react.production.min';


class Registration extends Component
{

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 ,color:'red',marginHorizontal:30}}>Registration Form</Text>
                <TextInput placeholder='Enter FName..'  style={Styles.txtinput} />
                <TextInput placeholder='Enter LName..'
                    style={Styles.txtinput} />
                <TextInput placeholder='Enter Mobile..' keyboardType={'numeric'} style={Styles.txtinput} />
                <TextInput placeholder='Enter EmailId..' style={Styles.txtinput} />
                <TextInput placeholder='Enter Password..' style={Styles.txtinput} />

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