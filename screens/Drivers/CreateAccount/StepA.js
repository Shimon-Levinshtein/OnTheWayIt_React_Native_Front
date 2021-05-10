import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';


import Colors from '../../../constants/Colors';


const StepA = props => {

    const [genderSeledt, setGenderSeledt] = useState('בחר/י');

    const handlerNextLevel = () => {
        props.navigation.navigate('CreateAccountStepB');
    };

    const handlerLogin = () => {
        props.navigation.navigate('LoginDriver');
    };


    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>הוספת פרטים אישיים</Text>
                    <Text style={styles.text}> שלב 1/7</Text>
                </View>
                <TouchableOpacity style={styles.loginQuestion} onPress={() => handlerLogin()}>
                    <Text style={styles.textLoginQuestion}>כבר רשום? התחבר</Text>
                </TouchableOpacity>


                <View style={styles.containingInputs}>
                    <Text style={styles.labelTextImput}>שם</Text>
                    <TextInput style={styles.input} />
                    <Text style={styles.labelTextImput}>מין</Text>
                    <View style={styles.inputSelect} >
                        <Picker
                            selectedValue={genderSeledt}
                            style={{width: '88%',color: Colors.primary, transform: [
                                { scaleX: 1.2 }, 
                                { scaleY: 1.2 },
                             ],}}
                            dropdownIconColor={Colors.primary}
                            onValueChange={(itemValue, itemIndex) =>
                                setGenderSeledt(itemValue)
                            }>
                            <Picker.Item label="זכר" value="זכר" />
                            <Picker.Item label="נקבה" value="נקבה" />
                        </Picker>
                    </View>
                    <Text style={styles.labelTextImput}>גיל</Text>
                    <TextInput keyboardType='numeric' style={styles.input} />
                </View>
                <View style={styles.containingInputsHidden}>
                    <View style={styles.viewHiddenText}>
                        <Text style={styles.titleHiddenText}>פרטים אלו לא יוצגו באופן פומבי</Text>
                    </View>
                    <Text style={styles.labelTextImput}>תעודת זהות</Text>
                    <TextInput keyboardType='numeric' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>אימייל</Text>
                    <TextInput keyboardType='email-address' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>טלפון</Text>
                    <TextInput keyboardType='phone-pad' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>סיסמא</Text>
                    <TextInput keyboardType='decimal-pad' style={styles.inputHidden} />
                    <Text style={styles.labelTextImput}>עיר מגורים</Text>
                    <TextInput style={styles.inputHidden} />
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
        paddingHorizontal: '8%',
        height: 50,
        justifyContent: 'center',
    },
    textLoginQuestion: {
        textAlign: 'right',
        color: Colors.primary,
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    containingInputs: {
        color: Colors.primary,
        width: '100%',
        paddingHorizontal: '8%',
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
    inputSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
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
});

export default StepA;