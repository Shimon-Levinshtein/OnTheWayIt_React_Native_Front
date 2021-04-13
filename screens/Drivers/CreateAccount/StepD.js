import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import { useSelector, useDispatch } from 'react-redux';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import { TimePicker } from 'react-native-simple-time-picker';
// import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import Colors from '../../../constants/Colors';

const StepD = props => {

    const [desiredDelivery, setDesiredDelivery] = useState([]);
    const [date, setDate] = useState(new Date());
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const handleChange = (event, date) => {
        console.log(event);
        console.log(date);
    //   setHours(value.hours);
    //   setMinutes(value.minutes);
    };
    

    const handlerNextLevel = () => {
        //   props.navigation.navigate('StepD');
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
        console.log(desiredDelivery);
    };
    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>הוספת מסלול נסיעה קבוע</Text>
                    <Text style={styles.text}> שלב 4/7</Text>
                </View>

                <View style={styles.skipStepContiner}>
                    <Text style={styles.skipStepText}>אם אין לך מסלול נסיעה קבוע תוכל לדלג על עמוד זה</Text>
                    <TouchableOpacity style={styles.buttonSkipStep} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButtonSkipStep}>דילוג</Text>
                    </TouchableOpacity>
                </View>

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
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date} // Initial date from state
                        mode="date" // The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                display: 'none',
                                position: 'absolute',
                                left: 0,
                                marginLeft: 0,
                                bottom: 13
                            },
                            dateInput: {
                                borderWidth: 0,
                                marginBottom: 16,
                            },
                            dateText: {
                                fontSize: 15,
                                color: Colors.primary,
                                textAlign: "left"
                            }
                        }}
                        onDateChange={(date) => { setDate(date) }}
                    />
                    <View >
                        <Text>
                            Selected Time: {hours}:{minutes}
                        </Text>
                        {/* <TimePicker value={{hours, minutes}} onChange={handleChange} /> */}
                        <RNDateTimePicker mode="time" value={new Date()} onChange={handleChange}/>
                        {/* <TimePicker
                            selectedHours={selectedHours}
                            selectedMinutes={selectedMinutes}
                            onChange={(hours, minutes) => {
                                setSelectedHours(hours);
                                setSelectedMinutes(minutes);
                            }}
                        /> */}
                    </View>
                </View>

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
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginHorizontal: '10%',
        marginTop: 8
    },
    skipStepContiner: {
        marginHorizontal: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    skipStepText: {
        color: Colors.primary,
        width: '55%',
    },
    buttonSkipStep: {
        backgroundColor: Colors.primary,
        width: '30%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textButtonSkipStep: {
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
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
        width: 200,
        marginTop: 20,
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 18,
        padding: 7,
        textAlign: 'right',
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
    // ***************************

});

export default StepD;