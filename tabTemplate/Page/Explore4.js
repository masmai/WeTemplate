import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { Category, Card,BigCard } from '../Component/'

const { height, width } = Dimensions.get('window')

class Explore4 extends Component {

    componentDidMount() {
        // this.startHeaderHeight = 80
        // if (Platform.OS == 'android') {
        //     this.startHeaderHeight = 100 + StatusBar.currentHeight
        // }
    }

    render() {
        return (<SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, height: this.startHeaderHeight, backgroundColor: 'white', }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>

                </View>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                        {this.renderCategorys()}
                        {this.renderCards()}

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>);
    }

    



    

    renderCategorys() {
        return <View>
            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                What can we help you find, Varun?
            </Text>
            <View style={{ height: 130, marginTop: 20, marginRight: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../assets/home.jpg')} name="Home" />
                    <Category imageUri={require('../assets/experiences.jpg')} name="Experiences" />
                    <Category imageUri={require('../assets/restaurant.jpg')} name="Resturant" />
                    <Category imageUri={require('../assets/home.jpg')} name="Home" />
                    <Category imageUri={require('../assets/experiences.jpg')} name="Experiences" />
                    <Category imageUri={require('../assets/restaurant.jpg')} name="Resturant" />
                </ScrollView>
            </View>
        </View>;
    }
    renderCards() {
        return <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Card imageUri={require('../assets/home.jpg')} name="Home" width={width - (width/3)} height={200}></Card>
                <Card imageUri={require('../assets/home.jpg')} name="Home" width={width - (width/3)} height={200}></Card>
                <Card imageUri={require('../assets/home.jpg')} name="Home" width={width - (width/3)} height={200}></Card>
            </ScrollView>
            <BigCard imageUri={require('../assets/home.jpg')} name="Home" width={width - 40} height={200}></BigCard>
        </View>;
    }
}
export {Explore4} ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});