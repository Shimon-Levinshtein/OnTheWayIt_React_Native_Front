import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '../../../constants/Colors';

const StepG = props => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>פרטי התשלום</Text>
                    {/* <Text style={styles.text}> שלב 7/7</Text> */}
                </View>

                <View style={styles.termsUseContiner}>
                    <View style={styles.termsUseTextBox}>
                        <Text style={styles.termsUseTextTiteleBox}>מחיר השירות:</Text>
                        <View style={styles.continingTermsUseTypeMoney}>
                            <Text style={styles.TermsUseMoney}>100</Text>
                            <Text style={styles.termsUseTypeMoney}>ש''ח</Text>
                        </View>
                    </View>
                    <Text style={styles.termsUseTextTitele}>התשלום יבצע ישירות לנותן שירות</Text>
                    <Text style={styles.termsUseText}>...תנאי שימוש ופרטים</Text>
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CustomerServiceSelection')}>
                        <Text style={styles.textButton}>ביטול</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('CustomerServiceDriverE')}>
                        <Text style={styles.textButton}>אישור ושיום</Text>
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
        paddingHorizontal: '15%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
    },
    termsUseTextBox: {
        backgroundColor: Colors.primary,
        width: '100%',
        height: 150,
        marginBottom: 25,
        marginTop: 20,
        textAlign: 'center',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    termsUseTextTiteleBox: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    continingTermsUseTypeMoney: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    TermsUseMoney: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        marginHorizontal: 8,
    },
    termsUseTypeMoney: {
        fontSize: 15,
        color: 'white',
        marginBottom: 7,
    },
    termsUseTextTitele: {
        color: Colors.primary,
        width: '100%',
        fontWeight: 'bold',
        marginBottom: 25,
        marginTop: 20,
        textAlign: 'center',
    },
    termsUseText: {
        color: Colors.primary,
        width: '100%',
        marginBottom: 10,
    },
    containingButton: {
        height: 110,
        // width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingBottom: 20,
        flexDirection: 'row',
        marginHorizontal: '7%',
    },
    button: {
        backgroundColor: Colors.primary,
        width: '47%',
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
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepG;