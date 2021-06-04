import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo, Ionicons, MaterialIcons, AntDesign, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../../constants/Colors';
import { Button } from 'react-native';


const AddRegularRoute = props => {

    const dataNow = new Date();
    // Opposite
    const dataNowOpposite = new Date();
    dataNowOpposite.setHours(dataNowOpposite.getHours() + 3);

    const [desiredDelivery, setDesiredDelivery] = useState([]);

    const WhatToTakeButton = (buttonNeme) => {
        if (desiredDelivery.includes(buttonNeme)) {
            const index = desiredDelivery.indexOf(buttonNeme);
            const newArr = [...desiredDelivery];
            newArr.splice(index, 1);
            setDesiredDelivery(newArr);
        } else {
            setDesiredDelivery([...[buttonNeme], ...desiredDelivery]);
        };
    };


    const [counterRoute, setCounterRoute] = useState(false);
    const [hour, setHour] = useState(new Date());
    const [hourDisplay, setHourDisplay] = useState(("0" + dataNow.getHours()).slice(-2) + ":" + ("0" + dataNow.getMinutes()).slice(-2));
    const [showTime, setShowTime] = useState(false);
    // Opposite
    const [hourOpposite, setHourOpposite] = useState(new Date());
    const [hourDisplayOpposite, setHourDisplayOpposite] = useState(("0" + dataNowOpposite.getHours()).slice(-2) + ":" + ("0" + dataNowOpposite.getMinutes()).slice(-2));
    const [showTimeOpposite, setShowTimeOpposite] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const onChangeHour = (event, selectedDate) => {
        setShowTime(false);
        setHour(selectedDate);
        setHourDisplay(("0" + selectedDate.getHours()).slice(-2) + ":" + ("0" + selectedDate.getMinutes()).slice(-2));

    };
    // Opposite

    const onChangeHourOpposite = (event, selectedDate) => {
        setShowTimeOpposite(false);
        setHourOpposite(selectedDate);
        setHourDisplayOpposite(("0" + selectedDate.getHours()).slice(-2) + ":" + ("0" + selectedDate.getMinutes()).slice(-2));

    };


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>

                <View >
                    <View style={styles.containingInputs}>
                        <View style={styles.labelTextImputContiner}>
                            <Entypo name="location-pin" size={24} color={Colors.primary} />
                            <Text style={styles.labelTextImput}>נקודת יציאה</Text>
                        </View>
                        <TextInput style={styles.input} />
                        <View style={styles.labelTextImputContiner}>
                            <Entypo name="location-pin" size={24} color={Colors.primary} />
                            <Text style={styles.labelTextImput}>נקודת סיום</Text>
                        </View>
                        <TextInput keyboardType='numeric' style={styles.input} />
                    </View>

                    <TouchableOpacity style={styles.buttonCounterRoute} onPress={() => setCounterRoute(counterRoute ? false : true)}>
                        <Ionicons name="swap-vertical" size={24} color={Colors.primary} />
                        <Text style={styles.buttonCounterRouteText}>הוספת מסלול נגדי</Text>
                    </TouchableOpacity>

                    {counterRoute && <View style={styles.viewAllOppositeRoute}>
                        <View style={styles.labelTextImputContiner}>
                            <MaterialCommunityIcons name="swap-vertical-bold" size={24} color={Colors.primary} />
                            <Text style={styles.labelTextImput}>מסלול נגדי</Text>
                        </View>
                        <View style={styles.viewOppositeRoute}>
                            <Text style={styles.textOppositeRoute}>מנחם 10, ירושלים</Text>
                            <AntDesign name="arrowleft" size={18} color={Colors.primary} />
                            <Text style={styles.textOppositeRoute}>ישעיהו 5, בני ברק</Text>
                        </View>
                    </View>}

                    <View style={styles.boundaryLine}></View>

                    <View style={styles.departureTimeContiner}>
                        <FontAwesome5 name="calendar-alt" size={24} color={Colors.primary} />
                        <Text style={styles.departureTimeBoldText}>ימים בשבוע</Text>
                        <Text style={styles.departureTimeText}>* אופציונלי</Text>
                    </View>
                    <View style={styles.daysWeekContiner}>
                        <TouchableOpacity
                            style={desiredDelivery.includes('א') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('א')}>
                            <Text style={desiredDelivery.includes('א') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>א</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ב') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ב')}>
                            <Text style={desiredDelivery.includes('ב') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ב</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ג') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ג')}>
                            <Text style={desiredDelivery.includes('ג') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ג</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ד') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ד')}>
                            <Text style={desiredDelivery.includes('ד') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ד</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ה') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ה')}>
                            <Text style={desiredDelivery.includes('ה') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ה</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ו') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ו')}>
                            <Text style={desiredDelivery.includes('ו') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ו</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={desiredDelivery.includes('ז') ? styles.daysWeekButtonBigFocus : styles.daysWeekButtonBig}
                            onPress={() => WhatToTakeButton('ז')}>
                            <Text style={desiredDelivery.includes('ז') ? styles.daysWeekTextButtonFocus : styles.daysWeekTextButton}>ז</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerDatePicker}>

                        <View style={styles.labelTextImputContiner}>
                            <MaterialIcons name="watch-later" size={24} color={Colors.primary} style={{ marginRight: 4 }} />
                            <Text style={styles.labelTextImput}>שעת יציאה</Text>
                        </View>
                        <TouchableOpacity style={styles.hourPickerStyle} onPress={() => setShowTime(true)}>
                            <Text style={styles.hourTextStyle}>{hourDisplay}</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color={Colors.primary} />
                            {showTime && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={hour}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeHour}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    {/* Opposite */}
                    {counterRoute && <View style={styles.containerDatePicker}>

                        <View style={styles.labelTextImputContiner}>
                            <MaterialIcons name="watch-later" size={24} color={Colors.primary} style={{ marginRight: 4 }} />
                            <Text style={styles.labelTextImput}>שעת חזרה</Text>
                        </View>
                        <TouchableOpacity style={styles.hourPickerStyle} onPress={() => setShowTimeOpposite(true)}>
                            <Text style={styles.hourTextStyle}>{hourDisplayOpposite}</Text>
                            <MaterialIcons name="keyboard-arrow-down" size={24} color={Colors.primary} />
                            {showTimeOpposite && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={hourOpposite}
                                    mode='time'
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChangeHourOpposite}
                                />
                            )}
                        </TouchableOpacity>
                    </View>}

                    <View style={styles.departureTimeContiner}>
                        <Text style={styles.departureTimeBoldText}>הגדר זמן משוער או מדוייק</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabled ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                        <Text style={styles.departureTimeBoldText}>{'מדוייק'}</Text>
                    </View>

                </View>
                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>אישור</Text>
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
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    containingInputs: {
        color: Colors.primary,
        width: '100%',
        paddingHorizontal: '8%',
    },
    labelTextImputContiner: {
        flexDirection: 'row',
        alignContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 5,
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
        textAlign: 'left',
    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
        textAlign: 'right',
    },
    buttonCounterRoute: {
        height: 40,
        marginHorizontal: '8%',
        backgroundColor: Colors.primaryLight,
        flexDirection: 'row',
        alignContent: 'flex-end',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCounterRouteText: {
        color: Colors.primary,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    viewAllOppositeRoute: {
        marginHorizontal: '7%',
        marginTop: 13,
    },
    viewOppositeRoute: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textOppositeRoute: {
        color: Colors.primary,
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: 5
    },
    boundaryLine: {
        backgroundColor: Colors.primaryLight,
        marginHorizontal: '8%',
        height: 2,
        marginVertical: 20,
    },
    departureTimeContiner: {
        marginHorizontal: '8%',
        flexDirection: 'row',
        alignContent: 'flex-end',
        height: 40,
        alignItems: 'center',
        marginBottom: 1,
    },
    departureTimeBoldText: {
        color: Colors.primary,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    departureTimeText: {
        color: Colors.primary,
        marginHorizontal: 10,
        fontSize: 12,
    },
    daysWeekContiner: {
        flexDirection: 'row',
        marginHorizontal: '8%',
        marginBottom: 20,
    },
    daysWeekButtonBig: {
        borderColor: Colors.primary,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 3,
    },
    daysWeekButtonBigFocus: {
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 3,
    },
    daysWeekTextButton: {
        color: Colors.primary,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    daysWeekTextButtonFocus: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    },
    containerDatePicker: {
        marginHorizontal: '8%',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    hourPickerStyle: {
        width: '30%',
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hourTextStyle: {
        fontSize: 15,
        color: Colors.primary,
        marginLeft: "15%"
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
        marginTop: 25,
        marginBottom: 30,
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
});

export default AddRegularRoute;
