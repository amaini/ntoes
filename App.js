import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Timelist from './src/components/Timelist';
import Timeset from './src/components/Timeset';
import Repeat from './src/components/Repeat';
import Label from './src/components/Label';


export default class App extends Component {
  render() {
    return (


        <Router>
        <Scene key="root">

        <Scene
        key="Timeset"
        component={Timeset}
        title="Add Alarm"

        />
        <Scene
        key="Timelist"
        component={Timelist}
        title="Alarm"
        rightTitle="+"
        onRight={() => Actions.Timeset()}
        leftTitle="Edit"
        onLeft={() => Actions.Repeat()}
        initial
        />

        <Scene
        key="Repeat"
        component={Repeat}
        title="Repeat"
        />

        <Scene
        key="Label"
        component={Label}
        title="Label"
        />
        </Scene>
        </Router>
    );
  }
}
