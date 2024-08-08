import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#eaeaea',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sView: {
    backgroundColor: '00ff3c27',
    height: "76.4%",
    width: '100%'
  },
  list: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 50,
    paddingBottom: 50,
  },
  imgView: {
    height: '100%',
    backgroundColor: 'white',
    width: '100%',
    paddingBottom: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
    marginHorizontal: 30

  },
  addIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
