import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Repeat extends Component {
  render() {
    return (
      <View>
      <CheckBox
      onPress={() => Actions.Timelist()}
        title='Every Sunday'
      />

      <CheckBox
    title='Every Monday'
      />

      <CheckBox
    title='Every Tuesday'
      />

      <CheckBox
    title='Every Wednesday'
      />

      <CheckBox
    title='Every Thursday'
      />

      <CheckBox
    title='Every Friday'
      />

      <CheckBox
    title='Every Saturday'
      />

      </View>
    );
  }
}


export default Repeat;
