import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

// Button component
import PrimaryButton from "../components/PrimaryButton";
import { buttonStyles } from "../styles/GlobalStyles";

import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const navigation = useNavigation();

    const [isSecure, setIsSecure] = useState(true);
    return (
        <View style={styles.LoginContainer}>
            <View style={styles.pageLogoContainer}>
                <TouchableOpacity
                    style={styles.arrowBack}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Feather
                        name="chevron-left"
                        size={30}
                        color={"black"}
                    // style={styles.eyeIcon}
                    />
                </TouchableOpacity>
                <Image
                    style={styles.pageLogo}
                    source={require("../assets/img/hero-img.png")}
                />
            </View>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                />
            </View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={[styles.inputContainer, styles.inputPasswordContainer]}>
                <TextInput
                    style={styles.inputPassword}
                    keyboardType="default"
                    placeholder="Enter password"
                    secureTextEntry={isSecure}
                />
                <View>
                    {isSecure ? (
                        <TouchableOpacity onPress={() => setIsSecure(false)}>
                            <Feather
                                name="eye"
                                size={25}
                                color={"black"}
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setIsSecure(true)}>
                            <Feather
                                name="eye-off"
                                size={25}
                                color={"black"}
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
            {/* <Feather name='eye' size={20} color={'black'}/> */}
            <TouchableOpacity>
                <Text style={{ textAlign: "right", marginVertical: 20 }}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <PrimaryButton
                propStyles={buttonStyles.buttomSolid}
            // onPress={() => navigation.navigate('LoginPage')}
            >
                Login
            </PrimaryButton>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    pageLogoContainer: {
        width: "100%",
        height: 300,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        paddingTop: 60,
    },
    arrowBack: {
        position: "absolute",
        top: 50,
        left: 0,
        backgroundColor: "lightgrey",
        borderRadius: 10,
        padding: 10,
    },

    pageLogo: {
        width: 160,
        height: 160,
        backgroundColor: "#b6e3fd69",
        borderRadius: 100,
    },
    inputLabel: {
        fontWeight: "bold",
        fontSize: 25,
        marginVertical: 10,
        marginTop: 30,
        color: "black",
    },
    inputContainer: {
        width: "100%",
        height: 70,
        backgroundColor: "lightgrey",
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 50,
    },

    inputPasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: "100%",
        fontSize: 17,
    },
    inputPassword: {
        width: "90%",
        height: "100%",
        fontSize: 17,
    },
    eyeIcon: {
        // padding: 30
    },
});
