import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Constants from 'expo-constants';
import Header from './components/header';
import AddTodo from './components/form';
import TodoItem from './components/ToDoItem';

// You can import from local files
import AssetExample from './components/AssetExample';

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

const submitHandler = (text, date) => {
    setTodos(prevTodos => {
      return [
        { text, date, key: Math.random().toString() },
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

