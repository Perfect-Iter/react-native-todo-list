import { View, Text, StyleSheet, Platform, StatusBar, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import TasksSection from './components/TasksSection';

const Home = () => {

  const [task, setTask] = React.useState();

  const [taskItems, setTaskItems] = React.useState([])

  const handleAddTask =() =>{
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index)=>{
    let itemCopy = [...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy);
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
        {/* Todays tasks */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return(
                <TouchableOpacity onPress={()=> completeTask(index)}>
                  <TasksSection key={index} text ={item}  />
                </TouchableOpacity>
              )
            })}
            
          </View>
        </View>

        {/* write a task */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
          >
            <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text=> setTask(text)} />

            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapper}>
                <Text style = {styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#eee",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
      taskWrapper:{
        paddingTop: 40,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
      },
      items: {
        marginTop: 20,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: 250,
        backgroundColor: "#fff",
        borderColor: "#c0c0c0",
        borderWidth: 1,
        borderRadius: 60,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 60,
        justifyContent: "center",
        alignItems:"center",
        borderColor: "#c0c0c0",
        borderWidth: 1,
      },
      addText: {},

  });

export default Home