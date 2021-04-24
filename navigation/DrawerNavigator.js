import React from 'react';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';

import MainPage from '../screens/MainPage';
import LoginOrSignUp from '../screens/Drivers/LoginOrSignUp';
import StepA from '../screens/Drivers/CreateAccount/StepA';
import StepB from '../screens/Drivers/CreateAccount/StepB';
import StepC from '../screens/Drivers/CreateAccount/StepC';
import StepD from '../screens/Drivers/CreateAccount/StepD';
import StepE from '../screens/Drivers/CreateAccount/StepE';
import StepF from '../screens/Drivers/CreateAccount/StepF';
import StepG from '../screens/Drivers/CreateAccount/StepG';
import StepH from '../screens/Drivers/CreateAccount/StepH';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const menuScreenOptions = ({ navigation, route }) => ({
  headerLeft: props =>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={35} color='white' style={{ marginRight: 10, marginLeft: 10 }} />
      </TouchableOpacity>,
  headerTintColor: 'white',
  headerStyle: {
      backgroundColor: '#00a9ff',
  },
});



const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomePage"
        component={MainPage}
        options={({ navigation, route }) => ({
          headerLeft: props =>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name="menu" size={35} color='white' style={{ marginRight: 10 }} />
            </TouchableOpacity>,
          headerRight: props => <View style={styles.continerHeaderLeftIcons}>
            <FontAwesome name="bell" size={23} color='white' style={{ marginLeft: 7, marginTop: 7 }} />
            <EvilIcons name="user" size={48} color='white' style={{ marginLeft: 10, marginRight: 10 }} />
          </View>,
          headerTintColor: '#00a9ff',
          headerStyle: {
            backgroundColor: '#00a9ff',
          },
        })}
      />
    </Stack.Navigator>
  );
};


const LoginOrSignUpDriver = () => {
    return (
        <Stack.Navigator screenOptions={menuScreenOptions}>
            <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUp} options={{title: ''}} />
            <Stack.Screen name="StepA" component={StepA} options={{title: ''}} />
            <Stack.Screen name="StepB" component={StepB} options={{title: ''}} />
            <Stack.Screen name="StepC" component={StepC} options={{title: ''}} />
            <Stack.Screen name="StepD" component={StepD} options={{title: ''}} />
            <Stack.Screen name="StepE" component={StepE} options={{title: ''}} />
            <Stack.Screen name="StepF" component={StepF} options={{title: ''}} />
            <Stack.Screen name="StepG" component={StepG} options={{title: ''}} />
            <Stack.Screen name="StepH" component={StepH} options={{title: ''}} />
        </Stack.Navigator>
    );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='right' drawerType='front'>
      <Drawer.Screen name="HomePage" component={HomeStack} />
      <Drawer.Screen name="Drivers" component={LoginOrSignUpDriver} options={{title: 'Bנהגים'}} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  continerHeaderLeftIcons: {
    flexDirection: 'row',
  },
});
export default DrawerNavigator;