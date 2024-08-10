import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton'



const Home = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Home</Text>
            <PrimaryButton onPress={() => navigation.navigate('Menu')} >
                Go to menu
            </PrimaryButton>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})