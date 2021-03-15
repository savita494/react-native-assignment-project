import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const TodoInput = props => {
  const [enteredtodo, setEnteredtodo] = useState('');

  const todoInputHandler = enteredText => {
    setEnteredtodo(enteredText);
  };

  const addtodoHandler = () => {
    props.onAddtodo(enteredtodo);
    setEnteredtodo('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new todo"
          style={styles.input}
          onChangeText={todoInputHandler}
          value={enteredtodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" color="green" onPress={addtodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  button: {
    width: '40%'
  }
});

export default TodoInput;