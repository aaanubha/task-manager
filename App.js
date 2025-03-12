import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import TaskItem from './components/TaskItem';

// addiotnal: progress bar
import * as Progress from 'react-native-progress'; 

//device width for images and progress bar
const { width } = Dimensions.get('window'); 

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);


  //states 
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, completed: false }]);
      setTask('');
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // progress bar calculation
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? completedTasks / totalTasks : 0; 


  //I've seperated the containers for the progress bar and the rest of the page so that the UI does not clash
  return (
    <View style={styles.mainContainer}>
      {/* Main Content */}
      <View style={styles.container}>
        <Image source={require('./assets/taskmanager.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a task..."
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity onPress={addTask} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onComplete={() => completeTask(item.id)} onDelete={() => deleteTask(item.id)} />
          )}
        />
      </View>

      {/* Progress Bar  */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{`${completedTasks} / ${totalTasks} tasks completed`}</Text>
        <Progress.Bar progress={progress} width={width * 0.9} color="#cf2e83" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1, 
    padding: 20,
    backgroundColor: '#fffbf4',
  },
  logo: {
    width: width * 0.9,
    height: 50,
    resizeMode: 'contain',
    marginTop: 40,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  addButton: {
    backgroundColor: '#cf2e83',
    padding: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 25,
  },
  progressContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 25,
  },
  progressText: {
    fontSize: 14,
    marginBottom: 5,
  },
});

