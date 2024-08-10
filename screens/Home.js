import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton'



const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Container}>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/img/home-banner.png')}
                />
            </View>
            <View styles={styles.section}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/home-banner.png')}
                />
                
                <Text style={styles.name}>Localshop</Text>
                
            </View>

            {/* <PrimaryButton
                propStyles={buttonStyles}
                onPress={() => navigation.navigate('Menu')}
            >
                Go to menu
            </PrimaryButton> */}

        </View>
    )
}

export default Home
const buttonStyles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: 'blue',
        paddingVertical: 16,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
    pressed: {
        opacity: 0.75,
    },
})
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        // backgroundColor: 'blue'
    },
    imageContainer: {
        height: 500,
        width: '100%'
    },
    image: {
        height: "100%",
        width: "100%"
    },
    section: {
        flex: 1,        
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    name:{
        fontWeight: 'bold',
    }
})