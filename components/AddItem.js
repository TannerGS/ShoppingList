/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = e => setText(e);

  return (
    <View>
        <TextInput placeholder="Add Item..." style={styles.input} onChangeText={onChange} />
        <TouchableOpacity style={styles.button} onPress={() => addItem(text)} >
            <Text style={styles.btnText} ><Icon name='plus' size={20} />Add Item</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        fontSize: 16,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;