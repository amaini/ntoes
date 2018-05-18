import React, { Component } from 'react';
import { Text, TouchableOpacity, View, DatePickerIOS, StyleSheet } from 'react-native';
import { ListItem, List } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Repeat from './Repeat';
import Label from './Label';

 class Timeset extends Component {
   constructor(props) {
       super(props);
       this.state = { chosenDate: new Date() };

       this.setDate = this.setDate.bind(this);
     }

     setDate(newDate) {
       this.setState({ chosenDate: newDate });
     }

     render() {
       return (
         <View style={styles.container}>
           <DatePickerIOS
            mode='time'
             date={this.state.chosenDate}
             onDateChange={this.setDate}
           />
           <ListItem
           title={this.state.chosenDate.toString()}
           />
           <ListItem
           title='Repeat'
           onPress={() => Actions.Repeat()}
           />
           <ListItem
           title='Label'
           onPress={() => Actions.Label()}
           />

           <ListItem
           title='Sound'
           onPress={() => Actions.Timelist()}
           />

           <ListItem
           title='Snooze'
           hideChevron
           switchButton
           />
         </View>

       );
     }
   }

   const styles = StyleSheet.create({
     container: {
       //flex: 1,
       justifyContent: 'center'
     },
   })
export default Timeset;
