import * as React from 'react';
import { Button, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen ,ProfileScreen} from './Page'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DetailsScreen } from './Page/DetailsScreen';
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
    </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <SettingsStack.Screen name="Details"
        component={DetailsScreen}
        options={{
          title: 'ITA',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </SettingsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
           let iconName;
           if (route.name === 'Home') {
              iconName = focused
              ? 'ios-home'//'ios-information-circle'
              : 'ios-home'//'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
            }else if (route.name === 'Profile') {
              iconName = focused
              ? 'ios-person'
              : 'ios-person';
            }

       return <Ionicons name={iconName} size={size} color={color}/>;
         },
      })}

      tabBarOptions={{
        activeTintColor: '#35d0ba',
        inactiveTintColor: 'gray',

      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>



  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          //headerTransparent: true,
          //headerShown:false
          headerBackground: () => (
            <View  style={[StyleSheet.absoluteFill,{backgroundColor:'#35d0ba'}]} />
          ),
        }}
          name="WeApp" component={HomeTabs} />
        <Stack.Screen name="Details1" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}