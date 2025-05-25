
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import Home from '../screens/Home';
import Appointment from '../screens/Appointment';
import Message from '../screens/Message';
import Profile from '../screens/Profile';

const Tabs = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false
}

export default function BottomTabs() {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
        <Tabs.Screen 
            name="HomeScreen" 
            component={Home}
            options={{ 
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={theme.sizes.xLarge}
                    color={theme.colors.primary}
                />
              )
            }}
        />
        <Tabs.Screen 
            name="Appointment" 
            component={Appointment}
            options={{ 
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'calendar' : 'calendar-outline'}
                    size={theme.sizes.xLarge}
                    color={theme.colors.primary}
                />
              )
            }}
        />
        <Tabs.Screen 
            name="Message" 
            component={Message}
            options={{ 
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                    size={theme.sizes.xLarge}
                    color={theme.colors.primary}
                />
              )
            }}
        />
        <Tabs.Screen 
            name="Profile" 
            component={Profile}
            options={{ 
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                    name={focused ? 'person' : 'person-outline'}
                    size={theme.sizes.xLarge}
                    color={theme.colors.primary}
                />
              )
            }}
        />
    </Tabs.Navigator>
  )
}