import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../../../constants/Colors';
import { Button } from 'react-native';


const ReceivingOrder = props => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <Text style={styles.TitelTextTop}>שתי שקיות גדולות</Text>
                <Text style={styles.TextTopBold}>תיאור <Text style={styles.TextTop}>פרטים נוספים</Text></Text>
                <View style={styles.containsTheRoutePresentation}>
                    <View style={styles.rightTheRoutePresentation}>
                        <View style={styles.rightTheRoutePresentationTextGrup2}>
                            <View>
                                <Text style={styles.rightTheRoutePresentationText}>החוב הורקנוס 7</Text>
                                <Text style={styles.rightTheRoutePresentationText}>אשדוד</Text>
                            </View>
                            <View>
                                <Text style={styles.rightTheRoutePresentationText}>רחוב האורנים 12</Text>
                                <Text style={styles.rightTheRoutePresentationText}>באר שבע</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.middleTheRoutePresentation}>
                        <Ionicons name="location-outline" size={24} color={Colors.primary} />
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <View style={styles.pointsRoute}></View>
                        <Ionicons name="location-sharp" size={24} color={Colors.primary} />

                    </View>
                    <View style={styles.leftTheRoutePresentation}>
                        <View style={styles.rightTheRoutePresentationTextGrup2}>
                            <View>
                                <Text style={styles.leftTheRoutePresentationText}>יום ב', 26 באוקטובר</Text>
                                <Text style={styles.leftTheRoutePresentationText}>22:00</Text>
                            </View>
                            <View>
                                <Text style={styles.leftTheRoutePresentationText}>יום ב', 26 באוקטובר</Text>
                                <Text style={styles.leftTheRoutePresentationText}>23:30</Text>
                            </View>
                        </View>
                    </View>
                </View>
                

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>דחה הזמנה</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonReceivingOrder} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButtonReceivingOrder}>קבל הזמנה</Text>
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
    TitelTextTop: {
        color: Colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    TextTopBold: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    TextTop: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'left',
    },
    containsTheRoutePresentation: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 20,
    },
    rightTheRoutePresentation: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '40%',
    },
    rightTheRoutePresentationTextGrup2: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    rightTheRoutePresentationText: {
        color: Colors.primary,
        textAlign: 'right',
    },
    middleTheRoutePresentation: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '10%',
    },
    pointsRoute: {
        backgroundColor: Colors.primary,
        height: 4,
        width: 4,
        borderRadius: 5,
        margin: 2.5,
    },
    leftTheRoutePresentation: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '40%',
    },
    leftTheRoutePresentationText: {
        color: Colors.primary,
        textAlign: 'left',
    },
    containingButton: {
        // height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: Colors.primaryLight,
        minWidth: '45%',
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
        padding: 15,
    },
    textButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    buttonReceivingOrder: {
        backgroundColor: Colors.primary,
        minWidth: '45%',
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
        padding: 15,
    },
    textButtonReceivingOrder: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default ReceivingOrder;
