import React from 'react';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';

import MainPage from '../screens/MainPage';

import LoginOrSignUp from '../screens/Drivers/LoginOrSignUp';
import CreateAccountStepA from '../screens/Drivers/CreateAccount/StepA';
import CreateAccountStepB from '../screens/Drivers/CreateAccount/StepB';
import CreateAccountStepC from '../screens/Drivers/CreateAccount/StepC';
import CreateAccountStepD from '../screens/Drivers/CreateAccount/StepD';
import CreateAccountStepE from '../screens/Drivers/CreateAccount/StepE';
import CreateAccountStepF from '../screens/Drivers/CreateAccount/StepF';
import CreateAccountStepG from '../screens/Drivers/CreateAccount/StepG';
import CreateAccountStepH from '../screens/Drivers/CreateAccount/StepH';

import LoginDriver from '../screens/Drivers/Login/StepA';

import AddingRouteDriverStepA from '../screens/Drivers/AddingRoute/StepA';


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
            <Stack.Screen name="LoginDriver" component={LoginDriver} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepA" component={CreateAccountStepA} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepB" component={CreateAccountStepB} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepC" component={CreateAccountStepC} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepD" component={CreateAccountStepD} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepE" component={CreateAccountStepE} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepF" component={CreateAccountStepF} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepG" component={CreateAccountStepG} options={{title: ''}} />
            <Stack.Screen name="CreateAccountStepH" component={CreateAccountStepH} options={{title: ''}} />
        </Stack.Navigator>
    );
};

const AddingRouteDriver = () => {
    return (
        <Stack.Navigator screenOptions={menuScreenOptions}>
            <Stack.Screen name="AddingRouteDriverStepA" component={AddingRouteDriverStepA} options={{title: ''}} />
        </Stack.Navigator>
    );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='right' drawerType='front'>
      <Drawer.Screen name="HomePage" component={HomeStack} />
      <Drawer.Screen name="Drivers" component={LoginOrSignUpDriver} options={{title: 'Login Or SignUp Driver'}} />
      <Drawer.Screen name="AddingRouteDriver" component={AddingRouteDriver} options={{title: 'Adding Route Driver'}} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  continerHeaderLeftIcons: {
    flexDirection: 'row',
  },
});
export default DrawerNavigator;