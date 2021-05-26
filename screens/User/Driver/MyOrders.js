import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import { Button } from 'react-native';


const DeliveriesOnMyRoute = props => {

    return (
        <View style={styles.continer}>
                <ScrollView style={styles.scrollView}>
                {/* StatusConfirmed */}
                <View style={styles.continningStatusConfirmed}>
                    <View style={styles.topViewStatusConfirmed}>
                        <View style={styles.topViewHalfRightStatusConfirmed}>
                            <Text style={styles.TextBoldTopViewHalfRightStatusConfirmed}>שתי שקיות גדולות</Text>
                            <Text style={styles.TextTopViewHalfRightStatusConfirmed}>סטטוס: מאושר</Text>
                            <Text style={styles.TextTopViewHalfRightStatusConfirmed}>המשלוחן יגיע לאסוף את המשלוח במועד הנקוב</Text>
                        </View>
                        <View style={styles.topViewHalfLeftStatusConfirmed}>
                            <TouchableOpacity>
                                <Ionicons name="trash" size={25} style={styles.iconTrashStatusConfirmed} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomViewStatusConfirmed}>
                        <TouchableOpacity style={styles.bottomButtonViewStatusConfirmed}>
                            <Text style={styles.bottomTextButtonViewStatusConfirmed}>צפיה בפרטי המשלוח</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtonViewStatusConfirmed}>
                            <Text style={styles.bottomTextButtonViewStatusConfirmed}>יצירת קשר עם המשלוחן</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
        </ScrollView>
                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>חזרה לאזור האישי</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        // paddingTop: 30,
        marginBottom: 20,
    },
    // StatusConfirmed
    continningStatusConfirmed: {
        marginHorizontal: '7%',
        backgroundColor: Colors.primary,
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    topViewStatusConfirmed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topViewHalfRightStatusConfirmed: {

    },
    TextBoldTopViewHalfRightStatusConfirmed: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
    TextTopViewHalfRightStatusConfirmed: {
        color: 'white',
        fontSize: 13,
    },
    topViewHalfLeftStatusConfirmed: {
    },
    iconTrashStatusConfirmed: {
        color: 'white',
    },
    bottomViewStatusConfirmed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomButtonViewStatusConfirmed: {
        backgroundColor: Colors.primaryLight,
        width: '47%',
        minHeight: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        padding: 4,
    },
    bottomTextButtonViewStatusConfirmed: {
        color: Colors.primary,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containingButton: {
        // height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: Colors.primaryLight,
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
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default DeliveriesOnMyRoute;
