import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepC = props => {

    const [desiredDelivery, setDesiredDelivery] = useState([]);

    const handlerNextLevel = () => {
          props.navigation.navigate('StepD');
    };
    const desiredDeliveryButton = (buttonNeme) => {
        if (desiredDelivery.includes(buttonNeme)) {
            const index = desiredDelivery.indexOf(buttonNeme);
                const newArr = [...desiredDelivery];
                newArr.splice(index, 1);
                setDesiredDelivery(newArr);
        } else {
            setDesiredDelivery([...[buttonNeme], ...desiredDelivery]);
        };
    };
    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>בחירת סוג משלוחים רצוי</Text>
                    <Text style={styles.text}> שלב 3/7</Text>
                </View>

                <View style={styles.viewTransportSelectionButtons}>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={desiredDelivery.includes('נוסעים') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('נוסעים')}
                        >
                            <Text style={desiredDelivery.includes('נוסעים') ? styles.textButtonFocus : styles.textButton}>נוסעים</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ארגזים') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('ארגזים')}
                        >
                            <Text style={desiredDelivery.includes('ארגזים') ? styles.textButtonFocus : styles.textButton}>ארגזים</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={desiredDelivery.includes('חבילות גדולות') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('חבילות גדולות')}
                        >
                            <Text style={desiredDelivery.includes('חבילות גדולות') ? styles.textButtonFocus : styles.textButton}>חבילות גדולות</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('חבילות קטנות') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('חבילות קטנות')}
                        >
                            <Text style={desiredDelivery.includes('חבילות קטנות') ? styles.textButtonFocus : styles.textButton}>חבילות קטנות</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.viewTwoButtonsTransportSelectionButtons}>
                        <TouchableOpacity
                            style={desiredDelivery.includes('מוצרי קירור') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('מוצרי קירור')}
                        >
                            <Text style={desiredDelivery.includes('מוצרי קירור') ? styles.textButtonFocus : styles.textButton}>מוצרי קירור</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('מעטפות ומסמכים') ? styles.TransportSelectdButtonFocus : styles.TransportSelectdButton}
                            onPress={() => desiredDeliveryButton('מעטפות ומסמכים')}
                        >
                            <Text style={desiredDelivery.includes('מעטפות ומסמכים') ? styles.textButtonFocus : styles.textButton}>מעטפות ומסמכים</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={desiredDelivery.includes('חולים') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => desiredDeliveryButton('חולים')}>
                        <Text style={desiredDelivery.includes('חולים') ? styles.textButtonFocus : styles.textButton}>חולים</Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    textButtonFocus: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepC;