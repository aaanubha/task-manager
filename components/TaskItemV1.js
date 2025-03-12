import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskText, task.completed && styles.completedText]}>
        {task.text}
      </Text>
      <View style={styles.buttons}>
        {/* Tick Image Button */}
        <TouchableOpacity onPress={onComplete} style={styles.completeButton}>
          <Image source={require('../assets/tick.png')} style={styles.icon} />
        </TouchableOpacity>

        {/* Dustbin Image Button */}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f7c4db',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#f7c4db',
  },
  taskText: { fontSize: 16 },
  completedText: { textDecorationLine: 'line-through', color: '#fff' },
  buttons: { flexDirection: 'row' },
  completeButton: { marginRight: 10, padding: 5 },
  deleteButton: { padding: 5 },
  icon: {
    width: 24,  // Adjust size as needed
    height: 24,
    resizeMode: 'contain',
  },
});

export default TaskItem;
