
import * as React from 'react';
import { Button, Image, Text, StyleSheet, View } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Image style={styles.bg}></Image>
            <View style={styles.header_top}>
                <Text>Profile screen</Text>
                <Image style={styles.header_img}></Image>
            </View>
            
            <Image style={styles.box}></Image>


        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        height: '30%',
        backgroundColor: '#35d0ba',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    box: {
        width: '90%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: -50,
        alignSelf: 'center'
    },
    header_top:{
        position:'absolute',
        marginHorizontal:'7%'
    },
    header_img:{
        width: '90%',
        height: '30%',
    }

});
export { ProfileScreen };