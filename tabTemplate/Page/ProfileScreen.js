
import * as React from 'react';
import { Button, Image, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function ProfileScreen({ navigation }) {

    var menu = [];
    for (let i = 0; i < 2; i++) {
        menu.push(
            <View >
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5 }}>
                    <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                        <View style={styles.btn_circle}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }} >
                        <View style={styles.btn_circle}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Statement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                        <View style={styles.btn_circle}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Loan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.contrainer}>
            <ScrollView style={styles.scrollView}>
                <Image style={styles.bg}></Image>
                <View style={[styles.row, { position: 'absolute' }]}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={styles.header_font}>Profile screen</Text>
                        <Text >176*********787</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Image style={styles.header_img}></Image>
                    </View>
                </View>
                <View style={[styles.card,styles.shadow]}>
                    {menu}
                </View>
                <View style={[styles.row, { marginVertical: '2%' }]}>
                    <Text >Balance</Text>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.card_small,styles.shadow ,{ marginRight: 5 }]}>
                        <Text style={{ textAlign: 'left', margin: hp(2) }}>368.17</Text>
                    </View>
                    <View style={[styles.card_small,styles.shadow, { marginLeft: 5 }]}>
                        <Text style={{ textAlign: 'left', margin: hp(2) }}>282.34</Text>
                    </View>
                </View>
                <View style={[styles.row,{ marginVertical: '2%' }]}>
                    <View style={[styles.card_row,styles.shadow]}>
                        <Text style={{ textAlign: 'left' }}>47.90%</Text>
                        <Text style={{ textAlign: 'left' }}>Resource</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
        height: hp(100)
    },
    bg: {
        height: hp(30),
        backgroundColor: '#35d0ba',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    card: {
        width: wp(90),
        height: hp(27),
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: -80,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    card_small: {
        flex: 1,
        flexDirection: 'column',
        height: hp(20),
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    card_row: {
        flex: 1,
        height: hp(15),
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: wp(2)


    },
    row: {
        flexDirection: 'row',
        marginHorizontal: wp(7),
    },
    header_img: {
        width: 80,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 40,
        alignSelf: 'flex-end',
    },
    header_font: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    btn_circle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#70DBD1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shadow: {
        /*---Shadow--- */
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }

});
export { ProfileScreen };