import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../../constants/Colors';


const AllNotifications = props => {

    const [isEnabledA, setIsEnabledA] = useState(false);
    const [isEnabledB, setIsEnabledB] = useState(false);
    const [isEnabledC, setIsEnabledC] = useState(false);
    const [isEnabledD, setIsEnabledD] = useState(false);
    const [isEnabledE, setIsEnabledE] = useState(false);
    const toggleSwitchA = () => setIsEnabledA(previousState => !previousState);
    const toggleSwitchB = () => setIsEnabledB(previousState => !previousState);
    const toggleSwitchC = () => setIsEnabledC(previousState => !previousState);
    const toggleSwitchD = () => setIsEnabledD(previousState => !previousState);
    const toggleSwitchE = () => setIsEnabledE(previousState => !previousState);

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.continer}>
                <View style={styles.continingMiddle}>
                    <Text style={styles.titelNotifications}>התראות אירועים</Text>
                    <View style={styles.buttonNotifications}>
                        <Text style={styles.textTitelButtonNotifications}>משלוח חדש במסלול שלי</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabledA ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchA}
                            value={isEnabledA}
                            style={styles.checkboxStyle}
                        />
                    </View>
                    <View style={styles.buttonNotifications}>
                        <Text style={styles.textTitelButtonNotifications}>אישור משלוח בהמתנה</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabledB ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchB}
                            value={isEnabledB}
                            style={styles.checkboxStyle}
                        />
                    </View>
                    <View style={styles.buttonNotifications}>
                        <Text style={styles.textTitelButtonNotifications}>דחיית משלוח בהמתנה</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabledC ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchC}
                            value={isEnabledC}
                            style={styles.checkboxStyle}
                        />
                    </View>
                    <View style={styles.buttonNotifications}>
                        <Text style={styles.textTitelButtonNotifications}>ביטול משלוח</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabledD ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchD}
                            value={isEnabledD}
                            style={styles.checkboxStyle}
                        />
                    </View>
                    <View style={styles.buttonNotifications}>
                        <Text style={styles.textTitelButtonNotifications}>שינוי פרטי משלוח מתוכנן</Text>
                        <Switch
                            trackColor={{ false: '#DCDCDC', true: Colors.primaryLight }}
                            thumbColor={isEnabledE ? Colors.primary : Colors.primaryLight}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchE}
                            value={isEnabledE}
                            style={styles.checkboxStyle}
                        />
                    </View>

                </View>
                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('HomePage')}>
                        <Text style={styles.textButton}>חזרה לעמוד הבית</Text>
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
    continingMiddle: {
        // height: '80%',
    },
    titelNotifications: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
    },
    buttonNotifications: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    textTitelButtonNotifications: {
        color: Colors.primary,
        fontSize: 16,
        marginBottom: 5,
        width: '75%',
    },
    checkboxStyle: {
        width: '20%',
        transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
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

export default AllNotifications;
