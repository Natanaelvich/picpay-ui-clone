import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import Home from './screens/Home';
import Wallet from './screens/Walltes';
import Payment from './Components/Payment';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'home',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
};

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            if (route.name === 'Pay') {
              return (
                <Payment
                  focused={focused}
                  onPress={() => navigation.navigate('Pay')}
                />
              );
            }
            const { lib: Icon, name } = icons[route.name];
            return <Icon name={name} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#131418',
            borderTopColor: 'rgba(255,255,255,0.2)',
          },

          activeTintColor: '#fff',
          inactiveTintColor: '#92929c',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'Inicio' }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{ tabBarLabel: 'Perfil' }}
        />
        <Tab.Screen
          name="Pay"
          component={Wallet}
          options={{ tabBarLabel: '' }}
        />
        <Tab.Screen
          name="Notifications"
          component={Wallet}
          options={{ tabBarLabel: 'Notificações' }}
        />
        <Tab.Screen
          name="Settings"
          component={Wallet}
          options={{ tabBarLabel: 'Ajustes' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
