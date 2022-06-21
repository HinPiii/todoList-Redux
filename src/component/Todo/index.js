import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoList from '../TodoList';
import Filter from '../Filter';
const Todo = () => {

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>
                    Today's tasks
                </Text>
                <View style={styles.items}>
                    <TodoList/>
                </View>
            </View>
            <Filter/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    items: {

    },
});

export default Todo;