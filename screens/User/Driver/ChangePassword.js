import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const ChangePassword = props => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>הסיסמה הנוחכית שלך</Text>
                </View>
                <TextInput  style={styles.input}  />
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>סיסמה חדשה</Text>
                </View>
                <TextInput style={styles.input} />
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>אישור סיסמה חדשה</Text>
                </View>
                <TextInput style={styles.input} />
                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>שמור</Text>
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
        paddingTop: 30,
        paddingHorizontal: '7%',
        marginBottom: 20,
    },
    conrinerText3Items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        alignItems: 'center',
        minHeight: 30,
    },
    titelTextB: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 17,
        width: '100%',
        textAlign: 'left',
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        backgroundColor: 'white',
        height: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 17,
        padding: 9,
        textAlign: 'right',
    },
    containingButton: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        width: '55%',
        height: 55,
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
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default ChangePassword;
