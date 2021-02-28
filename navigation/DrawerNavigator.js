import React from 'react';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { DrawerActions } from '@react-navigation/native';
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
        name="עמוד ראשי"
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

const styles = StyleSheet.create({
  continerHeaderLeftIcons: {
    flexDirection: 'row',
  },
});
export default DrawerNavigator;