import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';


const LoginOrSignUp = props => {
//   const places = useSelector(state => state.user);
//   const dispatch = useDispatch();

  const handlerLoginButton = () => {
    //   props.navigation.navigate('XXX');
  };

  const handlerSignUpButton = () => {
    //   props.navigation.navigate('XXX');
  };

  return (
    <View style={styles.continer}>
      <View style={styles.containingTitelText}>
        <Text style={styles.titelText}>שלום</Text>
        <Text style={styles.text}>
            על מנת להצטרף לנותני השירות יש להבצע התחברות או הרשמה 
        </Text>
      </View>
      
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => handlerLoginButton()}>
          <Text style={styles.textButton}>התחבר</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containingButton}>
        <TouchableOpacity style={styles.button} onPress={() => handlerSignUpButton()}>
          <Text style={styles.textButton}>צור חשבון</Text>
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
    height: '55%',
    justifyContent: 'center',
  },
  titelText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '10%',
    marginTop: '8%'
    
  },
  containingButton: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: '70%',
    height: '70%',
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
  },
});

export default LoginOrSignUp;
