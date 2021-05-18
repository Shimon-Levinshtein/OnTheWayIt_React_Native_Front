import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepD = props => {

    const handlerNextLevel = () => {
        props.navigation.navigate('CustomerServiceDriverD');
    };


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>פרטי מזמין הנסיעה</Text>
                </View>

                <View style={styles.containingInputs}>
                    <Text style={styles.labelTextImput}>שם פרטי</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>שם משפחה</Text>
                    <TextInput  style={styles.input} />
                    <Text style={styles.labelTextImput}>אימייל</Text>
                    <TextInput  style={styles.input} />
                    <Text style={styles.labelTextImput}>טלפון</Text>
                    <TextInput keyboardType='decimal-pad' style={styles.input} />
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>התחבר</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    continer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    containingTitelText: {
        backgroundColor: Colors.primary,
        height: 140,
        justifyContent: 'center',
        marginBottom: 20,
    },
    titelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8
    },
    containingInputs: {
        color: Colors.primary,
        width: '100%',
        paddingHorizontal: '8%',
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
        textAlign: 'right',
    },
    
    containingButton: {
        height: 110,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingHorizontal: '8%',
    },
    button: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 70,
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
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default StepD;