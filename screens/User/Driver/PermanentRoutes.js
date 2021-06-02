import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign, Entypo } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import { Button } from 'react-native';


const DeliveriesOnMyRoute = props => {

    return (
        <View style={styles.continer}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.trackTitle}>
                    <Text style={styles.textTrackTitle}>מסלולי נסיעה קבועים</Text>
                </View>
                <View style={styles.continingRegularRoutes}>
                    <View style={styles.ViewRegularRoutes}>
                        <View style={styles.ViewRegularRoutesTop}>
                            <Text style={styles.textRegularRoutes}>מנחם 10, ירושלים</Text>
                            <AntDesign name="arrowleft" size={18} color={Colors.primary} />
                            <Text style={styles.textRegularRoutes}>ישעיהו 5, בני ברק</Text>
                        </View>
                        <View style={styles.ViewRegularRoutesBottom}>
                            <TouchableOpacity style={styles.TrackButton} onPress={() => props.navigation.navigate('UserDriverLevelTwoAddRegularRoute')}>
                                <Text style={styles.textTrackButton}>ערוך מסלול</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TrackButton} onPress={() => { }}>
                                <Text style={styles.textTrackButton}>מחק מסלול</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ViewRegularRoutes}>
                        <View style={styles.ViewRegularRoutesTop}>
                            <Text style={styles.textRegularRoutes}>מנחם 10, ירושלים</Text>
                            <AntDesign name="arrowleft" size={18} color={Colors.primary} />
                            <Text style={styles.textRegularRoutes}>ישעיהו 5, בני ברק</Text>
                        </View>
                        <View style={styles.ViewRegularRoutesTop}>
                            <Text style={styles.textRegularRoutes}>ימים א',ד'</Text>
                            <Text style={styles.textRegularRoutes}>זמן יציאה 8:00</Text>
                            <Text style={styles.textRegularRoutes}>זמן חזרה 14:00</Text>
                        </View>
                        <View style={styles.ViewRegularRoutesBottom}>
                            <TouchableOpacity style={styles.TrackButton} onPress={() => props.navigation.navigate('UserDriverLevelTwoAddRegularRoute')}>
                                <Text style={styles.textTrackButton}>ערוך מסלול</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.TrackButton} onPress={() => { }}>
                                <Text style={styles.textTrackButton}>מחק מסלול</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >

            </ScrollView>
            <View style={styles.containingButton}>
                <TouchableOpacity style={styles.buttonEdit} onPress={() => props.navigation.navigate('UserDriverLevelTwoAddRegularRoute')}>
                    <Entypo name="plus" size={26} color={Colors.primary} />
                    <Text style={styles.textButtonEdit}>הוסף מסלול</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                    <Text style={styles.textButton}>אישור</Text>
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
    trackTitle: {
        paddingHorizontal: '8%',
        marginBottom: 20,
        marginTop: 25,
    },
    textTrackTitle: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    continingRegularRoutes: {
        paddingHorizontal: '8%',
    },
    ViewRegularRoutes: {
        color: Colors.primary,
        borderColor: Colors.primary,
        minHeight: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 30,
        borderRadius: 10,
        padding: 12,
    },
    ViewRegularRoutesTop: {
        textAlign: 'right',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
    },
    textRegularRoutes: {
        color: Colors.primary,
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 5
    },
    ViewRegularRoutesBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 7,
    },
    TrackButton: {
        justifyContent: 'center',
    },
    textTrackButton: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    containingButton: {
        // height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    buttonEdit: {
        backgroundColor: Colors.primaryLight,
        minWidth: '40%',
        height: 50,
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    button: {
        backgroundColor: Colors.primary,
        minWidth: '30%',
        paddingHorizontal: 10,
        height: 50,
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
    textButtonEdit: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default DeliveriesOnMyRoute;
