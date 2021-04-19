import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

const StepE = props => {

    const handlerNextLevel = () => {
        props.navigation.navigate('StepF');
    };

    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>הוספת פרטים נוספים</Text>
                    <Text style={styles.text}> שלב 5/7</Text>
                </View>

                <View style={styles.skipStepContiner}>
                    <Text style={styles.skipStepText}>עמוד זה יעזור לך לקבל הזמנות רבות יותר, תוכל לדלג אליו עכשיו ולחזור למלא פרטים אלו פעם אחרת.</Text>
                    <TouchableOpacity style={styles.buttonSkipStep} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButtonSkipStep}>דלג כעת</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewTwoButtonsAddingDocuments}>
                    <TouchableOpacity
                        style={styles.AddingDocumentsButton}
                    // style={desiredDelivery.includes('נוסעים') ? styles.AddingDocumentsButtonFocus : styles.AddingDocumentsButton}
                    // onPress={() => desiredDeliveryButton('נוסעים')}
                    >
                        <FontAwesome5 name="user-alt" size={22} color={Colors.primary} />
                        <Text
                            style={styles.AddingDocumentsTextButton}
                        // style={desiredDelivery.includes('נוסעים') ? styles.textButtonFocus : styles.textButton}
                        >הוסף תמונת פרופיל</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.AddingDocumentsButton}
                    // style={desiredDelivery.includes('ארגזים') ? styles.AddingDocumentsButtonFocus : styles.AddingDocumentsButton}
                    // onPress={() => desiredDeliveryButton('ארגזים')}
                    >
                        <Ionicons name="md-videocam" size={22} color={Colors.primary} />
                        <Text
                            style={styles.AddingDocumentsTextButton}
                        // style={desiredDelivery.includes('ארגזים') ? styles.textButtonFocus : styles.textButton}
                        >הוסף סירטון על עצמך</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.viewTwoButtonsAddingDocuments}>
                    <TouchableOpacity
                        style={styles.AddingDocumentsButton}
                    // style={desiredDelivery.includes('נוסעים') ? styles.AddingDocumentsButtonFocus : styles.AddingDocumentsButton}
                    // onPress={() => desiredDeliveryButton('נוסעים')}
                    >
                        <FontAwesome5 name="car" size={22} color={Colors.primary} />
                        <Text
                            style={styles.AddingDocumentsTextButton}
                        // style={desiredDelivery.includes('נוסעים') ? styles.textButtonFocus : styles.textButton}
                        >הוסף תמונת רכב</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.AddingDocumentsButton}
                    // style={desiredDelivery.includes('ארגזים') ? styles.AddingDocumentsButtonFocus : styles.AddingDocumentsButton}
                    // onPress={() => desiredDeliveryButton('ארגזים')}
                    >
                        <Ionicons name="documents-sharp" size={22} color={Colors.primary} />
                        <Text
                            style={styles.AddingDocumentsTextButton}
                        // style={desiredDelivery.includes('ארגזים') ? styles.textButtonFocus : styles.textButton}
                        >הוסף מסמכים רלוונטיים</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containingInputs}>
                    <Text style={styles.labelTextImput}>חברה</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>פרטים נוספים</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>פרטי הרכב</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>המלצות</Text>
                    <TextInput style={styles.input} />
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
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    skipStepContiner: {
        paddingHorizontal: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: Colors.primaryLight,
    },
    skipStepText: {
        color: Colors.primary,
        width: '67%',
    },
    buttonSkipStep: {
        backgroundColor: Colors.primary,
        width: '28%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textButtonSkipStep: {
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
    },
    viewTwoButtonsAddingDocuments: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: '7%',
        marginBottom: 20,
        marginTop: 20,
    },
    AddingDocumentsButton: {
        height: 130,
        width: 130,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: "8%",
        paddingHorizontal: "4%",
    },
    AddingDocumentsButtonFocus: {
        // color: 'white',
        // backgroundColor: Colors.primary,
        // borderColor: Colors.primary,
        // height: 50,
        // width: "46%",
        // borderWidth: 1,
        // borderRadius: 10,
        // justifyContent: 'center',
        // marginVertical: 10,
    },
    AddingDocumentsTextButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
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
});

export default StepE;