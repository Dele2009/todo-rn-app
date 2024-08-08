import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './screens/Home';
import Menu from './screens/Menu';
import { Feather } from '@expo/vector-icons';
const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
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
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Feather name='home' size={30} color={color} />
            )
          }}
        />
        <Tab.Screen
          name='Menu'
          component={Menu}
          options={{
            headerShadowVisible: false,
            tabBarIcon: ({color, size}) => (
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
