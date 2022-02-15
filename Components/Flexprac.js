import React from 'react';
import {View, text, StyleSheet, Button} from 'react-native';

const Flexprac = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.redbox}></View>
      <View style={Styles.bluebox}></View>
      <View style={Styles.yellobox}></View>
    </View>
  );
};
export default Flexprac;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: 'grey',
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  yellobox: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
