import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Task = (props) => {

  return (
    <View style={taskStyles.item}>
      <View style={taskStyles.itemLeft}>
        <Text style={taskStyles.itemText}>{props.text}</Text>
      </View>
      <View style={taskStyles.circular}>
      <Text style={{color:"red"}}>
        -
      </Text>
      </View>
    </View>
  )
}

const taskStyles = StyleSheet.create({
  item: {
    backgroundColor: '#E6E6FA',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 16,
    height: 16,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Task;