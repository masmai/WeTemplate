import * as React from 'react';
import { Button, Text, View } from 'react-native';
import CustomTabScreen from './CustomTabScreen'
function HomeScreen({ navigation }) {
    return (
        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
        //     <Text>asdas</Text>

        // </View>
        
            <CustomTabScreen navigation={navigation}/>
        
    );
}
export { HomeScreen };