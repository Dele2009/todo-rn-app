import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, FlatList, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Header from './components/header';
import TaskItem from './components/TaskItem';
import { useState } from 'react';

// import DefaultImage from ;

// const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
export default function App() {
  const [task, setTask] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [todos, setTodos] = useState([])

  const handleInputChange = (newTask) => {
    setTask(newTask);
    console.log(newTask)
  }

  const handleNewItem = () => {
    if (task.trim().length > 2 ) {
      setTodos((prevTodos) => (
        [ { task }, ...prevTodos]
      ))
      setTask('')
      setIsVisible(false)
    }
  }

  const removeItem = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };
  return (
    // 
    <View style={styles.container}>
      <Header />
      {!todos.length > 0 ? (
        <View style={styles.imgView}>
          {/* <Text>vmfkmvfmvmfvmfmvmfmjf</Text> */}
          <Image source={{
          uri: 'https://img.freepik.com/free-vector/notebook-concept-illustration_114360-377.jpg',
        }} style={styles.image}/>
        </View>
      ) : (
        <View style={styles.sView}>
          <FlatList
            style={styles.list}
            data={todos}
            renderItem={({ item, index }) => (
              <TaskItem
                title={item.task}
                onClick={
                  () => removeItem(index)
                }
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      )}

      <StatusBar style="auto" />
      <TouchableOpacity style={styles.addIcon} onPress={() => setIsVisible(true)}>
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        animationType='fade'
        style={styles.modal}
      >
        <View style={styles.modalBody}>
          <View style={styles.modalHeader}>
            <Text style={styles.MHtext}>Add task</Text>
            <TouchableOpacity style={styles} onPress={() => setIsVisible(false)}>
              <MaterialIcons name="highlight-remove" size={30} color="#ffa500" />
            </TouchableOpacity>
          </View>
          <View style={styles.inputArea}>
            <TextInput
              // multiline
              style={styles.input}
              keyboardType='default'
              placeholder='Enter task here...'
              value={task}
              onChangeText={handleInputChange}
            />
            <Button
              title='Add Task'
              color='#ffa500'
              onPress={handleNewItem}
            />
          </View>
        </View>
      </Modal>
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
  imgView:{
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
    backgroundColor: '#224aff',
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 50,
    width: 60,
    height: 60,
    zIndex: 9999
  },
  modal: {
    margin: 0,
    paddingHorizontal: 20,
    backgroundColor: '#000000b6',
  },
  modalBody: {
    backgroundColor: '#224aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  MHtext: {
    fontSize: 25,
    color: '#ffa500',

    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 3,
      height: 3,
    },
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 20,
    paddingVertical: 30,
    // backgroundColor: 'white',
    width: '100%',
    // borderBottomWidth: 1,
    // borderBottomColor: '#ddd',
    zIndex: 1
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#28a745',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
});
