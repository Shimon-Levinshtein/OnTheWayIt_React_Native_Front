import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../constants/Colors';


const PlacesListScreen = props => {
  const places = useSelector(state => state.user);
  // console.log(places);
  const dispatch = useDispatch();

  const handlerProvidingService = () => {
    if(places.connected) {
      console.log('connected!!!');
    } else {
      props.navigation.navigate('Drivers', { screen: 'LoginOrSignUp' });
    }
  };

  const handlerCustomerService = () => {
      props.navigation.navigate('CustomerServiceStack', { screen: 'CustomerServiceSelection' });
  };

  return (
    <View style={styles.continer}>
      <View style={styles.containingTitelText}>
        <Text style={styles.titelText}>על הדרך</Text>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => handlerProvidingService()}>
          <Text style={styles.textButton}>נתינת שירות</Text>
          <Ionicons name="car" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => handlerCustomerService()}>
          <Text style={styles.textButton}>קבלת שירות</Text>
          <FontAwesome name="suitcase" size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  continer: {
    backgroundColor: Colors.primary,
    height: '100%',
    width: '100%',
  },
  containingTitelText: {
    height: '25%',
    justifyContent: 'center',
  },
  titelText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containingButton: {
    height: '33%',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: '60%',
    height: '75%',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
});

export default PlacesListScreen;
