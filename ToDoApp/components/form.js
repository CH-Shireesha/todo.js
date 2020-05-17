import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
  class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    //set value in state for initial date
    this.state = { date: '15-05-2018' };
  }}

export default function AddTodo({ submitHandler }) {

  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };
  const [date, setDate] = useState('15-05-2018');

  const datechangeHandler = (val) => {
    setDate(val);
  };

  return (
    <View >
      <TextInput 
        style={styles.input} 
        placeholder='new todo...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <DatePicker
          style={{width: 200}}
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
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  }
});