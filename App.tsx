import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import List from './components/List';
import { useState } from 'react';

export default function App() {
  const [toDos, setToDos] = useState([
    { id: 1, message: "Complete React project", isDone: false },
    { id: 2, message: "Review AWS EC2 security settings", isDone: true },
    { id: 3, message: "Prepare for coding interview", isDone: false },
    { id: 4, message: "Read about Vector Databases", isDone: false },
    { id: 5, message: "Fix API endpoint issues", isDone: true }
  ])

  const changeStatus = (id:number) => {
    setToDos((prev) => 
      prev.map((todo) =>
        todo.id === id ? {...todo, isDone: true} : todo
    )
  )}

  const undoStatus = (id:number) => {
    Alert.alert("Undo","Are you sure?",[
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => {
          setToDos((prev) =>
            prev.map((todo) =>(
              todo.id === id? {...todo, isDone: false} : todo
            )
          )
      )}
      }
    ])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>To Do List</Text>
      <View style={styles.listContainer}>
        {toDos.map((todo) => (
          <List key={todo.id} {...todo} changeStatus={changeStatus} undoStatus={undoStatus}/>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText : {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  listContainer : {
    flex: 1,
    gap: 5,
    marginTop: 10,
    marginHorizontal: 10,
  }
});
