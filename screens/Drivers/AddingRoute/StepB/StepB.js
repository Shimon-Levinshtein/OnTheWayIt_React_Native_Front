import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Switch, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Entypo, Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../../constants/Colors';

import TabA from './Tabs/TabA';
import TabB from './Tabs/TabB';

const StepB = props => {

    const [tabADisplay, setTabADisplay] = useState(true);
    const [tabBDisplay, setTabBDisplay] = useState(false);

    const dataNow = new Date();
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [dateDisplay, setDateDisplay] = useState(dataNow.toLocaleDateString('en-GB'));
    const [desiredDelivery, setDesiredDelivery] = useState([]);
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

    const handlerNextLevel = () => {
        props.navigation.navigate('AddingRouteDriverStepC');
    };
    const handlerTabBButton = () => {
        setTabADisplay(false);
        setTabBDisplay(true)
    };
    const handlerTabAButton = () => {
        setTabBDisplay(false)
        setTabADisplay(true);
    };

    const desiredDeliveryButton = (buttonNeme) => {
        if (desiredDelivery.includes(buttonNeme)) {
            const index = desiredDelivery.indexOf(buttonNeme);
            const newArr = [...desiredDelivery];
            newArr.splice(index, 1);
            setDesiredDelivery(newArr);
        } else {
            setDesiredDelivery([...[buttonNeme], ...desiredDelivery]);
        };
    };
    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>מה מסלול הנסיעה שלך</Text>
                    {/* <Text style={styles.text}> שלב 4/7</Text> */}
                </View>

                <View style={styles.containingTabButtons}>
                    <TouchableOpacity
                        style={tabADisplay ? styles.buttonTabActive : styles.buttonTab}
                        onPress={() => handlerTabAButton()}>
                        <Text style={styles.buttonTabText}>מסלול חדש</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tabBDisplay ? styles.buttonTabActive : styles.buttonTab}
                        onPress={() => handlerTabBButton()}>
                        <Text style={styles.buttonTabText}>המסלול הקבוע שלי</Text>
                    </TouchableOpacity>
                </View>

                {tabADisplay && <TabA />}
                {tabBDisplay && <TabB />}

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>שלב הבא</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
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
    containingTabButtons: {
        backgroundColor: Colors.primary,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 25,
    },
    buttonTab: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTabActive: {
        backgroundColor: Colors.primaryActive,
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTabText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
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
    containingButton: {
        height: 110,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
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
    button: {
        backgroundColor: 'white',
        width: '90%',
        height: 70,
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
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepB;