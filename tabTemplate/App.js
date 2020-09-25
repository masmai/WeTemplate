import React, { useState } from 'react';
import { Button, View, StyleSheet,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, SettingsScreen, ProfileScreen,MountingState, ListOfExample, HookScreeen, Users, LineChartScreen } from './Page'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DetailsScreen } from './Page/DetailsScreen';
import SplashScreen from './Component/SplashScreen';
import Login from './Component/Login';
import CreateAccount from './Component/CreateAccount';
import { Chat } from './Component'
import { RosterList } from './Component/Chat/RosterList';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UsersHook } from './Page/UsersHook';

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
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'ios-person'
              : 'ios-person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}

      tabBarOptions={{
        activeTintColor: '#35d0ba',
        inactiveTintColor: 'gray',

      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ListOfExample} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>



  );
}
const Stack = createStackNavigator();
export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loading ?
          (<Stack.Screen options={{
            //headerTransparent: true,
            //headerShown:false
            headerBackground: () => (
              <View style={[StyleSheet.absoluteFill, { backgroundColor: '#35d0ba' }]} />
            ),headerRight:()=>(<TouchableOpacity><Text>logout</Text></TouchableOpacity>)
          }} name="WeApp" component={HomeTabs} />
            // <Stack.Screen name="Details1" component={DetailsScreen} /> 
          )
          : (<Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />)
        }
        <Stack.Screen name="Details1" component={DetailsScreen} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="RosterList" component={RosterList} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MountingState" component={MountingState} />
        <Stack.Screen name="HookScreen" component={HookScreeen} />
        <Stack.Screen name="UsersHook" component={UsersHook} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="LineChartScreen" component={LineChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}