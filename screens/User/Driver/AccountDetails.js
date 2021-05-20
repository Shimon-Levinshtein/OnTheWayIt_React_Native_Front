import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../../constants/Colors';


const DriverPersonalArea = props => {

    return (
        <ScrollView style={styles.scrollView}>


            <View style={styles.continer}>
                <Text style={styles.titelBold}>פרטים אישים</Text>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>שם</Text>
                    <Text style={styles.textDetails}>ברוך</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>גיל</Text>
                    <Text style={styles.textDetails}>30</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>ת''ז</Text>
                    <Text style={styles.textDetails}>321655987</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>אימייל</Text>
                    <Text style={styles.textDetails}>baruch@gmail.com</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>טלפון</Text>
                    <Text style={styles.textDetails}>052-8563254</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>עיר</Text>
                    <Text style={styles.textDetails}>ירושלים</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boundaryLine}></View>

                <Text style={styles.titelBold}>דירוג (נקבע ע''י הלקוחת)</Text>
                <View style={styles.continingStars}>
                    <FontAwesome style={styles.star} name="star" size={22} color={Colors.primary} />
                    <FontAwesome style={styles.star} name="star" size={22} color={Colors.primary} />
                    <FontAwesome style={styles.star} name="star" size={22} color={Colors.primary} />
                    <Feather style={styles.star} name="star" size={22} color={Colors.primary} />
                    <Feather style={styles.star} name="star" size={22} color={Colors.primary} />
                </View>

                <View style={styles.boundaryLine}></View>

                <Text style={styles.titelBold}>אמצעי תחבורה</Text>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>רכב</Text>
                    {/* <Text style={styles.textDetails}>ברוך</Text> */}
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>כמות נוסעים</Text>
                    <Text style={styles.textDetails}>2</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>מס' ירוק / מס' עוסק</Text>
                    <Text style={styles.textDetails}>321655987</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>מס' רכב</Text>
                    <Text style={styles.textDetails}>2222333311</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelText}>מס' רשיון נהיגה</Text>
                    <Text style={styles.textDetails}>2222333311</Text>
                    <TouchableOpacity style={styles.buttonEditDetails}>
                        <Text style={styles.buttonEditDetailsText}>ערוך</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boundaryLine}></View>

                <Text style={styles.titelBold}>סוג משלוחים רצוי</Text>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>מעטפות</Text>
                    <TouchableOpacity style={styles.buttonEditDetailsB}>
                        <Text style={styles.buttonEditDetailsText}>בחר קטגוריות נוספות</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boundaryLine}></View>

                <Text style={styles.titelBold}>אמצעי תשלום</Text>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>כרטיס אשרי המתיים בספרות 2244</Text>
                    <TouchableOpacity style={styles.buttonEditDetailsB}>
                        <Text style={styles.buttonEditDetailsText}>אמצעי תשלום חדש</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boundaryLine}></View>

                <Text style={styles.titelBold}>פרטים נוספים</Text>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>תמונת פרופיל</Text>
                </View>
                <View style={styles.conrinerImageItems}>
                    <View style={styles.imageView}></View>
                    <TouchableOpacity style={styles.buttonEditDetailsB}>
                        <Text style={styles.buttonEditDetailsText}>הוסף תמונה</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>סירטון על עצמי</Text>
                </View>
                <View style={styles.conrinerImageItems}>
                    <View style={styles.imageView}></View>
                    <TouchableOpacity style={styles.buttonEditDetailsB}>
                        <Text style={styles.buttonEditDetailsText}>הוסף סירטון</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>תמונת רכב</Text>
                </View>
                <View style={styles.conrinerImageItems}>
                    <View style={styles.imageView}></View>
                    <TouchableOpacity style={styles.buttonEditDetailsB}>
                        <Text style={styles.buttonEditDetailsText}>הוסף תמונת רכב</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>חברה <Text style={styles.text}>(אופציונלי)</Text></Text>
                </View>
                <TextInput  style={styles.input} value='שם החברה או קישור לאתר החברה' />
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>פרטים נוספים <Text style={styles.text}>(אופציונלי)</Text></Text>
                </View>
                <TextInput style={styles.input} value='נהג על הכביש מעל 20 שנה' />
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>פרטים הרכב <Text style={styles.text}>(אופציונלי)</Text></Text>
                </View>
                <TextInput style={styles.input} value='טויוטה 2020' />
                <View style={styles.conrinerText3Items}>
                    <Text style={styles.titelTextB}>המלצות <Text style={styles.text}>(אופציונלי)</Text></Text>
                </View>
                <TextInput style={styles.input} value="נהג קבוע של ת''ת דרך התורה" />

                <View style={styles.containingButton}>
                    <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
                        <Text style={styles.textButton}>שמור</Text>
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
    titelBold: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
        marginVertical: 10,
    },
    conrinerText3Items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        alignItems: 'center',
        minHeight: 30,
    },
    conrinerImageItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        alignItems: 'center',
        minHeight: 30,
    },
    titelText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 13,
        paddingLeft: 5,
        width: '30%',
        textAlign: 'left',
    },
    titelTextB: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 13,
        paddingLeft: 5,
        width: '55%',
        textAlign: 'left',
    },
    textDetails: {
        color: Colors.primary,
        fontSize: 13,
        width: '50%',
        textAlign: 'left',
    },
    text: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: 'normal',
    },
    buttonEditDetails: {
        color: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 1,
        maxWidth: '20%',
        height: 27,
        shadowRadius: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonEditDetailsB: {
        color: Colors.primary,
        borderColor: Colors.primary,
        borderWidth: 1,
        maxWidth: '45%',
        height: 27,
        shadowRadius: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonEditDetailsText: {
        color: Colors.primary,
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
    boundaryLine: {
        backgroundColor: Colors.primaryLight,
        height: 2,
        marginBottom: 10,
        marginTop: 20,
    },
    continingStars: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    star: {
        marginRight: 6,
    },
    imageView: {
        width: '45%',
        height: 80,
        backgroundColor: Colors.primaryLight,

    },
    input: {
        color: Colors.primary,
        borderColor: Colors.primary,
        backgroundColor: 'white',
        height: 40,
        width: "100%",
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 14,
        padding: 9,
        textAlign: 'right',
    },
    containingButton: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.primary,
        width: '55%',
        height: 45,
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

export default DriverPersonalArea;
