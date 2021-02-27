import React from 'react';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';

import MainPage from '../screens/MainPage';
import Test from '../screens/Test';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();





const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // name="עמוד ראשי"
        component={MainPage}
        options={({ navigation, route }) => ({
          headerRight: props => <Ionicons name="menu" size={24} color='white' />,
          headerLeft: props => <EvilIcons name="user" size={35} color='white' />,
          headerStyle: {
            backgroundColor: '#00a9ff',
          },
        })}
      />
    </Stack.Navigator>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='right' drawerType='front'>
      <Drawer.Screen name="עמוד ראשי" children={HomeStack} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;