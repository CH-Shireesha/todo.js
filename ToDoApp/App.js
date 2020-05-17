import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import TodoItem from './components/ToDoItem';
import AddTodo from './components/form';


export default function App() {

const [todos, setTodos] = React.useState([
]);

const pressHandler = (key) => {
  setTodos(prevTodos => {
    return prevTodos.filter(todo => todo.key != key);
  });
};

const submitHandler = (text) => {
    setText('');
    setTodos(prevTodos => {
      return [
        { text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  } 

  return (
    <View style={styles.container}>
          <Header />
      <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
       <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
        </View>
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 40,
  },
});
