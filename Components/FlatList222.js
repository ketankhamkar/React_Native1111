import React from 'react';
import {
    View, Text,FlatList
} from 'react-native';

class FlatList222 extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data: [
                { nam: 'ketan', email: "ksk@gmail.com" },
                { nam: 'ratan', email: "rsk@gmail.com" },
                { nam: 'karan', email: "aqsk@gmail.com" },
                { nam: 'amit', email: "ask@gmail.com" },
                { nam: 'sumit', email: "ask@gmail.com" },
                { nam: 'streyesh', email: "ask@gmail.com" },
                { nam: 'pratik', email: "ask@gmail.com" },
                { nam: 'Shubham', email: "ask@gmail.com" },
                { nam: 'Dhiraj', email: "ask@gmail.com" },
                { nam: 'amar', email: "ask@gmail.com" },

            ]
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{fontSize:80}}>FlatList</Text>
                <FlatList data={this.state.data}
                    renderItem={({ item }) => <Text
                    style={{ fontSize: 50, margin: 10, backgroundColor: 'skyblue' }}>{item.nam}</Text>} />
            </View>
        )
    }
}
export default FlatList222;