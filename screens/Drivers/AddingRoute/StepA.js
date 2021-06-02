import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepA = props => {

    const [desiredDelivery, setDesiredDelivery] = useState([]);

    const handlerNextLevel = () => {
        props.navigation.navigate('AddingRouteDriverStepB');
    };

   

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



    return (
        <ScrollView  style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>שלום אהרון</Text>
                    <Text style={styles.text}>מה אתה מעוניין לקחת היום</Text>
                </View>

                <View style={styles.viewTransportSelectionButtons}>
                    <TouchableOpacity
                        style={desiredDelivery.includes('נוסעים') ? styles.TransportSelectdButtonBigFocus : styles.TransportSelectdButtonBig}
                        onPress={() => WhatToTakeButton('נוסעים')}>
                        <Text style={desiredDelivery.includes('נוסעים') ? styles.textButtonFocus : styles.textButton}>נוסעים</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButtonFinish}>שלב הבא</Text>
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
        paddingHorizontal: '8%',
        paddingVertical: 8,
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
    textButtonFocus: {
        color: 'white',
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
});

export default StepA;