import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton'



const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.homeContainer}>
            <View style={styles.heroContainer}>
                <Image style={styles.heroImage}
                    source={require('../assets/img/hero-img.png')}
                />
            </View>

            <View style={styles.textContainer}>
                <Image style={styles.textLogo}
                    source={require('../assets/img/hero-img.png')}
                />

                <Text style={styles.text}>Localshop</Text>
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
    homeContainer: {
        paddingHorizontal: 20
    },
    heroContainer: {
        width: '100%',
        height: 500,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    textLogo: {
        width: 60,
        height: 60
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20
    }

})