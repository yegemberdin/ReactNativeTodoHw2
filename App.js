// Yegemberdi Nazerke 20MD0159

import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null);
    Keyboard.dismiss();
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <View style={appStyles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      <View style={appStyles.tasksBody}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:"blue"}}>Task tracker by Naz</Text>
        <View style={appStyles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      <KeyboardAvoidingView 
        style={appStyles.writeTaskBody}
      >
        <TextInput style={appStyles.input} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => addTask()}>
          <View style={appStyles.addBody}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
  },
  tasksBody: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 16,
  },
  writeTaskBody: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#E6E6FA',
    borderRadius: 40,
    borderColor: 'blue',
    borderWidth: 1,
    width: 300,
  },
  addBody: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
});