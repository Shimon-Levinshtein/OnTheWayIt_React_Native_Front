import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';


import Colors from '../../../constants/Colors';


const StepB = props => {

    const [desiredDelivery, setDesiredDelivery] = useState([]);
    const [numberPassengers, setNumberPassengers] = useState('5');
    const [selectedLanguage, setSelectedLanguage] = useState(5);


    const WhatToTakeButton = (buttonNeme) => {
        if (desiredDelivery.includes(buttonNeme)) {
            const index = desiredDelivery.indexOf(buttonNeme);
            const newArr = [...desiredDelivery];
            newArr.splice(index, 1);
            setDesiredDelivery(newArr);
        } else {
            setDesiredDelivery([...[buttonNeme], ...desiredDelivery]);
        };
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
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>אופי המשלוח</Text>
                    {/* <Text style={styles.text}>מה אתה מעוניין לקחת היום</Text> */}
                </View>

                <View style={styles.viewTransportSelectionButtons}>
                    <TouchableOpacity
                        style={desiredDelivery.includes('מוצרי קירור') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => WhatToTakeButton('מוצרי קירור')}>
                        <Text style={desiredDelivery.includes('מוצרי קירור') ? styles.textButtonFocus : styles.textButton}>מוצרי קירור</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTransportSelectionButtons}>
                    <TouchableOpacity
                        style={desiredDelivery.includes('שקיות') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => WhatToTakeButton('שקיות')}>
                        <Text style={desiredDelivery.includes('שקיות') ? styles.textButtonFocus : styles.textButton}>שקיות</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTransportSelectionButtons}>
                    <TouchableOpacity
                        style={desiredDelivery.includes('ארגזים') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => WhatToTakeButton('ארגזים')}>
                        <Text style={desiredDelivery.includes('ארגזים') ? styles.textButtonFocus : styles.textButton}>ארגזים</Text>
                    </TouchableOpacity>
                    {desiredDelivery.includes('ארגזים') && <View style={styles.continingUnderTheButton}>
                        <View style={styles.continingNumberPassengersInputs}>
                            <View style={styles.containingNumberPassengers}>
                                <Text style={styles.NumberPassengersLabelTextImput}>מספר ארגזים</Text>
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
                            <View style={styles.deviationTimeFromTrackPicker}>
                                <Picker
                                    selectedValue={selectedLanguage}
                                    style={{
                                        width: '80%', color: Colors.primary, transform: [
                                            { scaleX: 1 },
                                            { scaleY: 1 },
                                        ],
                                    }}
                                    dropdownIconColor={Colors.primary}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }>
                                    <Picker.Item label="גדול" value="גדול" />
                                    <Picker.Item label="בינוני" value="בינוני" />
                                    <Picker.Item label="קטן" value="קטן" />
                                </Picker>
                            </View>
                        </View>
                        <View style={styles.containingNumberPassengers}>
                            <Text style={styles.NumberPassengersLabelTextImput}>תיאור ופרטים נוספים</Text>
                            <View style={styles.NumberPassengersBox}>
                                <TextInput
                                    multiline={true}
                                    numberOfLines={3}
                                    textAlignVertical="top"
                                    style={styles.input} />
                        </View>
                    </View>
                    </View>}
                </View>
            <View style={styles.viewTransportSelectionButtons}>
                <TouchableOpacity
                    style={desiredDelivery.includes('חבילות') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                    onPress={() => WhatToTakeButton('חבילות')}>
                    <Text style={desiredDelivery.includes('חבילות') ? styles.textButtonFocus : styles.textButton}>חבילות</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewTransportSelectionButtons}>
                <TouchableOpacity
                    style={desiredDelivery.includes('מעטפות / מסמכים') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                    onPress={() => WhatToTakeButton('מעטפות / מסמכים')}>
                    <Text style={desiredDelivery.includes('מעטפות / מסמכים') ? styles.textButtonFocus : styles.textButton}>מעטפות / מסמכים</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containingButton}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CustomerOrderDeliveryC')}>
                    <Text style={styles.textButtonFinish}>שלב הבא</Text>
                </TouchableOpacity>
            </View>

            </View>
        </ScrollView >
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
        height: 130,
        justifyContent: 'center',
        marginBottom: 20,
    },
    titelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,

    },
    viewTransportSelectionButtons: {
        minHeight: 50,
        marginHorizontal: '8%',
        marginVertical: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    TransportSelectdButtonBig: {
        backgroundColor: Colors.primaryLight,
        borderColor: Colors.primary,
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
    },
    TransportSelectdButtonBigFocus: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        height: 50,
        width: "100%",
        borderWidth: 1,
        // borderRadius: 10,
        // borderTopEndRadius: 10,
        // borderTopStartRadius: 10,
        justifyContent: 'center',
        // marginVertical: 10,
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
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
    },
    textButtonFinish: {
        color: 'white',
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
    continingUnderTheButton: {
        backgroundColor: Colors.primaryLight,
        paddingTop: 10,
        paddingBottom: 15,
    },
    continingNumberPassengersInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containingNumberPassengers: {
        paddingHorizontal: 13,
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
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NumberPassengersButtonText: {
        color: Colors.primary,
        fontSize: 35,
    },
    NumberPassengersLabelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    deviationTimeFromTrackPicker: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 50,
        width: 130,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20,
        backgroundColor: 'white',
        marginRight: 13,
    },
    input: {
        color: Colors.primary,
        backgroundColor: 'white',
        borderColor: Colors.primary,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
        textAlign: 'right',
    },
});

export default StepB;