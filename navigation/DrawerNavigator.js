import React from 'react';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';

import MainPage from '../screens/MainPage';

import LoginOrSignUp from '../screens/Drivers/LoginOrSignUp';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();





const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={MainPage}
        options={({ navigation, route }) => ({
          headerRight: props =>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu" size={35} color='white' style={{ marginRight: 10 }} />
            </TouchableOpacity>,
          headerLeft: props => <View style={styles.continerHeaderLeftIcons}>
            <EvilIcons name="user" size={45} color='white' style={{ marginLeft: 10 }} />
            <FontAwesome name="bell" size={25} color='white' style={{ marginLeft: 7, marginTop: 5 }} />
          </View>,
          headerTintColor: '#00a9ff',
          headerStyle: {
            backgroundColor: '#00a9ff',
          },
        })}
      />
    </Stack.Navigator>
  );
}
const LoginOrSignUpDriver = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUp}/>
    </Stack.Navigator>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='right' drawerType='front'>
      <Drawer.Screen name="עמוד ראשי" component={HomeStack} />
      <Drawer.Screen name="התחבר" component={LoginOrSignUpDriver} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  continerHeaderLeftIcons: {
    flexDirection: 'row',
  },
});
export default DrawerNavigator;