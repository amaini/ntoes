import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {Timeset } from './Timeset';

class Timelist extends Component {
state ={ Timelist: [] };

componentWillMount() {

}
render() {
  return (
    <TouchableOpacity>
    <ListItem
    onPress={() => Actions.Timeset()}
      title={this.state.chosenDate.toString()}
      subtitle={
        <View style={styles.subtitleView}>

          <Text style={styles.ratingText}>5 months ago</Text>
          <Text>{this.state.chosenDate}</Text>
        </View>
      }
    />
    </TouchableOpacity>
  );
}
}
const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});

export default Timelist;
