import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch } from 'react-native';

import Colors from '../../../constants/Colors';

const StepF = props => {

    const handlerNextLevel = () => {
        props.navigation.navigate('StepG');
    };

    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>הוספת אמצעי תשלום</Text>
                    <Text style={styles.text}> שלב 6/7</Text>
                </View>

                <View style={styles.PercentagePaymentContiner}>
                    <Text style={styles.PercentagePaymentText}>על כל נסיעה שתתבצע דרך האפליקציה, יגבה 3% מסכום הנסיעה.</Text>
                </View>

                <View style={styles.containingInputs}>
                    <Text style={styles.labelTextImput}>מספר כרטיס</Text>
                    <TextInput keyboardType='numeric' style={{ ...styles.input, width: '70%' }} />
                    <Text style={styles.labelTextImput}>שם בעל הכרטיס</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>תוקף</Text>
                    <TextInput keyboardType='twitter' style={{ ...styles.input, width: '30%' }} />
                    <Text style={styles.labelTextImput}>ספרות בגב הכרטיס</Text>
                    <TextInput keyboardType='numeric' style={{ ...styles.input, width: '20%' }} />

                    <View style={styles.containingButton}>
                        <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                            <Text style={styles.textButton}>שלב הבא</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </ScrollView>
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
        marginTop: 8,

    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    PercentagePaymentContiner: {
        paddingHorizontal: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    PercentagePaymentText: {
        color: Colors.primary,
        width: '100%',
    },
    containingInputs: {
        backgroundColor: Colors.primaryLight,
        color: Colors.primary,
        width: '100%',
        paddingHorizontal: '8%',
        paddingTop: 20,
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        backgroundColor: 'white',
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
    },
    button: {
        backgroundColor: 'white',
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
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepF;