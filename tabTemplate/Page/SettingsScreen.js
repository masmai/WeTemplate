
import * as React from 'react';
import { Button, Text, View } from 'react-native';

function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details1')}
            />
        </View>
    );
}
export  {SettingsScreen};