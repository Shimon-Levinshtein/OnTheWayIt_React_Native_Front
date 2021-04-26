import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepB = props => {

    const [buttonTransportSelected, setButtonTransportSelected] = useState('רכב');
    const [numberPassengers, setNumberPassengers] = useState('5');
    const [thereArePassengers, setThereArePassengers] = useState(true);

    const handlerNextLevel = () => {
          props.navigation.navigate('CreateAccountStepC');
    };

    const handlerTransportButton = (buttonNeme, passengersNum, thereAre) => {
        setButtonTransportSelected(buttonNeme);
        setThereArePassengers(thereAre);
        setNumberPassengers(passengersNum);
    };

    const handlerNumberPassengersButton = (value) => {
        if (value == '+') {
            let num = numberPassengers * 1 + 1;
            setNumberPassengers(num + "");
        } else {
            if (numberPassengers == '0') return;
            let num = numberPassengers * 1 - 1;
            setNumberPassengers(num + "");
        }
    };


    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>בחירת אמצעי תחבורה</Text>
                    <Text style={styles.text}> שלב 2/7</Text>
                </View>

                <View style={styles.viewTransportSelectionButtons}>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'רכב' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('רכב', '5', true)}
                        >
                            <Text style={buttonTransportSelected == 'רכב' ? styles.textButtonFocus : styles.textButton}>רכב</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'משאית' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('משאית', '2', true)}
                        >
                            <Text style={buttonTransportSelected == 'משאית' ? styles.textButtonFocus : styles.textButton}>משאית</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'אופנוע' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('אופנוע', '0', false)}
                        >
                            <Text style={buttonTransportSelected == 'אופנוע' ? styles.textButtonFocus : styles.textButton}>אופנוע</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'אופניים' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('אופניים', '0', false)}
                        >
                            <Text style={buttonTransportSelected == 'אופניים' ? styles.textButtonFocus : styles.textButton}>אופניים</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'מונית' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('מונית', '5', true)}
                        >
                            <Text style={buttonTransportSelected == 'מונית' ? styles.textButtonFocus : styles.textButton}>מונית</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'אוטובוס' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('אוטובוס', '35', true)}
                        >
                            <Text style={buttonTransportSelected == 'אוטובוס' ? styles.textButtonFocus : styles.textButton}>אוטובוס</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'מיניבוס' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('מיניבוס', '15', true)}
                        >
                            <Text style={buttonTransportSelected == 'מיניבוס' ? styles.textButtonFocus : styles.textButton}>מיניבוס</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={buttonTransportSelected == 'אמבולנס' ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => handlerTransportButton('אמבולנס', '1', true)}
                        >
                            <Text style={buttonTransportSelected == 'אמבולנס' ? styles.textButtonFocus : styles.textButton}>אמבולנס</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity
                        style={buttonTransportSelected == 'תחבורה ציבורית' ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => handlerTransportButton('תחבורה ציבורית', '0', false)}>
                        <Text style={buttonTransportSelected == 'תחבורה ציבורית' ? styles.textButtonFocus : styles.textButton}>תחבורה ציבורית</Text>
                    </TouchableOpacity>
                </View>

                {thereArePassengers ? 
                <View style={styles.containingNumberPassengers}>
                    <Text style={styles.labelTextImput}>מס' נוסעים</Text>
                    <View style={styles.NumberPassengersBox}>
                        <TextInput keyboardType='numeric' onChangeText={value => setNumberPassengers(value)} value={numberPassengers} style={styles.NumberPassengers}/>
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
                : false}


                <View style={styles.containingInputsHidden}>
                    <View style={styles.viewHiddenText}>
                        <Text style={styles.titleHiddenText}>פרטים אלו לא יוצגו באופן פומבי</Text>
                    </View>
                    <Text style={styles.labelTextImput}>מס' ירוק / מס' עוסק</Text>
                    <TextInput keyboardType='numeric' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>מס' רכב</Text>
                    <TextInput keyboardType='numeric' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>מס' רשיון נהיגה</Text>
                    <TextInput keyboardType='numeric' style={styles.inputHidden} />
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
    viewTransportSelectionButtons: {
        paddingHorizontal: '8%',
        paddingVertical: 20,
    },
    viewTwoButtonsTransportSelectionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TransportSelectdButton: {
        backgroundColor: Colors.primaryLight,
        borderColor: Colors.primary,
        height: 50,
        width: "46%",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    TransportSelectdButtonFocus: {
        color: 'white',
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        height: 50,
        width: "46%",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    TransportSelectdButtonBig: {
        backgroundColor: Colors.primaryLight,
        borderColor: Colors.primary,
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    TransportSelectdButtonBigFocus: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    containingNumberPassengers: {
        paddingHorizontal: '8%',
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
    containingInputsHidden: {
        backgroundColor: Colors.primaryLight,
        color: Colors.primary,
        paddingHorizontal: '8%',
        width: '100%',
    },
    viewHiddenText: {
        height: 40,
        justifyContent: 'center',
    },
    titleHiddenText: {
        color: '#686868',
        fontWeight: 'bold',
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    inputHidden: {
        color: Colors.primary,
        backgroundColor: 'white',
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
    inputSelectArrow: {
        width: '15%',
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