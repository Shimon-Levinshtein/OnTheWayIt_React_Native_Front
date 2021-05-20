import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const DriverPersonalArea = props => {

  return (
    <View style={styles.continer}>
    
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('UserDriverAccountDetails')}>
          <Text style={styles.textButton}>פרטי חשבון</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('UserDriverChangePassword')}>
          <Text style={styles.textButton}>סיסמה והבטחה</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('xxx')}>
          <Text style={styles.textButton}>משלוחים ומסלולים שלי</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('xxx')}>
          <Text style={styles.textButton}>הזמנות שלי</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('xxx')}>
          <Text style={styles.textButton}>מסלולים קבועים</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  continer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    paddingTop: 50,
  },
  containingButton: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.primaryLight,
    width: '70%',
    height: 50,
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
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default DriverPersonalArea;
