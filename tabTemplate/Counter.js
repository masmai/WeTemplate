import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


function Counter() {
    const [count, setCount] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const onPress = () => {setIsStarted(!isStarted)};
    useEffect(() => {
        const interval = setTimeout(() => {
            setCount(count + 1);
        }, 1000);
        isStarted?()=>{interval}:clearInterval(interval)
        
        
    });//



    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>isStarted {isStarted ? 'true' : 'false'} </Text>
                <Text>Count incremented {count} times</Text>
                <TouchableOpacity
                    style={[styles.button,{ backgroundColor: isStarted?"pink":'#DDDDDD'}]}
                    onPress={onPress}
                ><Text>{isStarted?'Started':'Not Started'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
       
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});

export default Counter