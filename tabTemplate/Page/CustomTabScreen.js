

import * as React from 'react';
import {
    RefreshControl,
    Text,
    View, StyleSheet,
    Image, ScrollView,
    YellowBox, Dimensions,
    TouchableOpacity, ActivityIndicator, PixelRatio, Platform, Alert, Linking
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Explore,Explore2,Explore3,Explore4} from './'
export default class CustomTabScreen extends React.Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            navigation: navigation,
            username: '',
            password: '',
            grant_type: 'password',
            error: '',
            connection_Status: '',
            loading: true,
            content: {},
            index: 0,
            routes: [
                { key: 'first', title: 'ข่าว', iconName: 'ios-megaphone' },//ประชาสัมพันธ์
                { key: 'second', title: 'เอกสาร', iconName: 'md-today' },//ดาวน์โหลด
                { key: 'third', title: 'วีดีโอ', iconName: '', iconName:'ios-videocam' },
                { key: 'forth', title: 'FAQ', iconName: '', iconName: 'md-information' },
            ],
            position: 1,
            interval: null,
            dataSource: [
                // {

                //   url: require('./asset/image/slide1.jpg'),
                // }, {

                //   url: require('./asset/image/slide2.jpg'),
                // }
            ],
            isRefreshing: false,
        };
        this.animatedValue = new Animated.Value(0)
        //this.loadHomes();
    }

    render() {

        return (<TabView
            navigationState={this.state}
            renderScene={
                ({ route }) => {
                    switch (route.key) {
                        case 'first':
                            return <Explore/>;//<View><Text>first</Text></View>
                        case 'second':
                            return <Explore2/>;
                        case 'third':
                            return <Explore3/>;//<Explore/>
                        case 'fourth':
                            return <View></View>;
                        default:
                            return null;
                    }
                }
            }
            renderTabBar={this._renderTabBar}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width, height: hp('30%') }}
            style={{}}
        />)
    }
    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {
                    props.navigationState.routes.map((route, i) => {
                        //console.warn("prop i:  "+i)
                        const color = Animated.color(
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 53 : 160
                                    ),
                                })
                            ),
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 208 : 160
                                    ),
                                })
                            ), Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 186 : 160
                                    ),
                                })
                            )
                        );
                        const borderBottomColor = Animated.color(
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 53 : 249
                                    ),
                                })
                            ),
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 208 : 249
                                    ),
                                })
                            ), Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 186 : 249
                                    ),
                                })
                            )
                        );
                        const backgroundColor = Animated.color(
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 53 : 249
                                    ),
                                })
                            ),
                            Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 208 : 249
                                    ),
                                })
                            ), Animated.round(
                                Animated.interpolate(props.position, {
                                    inputRange,
                                    outputRange: inputRange.map(inputIndex =>
                                        inputIndex === i ? 186 : 249
                                    ),
                                })
                            )
                        );

                        const textSize = this.animatedValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [14, 32, 14]
                        });




                        return (
                            <TouchableOpacity
                                style={styles.tabItem}
                                onPress={() => i == 3
                                    ? this.props.navigation.navigate('Details1')
                                    : this.setState({ index: i })}>
                                <Animated.View style={[{ borderBottomColor }, { borderBottomWidth: 1, width: wp(25), paddingBottom: hp('2%') }]}>
                                    <Animated.View style={{ height: 50, width: 50, borderRadius: 13, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', backgroundColor }}>
                                        <Ionicons name={route.iconName} size={30} focused={true} color={this.state.index === i ? 'white' : 'grey'} />
                                    </Animated.View>
                                    <Animated.Text style={[{ color, fontSize: textSize }, { textAlign: 'center' }]}>
                                        {route.title}
                                    </Animated.Text>
                                </Animated.View>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    };

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: 20,
        borderColor: "transparent"
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        //padding: 2,
        marginTop: 0,
        marginBottom: 0,
        fontSize: 12

    }
});