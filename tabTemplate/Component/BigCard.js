import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class BigCard extends Component {
    render() {
        return (
            <View style={{ marginTop: 40, paddingHorizontal: 20, paddingBottom: 10, backgroundColor: "white" }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>{this.props.name}</Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>A new selection of homes verified for quality & comfort</Text>
                <View style={{ width: this.props.width, height: this.props.height, marginTop: 20 }}>
                    <Image style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} source={this.props.imageUri} />
                </View>
            </View>
        );
    }
}
export { BigCard };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});