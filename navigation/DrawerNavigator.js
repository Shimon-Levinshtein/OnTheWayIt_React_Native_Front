import React from 'react';
import { Ionicons, EvilIcons, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
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
import AddingRouteDriverStepB from '../screens/Drivers/AddingRoute/StepB/StepB';
import AddingRouteDriverStepC from '../screens/Drivers/AddingRoute/StepC';
import AddingRouteDriverStepD from '../screens/Drivers/AddingRoute/StepD';

import CustomerServiceSelection from '../screens/Customers/ServiceSelection';

import CustomerServiceDriverA from '../screens/Customers/OrderDriver/StepA';
import CustomerServiceDriverB from '../screens/Customers/OrderDriver/StepB';
import CustomerServiceDriverC from '../screens/Customers/OrderDriver/StepC';
import CustomerServiceDriverD from '../screens/Customers/OrderDriver/StepD';
import CustomerServiceDriverE from '../screens/Customers/OrderDriver/StepE';

import CustomerOrderDeliveryA from '../screens/Customers/OrderDelivery/StepA';
import CustomerOrderDeliveryB from '../screens/Customers/OrderDelivery/StepB';
import CustomerOrderDeliveryC from '../screens/Customers/OrderDelivery/StepC';
import CustomerOrderDeliveryD from '../screens/Customers/OrderDelivery/StepD';
import CustomerOrderDeliveryE from '../screens/Customers/OrderDelivery/StepE';

import UserDriverPersonalArea from '../screens/User/Driver/DriverPersonalArea';
import UserDriverAccountDetails from '../screens/User/Driver/AccountDetails';
import UserDriverChangePassword from '../screens/User/Driver/ChangePassword';
import UserDriverDeliveriesOnMyRoute from '../screens/User/Driver/DeliveriesOnMyRoute';
import UserDriverMyOrders from '../screens/User/Driver/MyOrders';
import UserDriverPermanentRoutes from '../screens/User/Driver/PermanentRoutes';
import UserDriverLevelTwoAddRegularRoute from '../screens/User/Driver/LevelTwo/AddRegularRoute';
import UserDriverCancelingDelivery from '../screens/User/Driver/LevelTwo/CancelingDelivery';

import NotificationsDriverNotificationsIndex from '../screens/User/Driver/Notifications/NotificationsIndex';
import NotificationsDriverAllNotifications from '../screens/User/Driver/Notifications/AllNotifications';
import NotificationsDriverSurpluses from '../screens/User/Driver/Notifications/Surpluses';

import DynamicScreensDriverReceivingOrder from '../screens/User/Driver/DynamicPages/OrdersScreens/ReceivingOrder';

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
    elevation: 0,
    shadowOpacity: 0,
  },

});

const menuScreenOptionsUser = ({ navigation, route }) => ({
  headerLeft: props =>
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
      <Ionicons name="menu" size={35} color='white' style={{ marginRight: 10, marginLeft: 10 }} />
    </TouchableOpacity>,
  headerRight: props => <View style={styles.continerHeaderLeftIcons}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={30} color='white' style={{ marginLeft: 10, marginRight: 10 }} />
    </TouchableOpacity>
  </View>,
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#00a9ff',
  },
  headerTitleStyle: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    elevation: 0,
    shadowOpacity: 0,
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
            <TouchableOpacity onPress={() => navigation.navigate('UserDriverNotificationsStack')}>
              <FontAwesome name="bell" size={23} color='white' style={{ marginLeft: 7, marginTop: 7 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('UserDriverPersonalAreaStack')}>
              <EvilIcons name="user" size={48} color='white' style={{ marginLeft: 10, marginRight: 10 }} />
            </TouchableOpacity>
          </View>,
          headerTintColor: '#00a9ff',
          headerStyle: {
            backgroundColor: '#00a9ff',
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
    </Stack.Navigator>
  );
};


const LoginOrSignUpDriverStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptions}>
      <Stack.Screen name="LoginOrSignUp" component={LoginOrSignUp} options={{ title: '' }} />
      <Stack.Screen name="LoginDriver" component={LoginDriver} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepA" component={CreateAccountStepA} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepB" component={CreateAccountStepB} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepC" component={CreateAccountStepC} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepD" component={CreateAccountStepD} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepE" component={CreateAccountStepE} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepF" component={CreateAccountStepF} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepG" component={CreateAccountStepG} options={{ title: '' }} />
      <Stack.Screen name="CreateAccountStepH" component={CreateAccountStepH} options={{ title: '',headerShown: false }} />
    </Stack.Navigator>
  );
};

const AddingRouteDriverStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptions}>
      <Stack.Screen name="AddingRouteDriverStepA" component={AddingRouteDriverStepA} options={{ title: '' }} />
      <Stack.Screen name="AddingRouteDriverStepB" component={AddingRouteDriverStepB} options={{ title: '' }} />
      <Stack.Screen name="AddingRouteDriverStepC" component={AddingRouteDriverStepC} options={{ title: '' }} />
      <Stack.Screen name="AddingRouteDriverStepD" component={AddingRouteDriverStepD} options={{ title: '',headerShown: false }} />
    </Stack.Navigator>
  );
};

const CustomerServiceStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptions}>
      <Stack.Screen name="CustomerServiceSelection" component={CustomerServiceSelection} options={{ title: '' }} />

      <Stack.Screen name="CustomerServiceDriverA" component={CustomerServiceDriverA} options={{ title: '' }} />
      <Stack.Screen name="CustomerServiceDriverB" component={CustomerServiceDriverB} options={{ title: '' }} />
      <Stack.Screen name="CustomerServiceDriverC" component={CustomerServiceDriverC} options={{ title: '' }} />
      <Stack.Screen name="CustomerServiceDriverD" component={CustomerServiceDriverD} options={{ title: '' }} />
      <Stack.Screen name="CustomerServiceDriverE" component={CustomerServiceDriverE} options={{ title: '',headerShown: false }} />

      <Stack.Screen name="CustomerOrderDeliveryA" component={CustomerOrderDeliveryA} options={{ title: '' }} />
      <Stack.Screen name="CustomerOrderDeliveryB" component={CustomerOrderDeliveryB} options={{ title: '' }} />
      <Stack.Screen name="CustomerOrderDeliveryC" component={CustomerOrderDeliveryC} options={{ title: '' }} />
      <Stack.Screen name="CustomerOrderDeliveryD" component={CustomerOrderDeliveryD} options={{ title: '' }} />
      <Stack.Screen name="CustomerOrderDeliveryE" component={CustomerOrderDeliveryE} options={{ title: '',headerShown: false }} />
    </Stack.Navigator>
  );
};

const UserDriverPersonalAreaStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptionsUser}>
      <Stack.Screen
        name="UserDriverPersonalArea"
        component={UserDriverPersonalArea}
        options={({ navigation, route }) => ({
          headerLeft: props =>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="x" size={30} color={Colors.primary} style={{ marginLeft: 10 }} />
            </TouchableOpacity>,
          headerRight: props => <View style={styles.continerHeaderLeftIcons}>
            <EvilIcons name="user" size={48} color={Colors.primary} style={{ marginLeft: 10, marginRight: 10 }} />
          </View>,
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            textAlign: 'right',
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: Colors.primaryLight,
          },
          title: 'אהרון גליק'
        })}
      />
      <Stack.Screen name="UserDriverAccountDetails" component={UserDriverAccountDetails} options={{ title: 'פרטי החשבון' }} />
      <Stack.Screen name="UserDriverChangePassword" component={UserDriverChangePassword} options={{ title: 'שינוי סיסמה' }} />
      <Stack.Screen name="UserDriverDeliveriesOnMyRoute" component={UserDriverDeliveriesOnMyRoute} options={{ title: 'משלוחים במסלול שלך' }} />
      <Stack.Screen name="UserDriverMyOrders" component={UserDriverMyOrders} options={{ title: 'ההזמנות שלי' }} />
      <Stack.Screen name="UserDriverPermanentRoutes" component={UserDriverPermanentRoutes} options={{ title: 'מסלולים קבועים' }} />
      <Stack.Screen name="UserDriverLevelTwoAddRegularRoute" component={UserDriverLevelTwoAddRegularRoute} options={{ title: 'הוספת מסלול קבוע' }} />
      <Stack.Screen name="UserDriverCancelingDelivery" component={UserDriverCancelingDelivery} options={{ title: 'ביטול משלוח' }} />
    </Stack.Navigator>
  );
};

const UserDriverNotificationsStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptionsUser}>
      <Stack.Screen
        name="NotificationsDriverNotificationsIndex"
        component={NotificationsDriverNotificationsIndex}
        options={({ navigation, route }) => ({
          headerLeft: props =>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="x" size={30} color={Colors.primary} style={{ marginLeft: 10 }} />
            </TouchableOpacity>,
          headerRight: props => <View style={styles.continerHeaderLeftIcons}>
            <MaterialIcons name="notifications-active" size={35} color={Colors.primary} style={{ marginLeft: 10, marginRight: 10 }} />
          </View>,
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            textAlign: 'right',
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: '30%',
          },
          headerStyle: {
            backgroundColor: Colors.primaryLight,
          },
          title: 'התראות'
        })}
      />
      <Stack.Screen name="NotificationsDriverAllNotifications" component={NotificationsDriverAllNotifications} options={{ title: 'כל ההתראות' }} />
      <Stack.Screen name="NotificationsDriverSurpluses" component={NotificationsDriverSurpluses} options={{ title: 'העדפות' }} />
    </Stack.Navigator>
  );
};

const DynamicScreensDriverStack = () => {
  return (
    <Stack.Navigator screenOptions={menuScreenOptions}>
      <Stack.Screen name="DynamicScreensDriverReceivingOrder" component={DynamicScreensDriverReceivingOrder} options={{ title: 'האם ברצונך לקבל הזמנה זו?' }} />
    </Stack.Navigator>
  );
};


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='right' drawerType='front'>
      <Drawer.Screen name="HomePage" component={HomeStack} />
      <Drawer.Screen name="Drivers" component={LoginOrSignUpDriverStack} options={{ title: 'Login Or SignUp Driver' }} />
      <Drawer.Screen name="AddingRouteDriver" component={AddingRouteDriverStack} options={{ title: 'Adding Route Driver' }} />
      <Drawer.Screen name="CustomerServiceStack" component={CustomerServiceStack} options={{ title: 'Customer service' }} />
      <Drawer.Screen name="UserDriverPersonalAreaStack" component={UserDriverPersonalAreaStack} options={{ title: 'User Driver Personal Area' }} />
      <Drawer.Screen name="UserDriverNotificationsStack" component={UserDriverNotificationsStack} options={{ title: 'Notification driver' }} />
      <Drawer.Screen name="DynamicScreensDriverStack" component={DynamicScreensDriverStack} options={{ title: 'Dynamic Screens Driver' }} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  continerHeaderLeftIcons: {
    flexDirection: 'row',
  },
});
export default DrawerNavigator;