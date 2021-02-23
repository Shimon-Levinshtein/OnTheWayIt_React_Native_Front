import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainPage from '../screens/MainPage';
import Test from '../screens/Test';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () =>{
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="עמוד רשי" component={MainPage} />
          <Drawer.Screen name="Test" component={Test} />
        </Drawer.Navigator>
      );
};

export default DrawerNavigator;