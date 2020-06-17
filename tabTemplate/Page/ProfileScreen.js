
import * as React from 'react';
import { Button, Image, Text, ScrollView, SafeAreaView, StyleSheet, View } from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.contrainer}>
            {/* <ScrollView  style={styles.scrollView}>  */}
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
            <View style={styles.card}>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 5 }}>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#70DBD1', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Card</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#77BFC7', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Statement</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#70DBD1', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Loan</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginVertical: 3 }}>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#70DBD1', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Card</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#77BFC7', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Statement</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: ('30%'), alignItems: 'center' }}>
                        <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#70DBD1', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name={'ios-images'} size={30} />
                        </View>
                        <Text style={{ textAlign: 'center' }}>Loan</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.row, { marginVertical: '2%' }]}>
                <Text >Balance</Text>
            </View>
            <View style={[styles.row, {}]}>
                <View style={{ width: '50%', height: '45%', flexDirection: 'column' }}>
                    <View style={styles.card_small}>
                        <Text style={{ textAlign: 'left' }}>368.17</Text>
                    </View>
                </View>
                <View style={{ width: '50%', height: '45%', flexDirection: 'column' }}>
                    <View style={styles.card_small}>
                        <Text style={{ textAlign: 'left' }}>282.34</Text>
                    </View>
                </View>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    bg: {
        height: '30%',
        backgroundColor: '#35d0ba',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    card: {
        width: '90%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: -60,
        alignSelf: 'center'
    },
    card_small: {
        width: '97%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center'
    },
    card_row: {
        width: '97%',
        height: '50%',
        backgroundColor: 'red',
        borderRadius: 10,
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        marginHorizontal: '7%',
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
    }

});
export { ProfileScreen };