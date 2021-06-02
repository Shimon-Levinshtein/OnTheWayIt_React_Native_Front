import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../../constants/Colors';


const CancelingDelivery = props => {

    return (
        <View style={styles.continer}>

            <View style={styles.containingMiddle}>
                <Text style={styles.titel}>האם אתם בטוחים </Text>
                <Text style={styles.titel}>שברצונם לבטל את המשלוח?</Text>
                <View style={styles.containingRoute}>
                    <Text style={styles.textBold}>מ - <Text style={styles.text}>אשדוד רחוב אורקנוס 10</Text></Text>
                    <Text style={styles.textBold}>אל <Text style={styles.text}>באר שבע האורנים 6</Text></Text>
                </View>
            </View>
            <View style={styles.containingButton}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.textButton}>השאר משלוח</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.cancelTextButton}>בטל משלוח</Text>
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
        paddingTop: 30,
        paddingHorizontal: '7%',
        marginBottom: 20,
    },
    containingMiddle: {
        height: '60%',
        alignItems: 'center',
        paddingTop: '15%',
    },
    titel: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containingRoute: {
        backgroundColor: Colors.primaryLight,
        width: '90%',
        height: 90,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textBold: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.primary,
        marginVertical: 3,
    },
    text: {
        fontSize: 15,
        color: Colors.primary,
        fontWeight: 'normal',
    },
    containingButton: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.primaryLight,
        width: '90%',
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
        marginBottom: 20,
    },
    textButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cancelButton: {
        backgroundColor: Colors.primary,
        width: '90%',
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
    cancelTextButton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default CancelingDelivery;
