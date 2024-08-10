import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, FlatList, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Header from './components/header';
import TaskItem from './components/TaskItem';
import { useState } from 'react';

// import DefaultImage from ;

const RootNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='Home'
        component={Home}
      />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShadowVisible: false,
        headerTintColor: '#ff0000',
        headerStyle: styles.header,
        contentStyle: styles.homeContent
      }}>
        <Tab.Screen
          name='RootNav1'
          component={RootNav}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name='home' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Menu'
          component={Menu}
          options={{
            headerShadowVisible: false,
            tabBarIcon: ({ color, size }) => (
              <Feather name='menu' size={30} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    // marginTop: 50
  },
  homeContent: {
    backgroundColor: 'red'
  }
});
