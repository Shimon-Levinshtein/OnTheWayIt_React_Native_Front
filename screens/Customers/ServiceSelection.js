import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

const ServiceSelection = props => {

    const handlerNextLevel = (navigateName) => {
        props.navigation.navigate(navigateName);
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>שלום,</Text>
                    <Text style={styles.titelText}>מה סוג השירות שרצונך להזמין?</Text>
                    {/* <Text style={styles.text}> שלב 7/7</Text> */}
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel('CustomerServiceDriverA')}>
                        <Text style={styles.textButton}>נהג</Text>
                    </TouchableOpacity>
               
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>משלוח</Text>
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
        height: 120,
        justifyContent: 'center',
    },
    titelText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    containingButton: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-around',
        marginVertical: 40,
    },
    button: {
        backgroundColor: Colors.primaryLight,
        borderColor: Colors.primary,
        borderWidth: 1,
        width: '50%',
        height: 130,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    textButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ServiceSelection;