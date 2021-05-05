import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../../../constants/Colors';


const TabA = props => {

    const dataNow = new Date();
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateDisplay, setDateDisplay] = useState(dataNow.toLocaleDateString('en-GB'));
    const [hour, setHour] = useState(new Date());
    const [hourDisplay, setHourDisplay] = useState(("0" + dataNow.getHours()).slice(-2) + ":" + ("0" + dataNow.getMinutes()).slice(-2));
    const [showTime, setShowTime] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const onChangeDate = (event, selectedDate) => {
        setShowDate(false);
        setDate(selectedDate);
        setDateDisplay(selectedDate.toLocaleDateString('en-GB'));
    };

    const onChangeHour = (event, selectedDate) => {
        setShowTime(false);
        setHour(selectedDate);
        setHourDisplay(("0" + selectedDate.getHours()).slice(-2) + ":" + ("0" + selectedDate.getMinutes()).slice(-2));

    };
 
    return (
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

            <TouchableOpacity style={styles.buttonCounterRoute}>
                <Ionicons name="swap-vertical" size={24} color={Colors.primary} />
                <Text style={styles.buttonCounterRouteText}>הוספת מסלול נגדי</Text>
            </TouchableOpacity>

            <View style={styles.boundaryLine}></View>

            <View style={styles.departureTimeContiner}>
                <MaterialIcons name="watch-later" size={24} color={Colors.primary} />
                <Text style={styles.departureTimeBoldText}>זמן יציאה</Text>
                <Text style={styles.departureTimeText}>* אופציונלי</Text>
            </View>
            <View style={styles.containerDatePicker}>
                <TouchableOpacity style={styles.datePickerStyle} onPress={() => setShowDate(true)}>
                    <Text style={styles.dateTextStyle}>{dateDisplay}</Text>
                    <AntDesign name="calendar" size={24} color={Colors.primary} />
                    {showDate && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                </TouchableOpacity>
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

            <TouchableOpacity style={styles.addRoute}>
                <Text style={styles.textAddRoute}>+ הוסף מסלול נוסף</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
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
    },
    labelTextImput: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
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
    },
    addRoute: {
        paddingHorizontal: '8%',
        height: 50,
        justifyContent: 'center',
    },
    textAddRoute: {
        textAlign: 'left',
        color: Colors.primary,
        fontSize: 16,
        textDecorationLine: 'underline',
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
    containerDatePicker: {
        marginHorizontal: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    datePickerStyle: {
        width: '65%',
        marginTop: 20,
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
    dateTextStyle: {
        fontSize: 15,
        color: Colors.primary,
        marginLeft: "15%"
    },
    hourPickerStyle: {
        width: '30%',
        marginTop: 20,
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
});

export default TabA;