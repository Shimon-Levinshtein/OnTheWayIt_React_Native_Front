import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Input, } from 'react-native-elements';

import Colors from '../../../constants/Colors';


const StepA = props => {

    const handlerNextLevel = () => {
        //   props.navigation.navigate('xxx');
    };


    return (
        <View style={styles.continer}>
            <View style={styles.containingTitelText}>
                <Text style={styles.titelText}>הוספת פרטים אישיים</Text>
                <Text style={styles.text}> שלב 1/7</Text>
            </View>
            <View style={styles.loginQuestion}>
                <Text style={styles.textLoginQuestion}>כבר רשום? התחבר</Text>
            </View>


            <View style={styles.containingInputs}>
                <Input label='שם' style={styles.containingInputs} />
            </View>
            <View style={styles.containingButton}>
                <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                    <Text style={styles.textButton}>שלב הבא</Text>
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
    },
    containingTitelText: {
        backgroundColor: Colors.primary,
        height: 100,
        justifyContent: 'center',
    },
    titelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    loginQuestion: {
        height: 50,
        justifyContent: 'center',
    },
    textLoginQuestion: {
        textAlign: 'right',
        color: Colors.primary,
        marginRight: 60,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    containingInputs: {
        color: Colors.primary
    },
    input: {
        borderColor: Colors.primary,
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

export default StepA;