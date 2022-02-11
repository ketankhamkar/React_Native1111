import * as React from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration';
import FlatList from './FlatList111'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30}} >Home Screen</Text>
      <View style={Styles.btn}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        />
        </View>
        <View style={Styles.btn}>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Registration')}
      />
      </View>
    <View style={Styles.btn}>
      <Button
        title="Go to FlatList"
        onPress={() => navigation.navigate('FlatList')}
      />
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="FlatList" component={FlatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  btn: {
    padding: 15,

  }
})

export default StackNav;
