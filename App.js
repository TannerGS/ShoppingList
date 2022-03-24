/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';

// Component imports
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'milk'},
    {id: 2, text: 'eggs'},
    {id: 3, text: 'bacon'},
    {id: 4, text: 'cereal'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (text !== '') {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    } else {
      Alert.alert('Alert Message', 'Please enter an item', [{text: 'OK'}]);
    }
  };

  return (
    <View style={styles.container} >
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
