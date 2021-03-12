import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SectionList } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const StepA = props => {

    const [genderSeledt, setGenderSeledt] = useState('');

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
                <Text style={styles.labelTextImput}>שם</Text>
                <TextInput style={styles.input} />
                <Text style={styles.labelTextImput}>מין</Text>
                <View style={styles.inputSelect} >
                    <Text style={styles.inputSelectText}>{genderSeledt}</Text>
                    <View style={styles.inputSelectArrow}>
                        <RNPickerSelect
                            onValueChange={(value) => setGenderSeledt(value)}
                            items={[{ label: "זכר", value: "זכר" }, { label: "נקבה", value: "נקבה" },]}
                        />
                    </View>
                </View>
                <Text style={styles.labelTextImput}>גיל</Text>
                <TextInput style={styles.input} />
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
        color: Colors.primary,
        marginRight: '5%',
        marginLeft: '5%',
        width: '100%',

    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: "90%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
    },
    inputSelect: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: "90%",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
    },
    inputSelectText: {
        color: Colors.primary,
        fontSize: 18,
        padding: 7,
        width: '80%',
    },
    inputSelectArrow: {
        width: '15%',
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