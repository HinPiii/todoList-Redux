import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/addTodoList'

const TodoList = () => {

    const dispatch = useDispatch();
    const newData = useSelector(state => state.list);
    const [data, setData] = useState();

    useEffect(() => {
        setData(newData)
    }, [newData]);

    const handleCompleteTask = (item) => {
        dispatch(deleteTodo(item.index));
    }

    const renderItem = item => {
        return(
            <View>
                <TouchableOpacity style={styles.item} onPress={()=> {handleCompleteTask(item)}}>
                    <View style={styles.square}>
                    </View>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>
                            {item.item.name}
                        </Text>
                    </View>
                    <View style={styles.sircular}></View>
                    </TouchableOpacity>
            </View>
        );
    }

    return (
       <FlatList 
            data={data}
            renderItem={(renderItem)}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        color: 'black',
        width: '100%',
    },
    sircular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 5,
        marginLeft: -50
    }
})

export default TodoList;


 // const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const URL = 'https://jsonplaceholder.typicode.com/posts';
    //     fetch(URL)
    //         .then((res) => res.json())
    //         .then((resJson) => { setData(resJson) })
    //         .catch((err) => { console.log(err) })
    //         .finally(() => setIsLoading(false))
    // }, [])

    // const onValueChange = item => {
    //     const newData = data.map(e => {
    //         if (e.id == item.item.id) {
    //             return {
    //                 ...e,
    //                 value: !e.value
    //             }
    //         }
    //         return {
    //             ...e,
    //             value: e.value
    //         }
    //     })
    //     setData(newData)
    // }

    // const renderItem = (item) => {
    //     return (
    //         <View>
    //             <Text>
    //                 {item.item.id} {item.item.title}
    //             </Text> 
    //             <CheckBox
    //                 disabled={false}
    //                 value={item.item.value}
    //                 onValueChange={() => onValueChange(item)}
    //             />
    //         </View>
    //     )

    // }

    // return (
    //     <SafeAreaView>
    //         {isLoading ? <ActivityIndicator /> : (
    //             <View>
    //                 <Text>
    //                     Todo List
    //                 </Text>
    //                 <FlatList
    //                     data={data}
    //                     renderItem={renderItem}
    //                     keyExtractor={item => item.id}
    //                 />
    //             </View>
    //         )}


    //     </SafeAreaView>
    // );