import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepB = props => {


    const [numberPassengers, setNumberPassengers] = useState('1');
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handlerNextLevel = () => {
        props.navigation.navigate('CustomerServiceDriverC');
    };

    const handlerNumberPassengersButton = (value) => {
        if (value == '+') {
            let num = numberPassengers * 1 + 1;
            setNumberPassengers(num + "");
        } else {
            if (numberPassengers == '1') return;
            let num = numberPassengers * 1 - 1;
            setNumberPassengers(num + "");
        }
    };


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>פרטי הנוסעים</Text>
                    {/* <Text style={styles.text}> שלב 2/7</Text> */}
                </View>



                <View style={styles.containingNumberPassengers}>
                    <Text style={styles.labelTextNumberPassengers}>מס' נוסעים</Text>
                    <View style={styles.NumberPassengersBox}>
                        <TextInput keyboardType='numeric' onChangeText={value => setNumberPassengers(value)} value={numberPassengers} style={styles.NumberPassengers} />
                        <TouchableOpacity
                            onPress={() => handlerNumberPassengersButton('+')}
                            style={styles.NumberPassengersButton}>
                            <Text style={styles.NumberPassengersButtonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handlerNumberPassengersButton('-')}
                            style={styles.NumberPassengersButton}>
                            <Text style={styles.NumberPassengersButtonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.departureTimeContiner}>
                    <Text style={styles.departureTimeBoldText}>האם יש תוספת מטען?</Text>
                    <View style={styles.SwitchContiner}>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabled ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text style={styles.switchText}>ללא תוספת מטען</Text>
                    </View>
                </View>
                {!isEnabled &&
                    <View style={styles.containingInputs}>
                        <Text style={styles.labelTextImput}>תיאור ופרטים נוספים</Text>
                        <TextInput
                            multiline={true}
                            numberOfLines={5}
                            textAlignVertical="top"
                            style={styles.input} />
                    </View>
                }

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>שלב הבא</Text>
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
    containingNumberPassengers: {
        paddingHorizontal: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
    },
    NumberPassengersBox: {
        flexDirection: 'row',
    },
    NumberPassengers: {
        color: Colors.primary,
        backgroundColor: 'white',
        borderColor: Colors.primary,
        height: 40,
        width: 50,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
        textAlign: 'center',
    },
    NumberPassengersButton: {
        height: 40,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NumberPassengersButtonText: {
        color: Colors.primary,
        fontSize: 35,
    },
    labelTextNumberPassengers: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    departureTimeContiner: {
        marginHorizontal: '8%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    departureTimeBoldText: {
        color: Colors.primary,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    switchText: {
        color: Colors.primary,
        marginLeft: 10,
    },
    SwitchContiner: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
    },
    containingInputs: {
        color: Colors.primary,
        width: '100%',
        paddingHorizontal: '8%',
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        width: "100%",
        borderWidth: 1,
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
        marginTop: 20,
    },
    button: {
        backgroundColor: 'white',
        width: '90%',
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
        fontSize: 17,
        fontWeight: 'bold',
    },
    textButtonFocus: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
});

export default StepB;