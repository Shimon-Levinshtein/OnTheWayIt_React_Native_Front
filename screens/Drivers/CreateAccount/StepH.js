import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';

const StepH = props => {

    const [isSelected, setSelection] = useState(false);

    const handlerNextLevel = () => {
        props.navigation.navigate('HomePage', { screen: 'HomePage' });
    };

    const onChangeCheckBox = () => {
        setSelection(!isSelected);
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingCheckmarkIonicon}>
                    <Ionicons name="md-checkmark-done-outline" size={150} color="white" />
                </View>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>ההשרשמה הסתיימה בהצלחה!</Text>
                    <Text style={styles.text}> נשמח לעבוד איתך</Text>
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>לאזור האישי</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.primary,
    },
    continer: {
        flex:1,
        height: '100%',
        width: '100%',
    },
    containingCheckmarkIonicon: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containingTitelText: {
        height: 100,
        justifyContent: 'center',
        marginBottom: 40,
    },
    titelText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,

    },
    text: {
        color: 'white',
        fontSize: 17,
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
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepH;