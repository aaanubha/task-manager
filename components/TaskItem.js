import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.taskText, task.completed && styles.completedText]}>
          {task.text}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        {/* Tick Image  */}
        <TouchableOpacity onPress={onComplete} style={styles.completeButton}>
          <Image source={require('../assets/tick.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Dustbin Image  */}
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Image source={require('../assets/dustbin.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f7c4db',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f7c4db',
  },
  textContainer: {
    flex: 1, 
  },
  taskText: {
    fontSize: 16,
    flexWrap: 'wrap', // wrapping text if it is longer than the width
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 60, 
    justifyContent: 'space-between', 
  },
  completeButton: {
    padding: 5,
  },
  deleteButton: {
    padding: 5,
  },
  icon: {
    width: 24, 
    height: 24,
    resizeMode: 'contain',
  },
});

export default TaskItem;
