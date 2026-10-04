import React from 'react';

import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// ======================================
// BOTTOM TAB NAVIGATION
// ======================================

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0284c7',
        tabBarInactiveTintColor: '#94a3b8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: () => <Text>🏠</Text>,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: () => <Text>👤</Text>,
        }}
      />
    </Tab.Navigator>
  );
}


// ======================================
// DRAWER NAVIGATION
// ======================================

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Beranda"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0284c7',
        },
        headerTintColor: '#ffffff',
        drawerActiveTintColor: '#0284c7',
      }}
    >
      <Drawer.Screen
        name="Beranda"
        component={TabNavigator}
        options={{
          drawerLabel: '🏠  Beranda',
        }}
      />

      <Drawer.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          drawerLabel: '👤  Profil Pengguna',
        }}
      />
    </Drawer.Navigator>
  );
}


// ======================================
// STACK NAVIGATION
// ======================================

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Main"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}