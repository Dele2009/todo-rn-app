import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const TaskItem = ({ title, onClick }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
            <TouchableOpacity onPress={onClick}>
                <MaterialIcons name="delete" size={30} color="#224aff" />
            </TouchableOpacity>
        </View>
    );
}

export default TaskItem

const styles = StyleSheet.create({

    itemContainer: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderLeftWidth: 7,
        borderLeftColor: '#224aff',
        borderRadius: 10,
        marginHorizontal: 25,
        marginVertical: 9,
    },
    itemText: {
        fontSize: 18,
        color: 'black'
    },
})