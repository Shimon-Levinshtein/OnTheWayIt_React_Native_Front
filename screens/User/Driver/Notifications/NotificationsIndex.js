import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../../constants/Colors';


const NotificationsIndex = props => {
    return (
        <View style={styles.continer}>
            <View style={styles.continingMiddle}>
                <Text style={styles.titelNotifications}>שלא נקראו (2)</Text>
                <TouchableOpacity style={styles.buttonNotifications} onPress={() => props.navigation.navigate('DynamicScreensDriverStack', { screen: 'DynamicScreensDriverReceivingOrder' })}>
                    <Text style={styles.textTitelButtonNotifications}>שתי שקיות גדולות</Text>
                    <Text style={styles.textButtonNotifications}>לפני 4 שעות</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNotifications} onPress={() => props.navigation.navigate('DynamicScreensDriverStack', { screen: 'DynamicScreensDriverReceivingOrder' })}>
                    <Text style={styles.textTitelButtonNotifications}>שולחן משרדי </Text>
                    <Text style={styles.textButtonNotifications}>לפני יום</Text>
                </TouchableOpacity>
                <Text style={styles.titelNotifications}>נקראו</Text>
                <TouchableOpacity style={styles.buttonNotifications} onPress={() => props.navigation.navigate('DynamicScreensDriverStack', { screen: 'DynamicScreensDriverReceivingOrder' })}>
                    <Text style={styles.textTitelButtonNotifications}>שתי שקיות גדולות</Text>
                    <Text style={styles.textButtonNotifications}>לפני 4 שעות</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNotifications} onPress={() => props.navigation.navigate('DynamicScreensDriverStack', { screen: 'DynamicScreensDriverReceivingOrder' })}>
                    <Text style={styles.textTitelButtonNotifications}>שולחן משרדי </Text>
                    <Text style={styles.textButtonNotifications}>לפני יום</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.containingButton}>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('NotificationsDriverAllNotifications')}>
                    <Text style={styles.textButton}>הצגת כל ההתראות</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('NotificationsDriverSurpluses')}>
                    <Text style={styles.textButton}>העדפות</Text>
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
    continingMiddle: {
        height: '80%',
    },
    titelNotifications: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    buttonNotifications: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    textTitelButtonNotifications: {
        color: Colors.primary,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textButtonNotifications: {
        color: Colors.primary,
    },
    containingButton: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',

    },
    button: {
        backgroundColor: Colors.primaryLight,
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default NotificationsIndex;
