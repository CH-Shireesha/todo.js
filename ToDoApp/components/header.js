import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ToDoList</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 40,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: "center",
    fontStyle: 20,
    fontWeight: "bold"
  }
})