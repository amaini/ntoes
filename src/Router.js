import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Platform } from 'react-native';
import Timelist from './components/Timelist';
import Timeset from './components/Timeset';
import Repeat from './components/Repeat';
import Label from './components/Label';

const RouterComponent = () => {
  return (
    <Router>
    <Scene key="root" style={{ paddingTop: Platform.os === 'ios' ? 64 : 54 }} >
    <Scene key="Timelist" component={Timelist} title="Clock" />
    <Scene key="Timeset" component={Timeset} title="Timeset" />
    <Scene key="Repeat" component={Repeat} title="Repeat" />
    <Scene key="Label" component={Label} title="Label" />
    </Scene>
    </Router>

  );
};

export default RouterComponent;
