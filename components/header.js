import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// https://img.freepik.com/free-vector/check-mark-circle-gradient_78370-4445.jpg
const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={{
                uri: 'https://img.freepik.com/free-vector/check-mark-circle-gradient_78370-4445.jpg',
            }} style={styles.image} />
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#224aff',
        width: '100%',
        paddingVertical: 20,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '800',
        color: '#ffa500',

        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: {
            width: 3,
            height: 3,
        },
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
        // marginHorizontal: 30
    }
})