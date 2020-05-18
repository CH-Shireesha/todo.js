import * as React from 'react';
import { Component } from 'react';
import { Text,TextInputAndroidProps,TextInput,Button, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import TodoItem from './components/ToDoItem';
import DatePicker from 'react-native-datepicker';
  class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { date: '15-05-2020' };
  }}


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [todos, setTodos] = React.useState([
  // { text: , key: },
]);

const pressHandler = (key) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.key != key);
  });
};

  const [text, setText] = React.useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  const submitHandler = (text, date) => {
    setTodos(prevTodos => {
      return [
        { text, date, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  } 
const [date, setDate] = React.useState('15-05-2020');

  const datechangeHandler = (val) => {
    setDate(val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList</Text>
      <TextInput style={styles.input} 
       placeholder='new todo...'
        onChangeText={changeHandler} 
        value={text} ></TextInput>
       <DatePicker
          style={{width: 200, marginBottom: 20}}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={datechangeHandler}
          value={date}
        />
      <Button color='coral' onPress={() => submitHandler(text, date)} title='add todo' />
      <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    flex: 1,
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title:{
    backgroundColor:'coral',
    paddingTop: 40,
    height: 80,
    textAlign: 'center',
    marginBottom:30

  }
});
