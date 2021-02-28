import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers, applyMiddleware(thunk));

import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
