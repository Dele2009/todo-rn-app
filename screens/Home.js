import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

// Button component
import PrimaryButton from "../components/PrimaryButton";
import { buttonStyles } from "../styles/GlobalStyles";

const Home = ({navigation}) => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.heroContainer}>
                <Image
                    style={styles.heroImage}
                    source={require("../assets/img/hero-img.png")}
                />
            </View>

            <View style={styles.textContainer}>
                <Image
                    style={styles.textLogo}
                    source={require("../assets/icon.png")}
                />

                <Text style={styles.text}>Localshop</Text>
            </View>
            <Text style={[styles.h1, styles.test]}>
                Everything you need is in one place
            </Text>
            <Text style={[styles.homeP, styles.test]}>
                Find your daily nessesities at ----, The world's largest fashion
                e-commerce store is now available on mobile, Shop now!
            </Text>
            <View>
            <PrimaryButton
                propStyles={buttonStyles.buttomSolid}
                onPress={() => navigation.navigate("LoginPage")}
            >
                Login
            </PrimaryButton>
            <PrimaryButton
                propStyles={buttonStyles.buttomOutline}
                onPress={() => navigation.navigate("RegisterPage")}
            >
                Register
            </PrimaryButton>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    homeContainer: {
        paddingHorizontal: 19,
    },
    heroContainer: {
        width: "100%",
        height: 530,
    },
    heroImage: {
        width: "100%",
        height: "100%",
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        gap: 10,
        marginBottom: 15
    },
    textLogo: {
        width: 45,
        height: 45,
        borderRadius: 100
    },
    text: {
        fontWeight: "bold",
        fontSize: 25,
    },
    test: {
        marginVertical: 9,
    },
    h1: {
        fontWeight: "bold",
        color: "#4f4f4f",
        fontSize: 30,
    },
    homeP: {
        color: "gray",
    },
});
