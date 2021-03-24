import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList,Button, ImageBackground} from 'react-native';
import TodoItem from '../../components/todoItem';
import TodoInput from '../../components/todoInput';
import styles from './styles';
// import Button from '../../components/Button'

export default function HomeScreen({navigation}) {
  const [coursetodos, setCoursetodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const image = { uri: "https://reactjs.org/logo-og.png" };
//function
  const onAboutPress = () => {
    navigation.navigate('About');
  };
  const onLogOutPress = () => {
    navigation.navigate('Login');
  };
  const onGLPressed = () => {
    navigation.navigate('GeoLocation');
  };
  const onIMPPressed = () => {
    navigation.navigate('ImagePicker');
  };
  
  const addtodoHandler = todoTitle => {
    setCoursetodos(currenttodos => [
      ...currenttodos,
      { id: Math.random().toString(), value: todoTitle }
    ]);
    setIsAddMode(false);
  };

  const removetodoHandler = todoId => {
    setCoursetodos(currenttodos => {
      return currenttodos.filter(todo => todo.id !== todoId);
    });
  };

  const canceltodoAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <View>
      <Text  style={styles.about} onPress={() => onAboutPress()}>About</Text>
      <Text  style={styles.about} onPress={() => onLogOutPress()}>LogOut</Text>
      <View style={styles.containers}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
    </View> 
          <Button   style={styles.buttongl} onPress={onGLPressed}>
        GeoLocation
      </Button>
       <Button  style={styles.buttonimg} onPress={onIMPPressed}>
        Image Picker
      </Button>
    <View style={styles.screen}>
      
      
   
      <Button title="Add to your todo List" onPress={() => setIsAddMode(true)} />
      <TodoInput sy
        visible={isAddMode}
        onAddtodo={addtodoHandler}
        onCancel={canceltodoAdditionHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={coursetodos}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removetodoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
    </View>
  );
}