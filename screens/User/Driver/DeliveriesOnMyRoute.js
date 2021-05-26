import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../../constants/Colors';
import { Button } from 'react-native';


const DeliveriesOnMyRoute = props => {

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
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
                {/* StatusConfirmed */}
                <View style={styles.continningStatusConfirmed}>
                    <View style={styles.topViewStatusConfirmed}>
                        <View style={styles.topViewHalfRightStatusConfirmed}>
                            <Text style={styles.TextBoldTopViewHalfRightStatusConfirmed}>שתי שקיות גדולות</Text>
                            <Text style={styles.TextTopViewHalfRightStatusConfirmed}>סטטוס: מאושר! ממתין לך במועד המשלוח</Text>
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
                            <Text style={styles.bottomTextButtonViewStatusConfirmed}>יצירת קשר עם השולח</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* StatusAwaitingForConfirm */}
                <View style={styles.continningStatusAwaitingForConfirm}>
                    <View style={styles.topViewStatusAwaitingForConfirm}>
                        <View style={styles.topViewHalfRightStatusAwaitingForConfirm}>
                            <Text style={styles.TextBoldTopViewHalfRightStatusAwaitingForConfirm}>שולחן משרדי</Text>
                            <Text style={styles.TextTopViewHalfRightStatusAwaitingForConfirm}>סטטוס: ממתין לאישור לקוח</Text>
                        </View>
                        <View style={styles.topViewHalfLeftStatusAwaitingForConfirm}>
                            <TouchableOpacity>
                                <Ionicons name="trash" size={25} style={styles.iconTrashStatusAwaitingForConfirm} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomViewStatusAwaitingForConfirm}>
                        <TouchableOpacity style={styles.bottomButtonViewStatusAwaitingForConfirm}>
                            <Text style={styles.bottomTextButtonViewStatusAwaitingForConfirm}>צפיה בפרטי המשלוח</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.bottomButtonViewStatusAwaitingForConfirm}>
                            <Text style={styles.bottomTextButtonViewStatusAwaitingForConfirm}>יצירת קשר עם הלקוח</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
                {/* StatusWaitingYourConfirm */}
                <View style={styles.continningStatusWaitingYourConfirm}>
                    <View style={styles.topViewStatusWaitingYourConfirm}>
                        <View style={styles.topViewHalfRightStatusWaitingYourConfirm}>
                            <Text style={styles.TextBoldTopViewHalfRightStatusWaitingYourConfirm}>ארגז ספרים</Text>
                            <Text style={styles.TextTopViewHalfRightStatusWaitingYourConfirm}>סטטוס: ממתין לאישורך</Text>
                        </View>
                        <View style={styles.topViewHalfLeftStatusWaitingYourConfirm}>
                            <TouchableOpacity>
                                <Ionicons name="trash" size={25} style={styles.iconTrashStatusWaitingYourConfirm} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomViewStatusWaitingYourConfirm}>
                        <TouchableOpacity style={styles.bottomButtonViewStatusWaitingYourConfirm}>
                            <Text style={styles.bottomTextButtonViewStatusWaitingYourConfirm}>צפיה בפרטי המשלוח</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButtonViewStatusWaitingYourConfirm}>
                            <Text style={styles.bottomTextButtonViewStatusWaitingYourConfirm}>קבל משלוח</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>חזרה לאזור האישי</Text>
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
    // StatusConfirmed
    continningStatusConfirmed: {
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
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    bottomTextButtonViewStatusConfirmed: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: 'bold',
    },
    // StatusAwaitingForConfirm
    continningStatusAwaitingForConfirm: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Colors.primary,
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    topViewStatusAwaitingForConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topViewHalfRightStatusAwaitingForConfirm: {

    },
    TextBoldTopViewHalfRightStatusAwaitingForConfirm: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    TextTopViewHalfRightStatusAwaitingForConfirm: {
        color: Colors.primary,
        fontSize: 13,
    },
    topViewHalfLeftStatusAwaitingForConfirm: {
    },
    iconTrashStatusAwaitingForConfirm: {
        color: Colors.primary,
    },
    bottomViewStatusAwaitingForConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomButtonViewStatusAwaitingForConfirm: {
        backgroundColor: Colors.primaryLight,
        width: '47%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    bottomTextButtonViewStatusAwaitingForConfirm: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: 'bold',
    },
    // StatusWaitingYourConfirm
    continningStatusWaitingYourConfirm: {
        backgroundColor: Colors.primaryLight,
        borderRadius: 15,
        padding: 12,
        marginTop: 25,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    topViewStatusWaitingYourConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topViewHalfRightStatusWaitingYourConfirm: {

    },
    TextBoldTopViewHalfRightStatusWaitingYourConfirm: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
    },
    TextTopViewHalfRightStatusWaitingYourConfirm: {
        color: Colors.primary,
        fontSize: 13,
    },
    topViewHalfLeftStatusWaitingYourConfirm: {
    },
    iconTrashStatusWaitingYourConfirm: {
        color: Colors.primary,
    },
    bottomViewStatusWaitingYourConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomButtonViewStatusWaitingYourConfirm: {
        backgroundColor: Colors.primary,
        width: '47%',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 15,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 8,
    },
    bottomTextButtonViewStatusWaitingYourConfirm: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    containingButton: {
        // height: 100,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginVertical: 30,
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
