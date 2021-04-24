import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'

import Colors from '../../../constants/Colors';

const StepG = props => {

    const [isSelected, setSelection] = useState(false);

    const handlerNextLevel = () => {
        props.navigation.navigate('StepH');
    };

    const onChangeCheckBox = () => {
        setSelection(!isSelected);
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>תנאי שימוש וסיום הרשמה</Text>
                    <Text style={styles.text}> שלב 7/7</Text>
                </View>

                <View style={styles.termsUseContiner}>
                    <Text style={styles.termsUseTextTitele}>תנאי שימוש ותשלום</Text>
                    <Text style={styles.termsUseText}>על כל נסיעה שתתבצע דרך האפליקציה, יגבה 3% ממחיר הנסעיה.</Text>
                    <Text style={styles.termsUseText}>יתכנו ביטולים או חבילות לא מתאימות למסלול הסופי שלכם.</Text>
                    <Text style={styles.termsUseText}>החיוב מתבצע ברגע הכניסה לרחוב שממנו הוזמן המשלוח.</Text>
                </View>

                <CheckBox
                    checked={isSelected}
                    center
                    title='אני מאשר את תנאי שימוש באפליקציה'
                    onIconPress={onChangeCheckBox}
                    containerStyle={styles.checkbox}
                    checkedColor={Colors.primary}
                    textStyle={{color: Colors.primary}}
                />

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>הירשם</Text>
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
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    termsUseContiner: {
        paddingHorizontal: '7%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    termsUseTextTitele: {
        color: Colors.primary,
        width: '100%',
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 20,
    },
    termsUseText: {
        color: Colors.primary,
        width: '100%',
        marginBottom: 10,
    },
    checkbox: {
        marginHorizontal: '7%',
        marginBottom: 20,
        backgroundColor: Colors.primaryLight,
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
        backgroundColor: Colors.primary,
        width: '80%',
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
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepG;