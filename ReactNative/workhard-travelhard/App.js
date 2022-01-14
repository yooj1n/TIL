import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from './color';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("")
  const [toDos, setToDos] = useState({});
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (payload) => setText(payload);
  const addToDo = () => {
    if(text === "") {
      return
    }
    //object.assign({toDos+합칠object}, toDos, {합칠object})
    const newToDos = Object.assign({}, toDos, {
      [Date.now()]: {text, work: working},
    })
    setToDos(newToDos);
    setText("");
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{...styles.btnText, color: working ? "white" : theme.grey}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{...styles.btnText, color: !working ? "white" : theme.grey}}>Travel</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={addToDo}
        value={text}
        returnKeyType="done"
        placeholder={working ? "Add a To do" : "Where do you want to go?"}
        style={styles.input} />
        <ScrollView>
          {Object.keys(toDos).map((key) => (
            <View style={styles.toDo} key={key}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: 'row',
    marginTop: 100,
  },
  btnText: {
    fontSize: 36,
    fontWeight: "600",
    color: theme.grey,
  },
  input : {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal:15,
    borderRadius:20,
    marginTop:15,
    marginBottom:20,
  },
  toDo : {
    backgroundColor:theme.grey,
    paddingHorizontal:20,
    paddingVertical:10,
    marginBottom:10,
    borderRadius:10,
  },
  toDoText : {
    color: "white",
    fontSize:16,
    fontWeight:"500",
  }
});
