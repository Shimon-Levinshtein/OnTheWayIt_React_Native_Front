import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../../../constants/Colors';


const TabB = props => {

    const dataNow = new Date();

    const [listRoutes, setListRoutes] = useState([
        { from: 'מנחם 10, ירושלים', to: 'ישעיהו 5, בני ברק' },
        { from: 'אליהו הנביא, בני ברק', to: 'הנרקיסים, חיפה' },
        { from: 'הירדן, ביתר', to: 'מאור חיים, צפת' },
    ]);
    const [activeRoute, setActiveRoute] = useState(1);

    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateDisplay, setDateDisplay] = useState(dataNow.toLocaleDateString('en-GB'));
    const [hour, setHour] = useState(new Date());
    const [hourDisplay, setHourDisplay] = useState(("0" + dataNow.getHours()).slice(-2) + ":" + ("0" + dataNow.getMinutes()).slice(-2));
    const [showTime, setShowTime] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handlerRegularRoutes = () => {
        let activeStyleBackgroundColor = { backgroundColor: '#BEBEBE' };
        let activeStyleBorderColor = { borderColor: '#BEBEBE' };
        let activeStyleColor = { color: '#BEBEBE' };
        const checkActiveFun = num => {
            if (num === activeRoute) {
                activeStyleBackgroundColor.backgroundColor = Colors.primary;
                activeStyleBorderColor.borderColor = Colors.primary;
                activeStyleColor.color = Colors.primary;
            } else {
                activeStyleBackgroundColor.backgroundColor = '#BEBEBE';
                activeStyleBorderColor.borderColor = '#BEBEBE';
                activeStyleColor.color = '#BEBEBE';
            };
        };
        return (
            <View style={styles.continingRegularRoutes}>
                {listRoutes.map((element, index) => {
                    checkActiveFun(index);

                    return (
                        < TouchableOpacity key={index}
                            style={{ ...styles.buttonRegularRoutes, ...activeStyleBorderColor }}
                            onPress={() => setActiveRoute(index)}
                        >
                            <View style={{ ...styles.roundRegularRoutes, ...activeStyleBackgroundColor }}>
                                <Text style={styles.textRoundRegularRoutes}>{index + 1}</Text>
                            </View>
                            <Text style={{ ...styles.textRegularRoutes, ...activeStyleColor }}>{element.from}</Text>
                            <AntDesign name="arrowleft" size={18} color={activeStyleColor.color} />
                            <Text style={{ ...styles.textRegularRoutes, ...activeStyleColor }}>{element.to}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View >
        )
    };

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

            <View style={styles.trackTitle}>
                <Text style={styles.textTrackTitle}>בחר מסלול נסיעה רצוי</Text>
            </View>

            {handlerRegularRoutes()}

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
        </View>
    )
};


const styles = StyleSheet.create({
    trackTitle: {
        paddingHorizontal: '8%',
        marginBottom: 10,
    },
    textTrackTitle: {
        color: Colors.primary,
        fontSize: 15,
        textAlign: 'left',
    },
    continingRegularRoutes: {
        paddingHorizontal: '8%',
    },
    buttonRegularRoutes: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        padding: 7,
        textAlign: 'right',
        flexDirection: 'row',
        alignItems: 'center',
    },
    roundRegularRoutes: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: 5
    },
    textRoundRegularRoutes: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textRegularRoutes: {
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

export default TabB;