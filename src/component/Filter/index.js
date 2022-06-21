import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/addTodoList'

const randomVal = () => {
    return Math.floor(Math.random() * 1000);
}

const Filter = () => {

    const [val, setVal] = useState();

    const dispatch = useDispatch();

    const callDispatch = () => {
        const action = addTodo({
            id: randomVal(),
            name: val,
            priority: 'High'
        });

        dispatch(action);
        setVal('');
    }

    const handleAddTask = () => {
        { !val ? ToastAndroid.show("Please fill your task !", ToastAndroid.SHORT) : callDispatch() }
    }

    return (
        <View style={styles.writeTaskWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            />
            <TextInput onChangeText={(value) => setVal(value)} value={val} style={styles.input} placeholder={'Write a task'} placeholderTextColor='gray' />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        color: 'black',
        paddingVertical: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
        padding: 15
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {
        color: 'black',
    },
})

export default Filter;