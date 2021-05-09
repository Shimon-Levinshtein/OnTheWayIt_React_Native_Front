import React, { useState, } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


import Colors from '../../../constants/Colors';


const StepC = props => {

    const [activeRoute, setActiveRoute] = useState(1);
    const [selectedLanguage, setSelectedLanguage] = useState(5);


    let activeStyleBackgroundColor = { backgroundColor: '#BEBEBE' };
    let activeStyleBorderColor = { borderColor: '#BEBEBE' };
    let activeStyleColor = { color: '#BEBEBE' };

    const handlerNextLevel = () => {
        props.navigation.navigate('AddingRouteDriverStepD');
    };



    return (
        <ScrollView>
            <View style={styles.continer}>
                <View style={styles.containingTitelText}>
                    <Text style={styles.titelText}>אישור מסלול</Text>
                </View>

                <View style={styles.containingMapImg}>
                    <Image source={require('./images/map.png')} style={styles.mapImg} />
                </View>

                <View style={styles.continingRegularRoutes}>
                    < TouchableOpacity key={'1'}
                        style={activeRoute == 1 ? styles.buttonRegularRoutes : { ...styles.buttonRegularRoutes, ...activeStyleBorderColor }}
                        onPress={() => {
                            setActiveRoute(1);
                        }}>
                        <View style={activeRoute == 1 ? styles.roundRegularRoutes : { ...styles.roundRegularRoutes, ...activeStyleBackgroundColor }}>
                            <Text style={styles.textRoundRegularRoutes}>{1}</Text>
                        </View>
                        <Text style={activeRoute == 1 ? styles.textRegularRoutes : { ...styles.textRegularRoutes, ...activeStyleColor }}>65 דקות</Text>
                        <Text style={activeRoute == 1 ? styles.textRegularRoutesButton : { ...styles.textRegularRoutesButton, ...activeStyleBackgroundColor }}>אופטימלי</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color={activeRoute == 1 ? Colors.primary : activeStyleColor.color} />
                    </TouchableOpacity>

                    <View style={styles.containingRouteTrackText}>
                        <Text style={styles.textRouteTrackText}>נכון לרגע התקבלו במערכת 3 משלוחים המתאימים למסלול זה סכום כולל 100 ש''ח</Text>
                        <Text style={styles.textRouteTrackTextBlack}>יתכן שיתווספו משלוחים נוספים</Text>
                    </View>

                    < TouchableOpacity key={'2'}
                        style={activeRoute == 2 ? styles.buttonRegularRoutes : { ...styles.buttonRegularRoutes, ...activeStyleBorderColor }}
                        onPress={() => {
                            setActiveRoute(2);
                        }}>
                        <View style={activeRoute == 2 ? styles.roundRegularRoutes : { ...styles.roundRegularRoutes, ...activeStyleBackgroundColor }}>
                            <Text style={styles.textRoundRegularRoutes}>{2}</Text>
                        </View>
                        <Text style={activeRoute == 2 ? styles.textRegularRoutes : { ...styles.textRegularRoutes, ...activeStyleColor }}>1 שעה</Text>
                        <Text style={activeRoute == 2 ? styles.textRegularRoutesButton : { ...styles.textRegularRoutesButton, ...activeStyleBackgroundColor }}>אגרה</Text>
                        <MaterialIcons name="arrow-forward-ios" size={18} color={activeRoute == 2 ? Colors.primary : activeStyleColor.color} />
                    </TouchableOpacity>
                </View>

                <View style={styles.containingDeviationTimeFromTrack}>
                    <Text style={styles.deviationTimeFromTrackTitle}>בחר משך זמן סטיה מהמסלול לקבלת משלוחים</Text>
                    <View style={styles.continerTimeFromTrackPickerAndText}>
                        <View style={styles.deviationTimeFromTrackPicker}>
                            <Picker
                                selectedValue={selectedLanguage}
                                style={{
                                    width: '80%', color: Colors.primary, transform: [
                                        { scaleX: 1 },
                                        { scaleY: 1 },
                                    ],
                                }}
                                dropdownIconColor={Colors.primary}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelectedLanguage(itemValue)
                                }>
                                <Picker.Item label="5 דקות" value="5 דקות" />
                                <Picker.Item label="10 דקות" value="10 דקות" />
                                <Picker.Item label="15 דקות" value="15 דקות" />
                                <Picker.Item label="20 דקות" value="20 דקות" />
                            </Picker>
                        </View>
                        <Text style={styles.deviationTimeFromTrackText}>הזמן מחושב רק לפי צד אחד ללא זמן חזרה למסלול</Text>
                    </View>
                </View>

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => handlerNextLevel()}>
                        <Text style={styles.textButton}>סיום</Text>
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
    containingMapImg: {
        marginHorizontal: '7%',
        marginVertical: 25,
    },
    mapImg: {
        height: 260,
        width: '100%',
        // resizeMode: 'stretch',
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
        justifyContent: 'space-between',
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
        width: '40%',
        color: Colors.primary,
        fontSize: 15,
        textAlign: 'left',
        marginHorizontal: 5
    },
    textRegularRoutesButton: {
        width: 90,
        height: 27,
        borderRadius: 6,
        color: 'white',
        backgroundColor: Colors.primary,
        fontSize: 15,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 2.5,
    },
    containingRouteTrackText: {
        marginBottom: 25,
    },
    textRouteTrackText: {
        color: Colors.primary,
    },
    textRouteTrackTextBlack: {
        color: 'black',
    },
    containingDeviationTimeFromTrack: {
        marginTop: 20,
        paddingHorizontal: '8%',
    },
    deviationTimeFromTrackTitle: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    continerTimeFromTrackPickerAndText: {
        width: '100%',
        flexDirection: 'row',
    },
    deviationTimeFromTrackPicker: {
        color: Colors.primary,
        borderColor: Colors.primary,
        height: 40,
        width: '55%',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20,
    },
    deviationTimeFromTrackText: {
        marginVertical: 15,
        color: Colors.primary,
        width: '45%',
        justifyContent: 'center',
        fontSize: 13,
        paddingRight: 8,
    },
    containingButton: {
        height: 110,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    button: {
        backgroundColor: Colors.primary,
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
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default StepC;