import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, FlatList, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home';
import Login from './screens/Login';
// import DefaultImage from ;

// const RootNav = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name='Home'
//         component={Home}
//       />
//     </Drawer.Navigator>
//   )
// }
const Stack = createNativeStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='LoginPage'
          component={Login}
        />
      </Stack.Navigator>
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
