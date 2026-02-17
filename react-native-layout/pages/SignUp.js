import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Layout from "../components/Layout";
import Picture from '../pictures/login.png';
import Ionicons from "@react-native-vector-icons/ionicons";

export default function SignUp() {
    return (
        <View style={styles.container}>
            {/* header container */}
            <View style={styles.header}>
                {/* header details */}
                <View style={styles.headerDetails}>
                    <Image source={Picture} style={styles.image} />
                    <Text style={styles.title}>Sign Up</Text>
                </View>
            </View>
            {/* content container */}
            <View style={styles.content}>
                {/* content details */}
                <View style={styles.contentDetails}>
                    <View style={styles.emailContainer}>
                        <Ionicons name="person" size={20} color="#000" style={styles.icon}/>
                        <TextInput style={styles.email} placeholder="Enter your username" placeholderTextColor="#888"/>  
                    </View>
                    <View style={styles.emailContainer}>
                        <Ionicons name="mail" size={20} color="#000" style={styles.icon}/>
                        <TextInput style={styles.email} placeholder="Enter your email" placeholderTextColor="#888"/>  
                    </View>
                    <View style={styles.passwordContainer}>
                        <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.password} secureTextEntry={true} placeholder="Enter your password" placeholderTextColor="#888"/>  
                    </View>
                    <View style={styles.passwordContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#000" style={styles.icon} />
                        <TextInput style={styles.password} secureTextEntry={true} placeholder="Confirm your password" placeholderTextColor="#888"/>  
                    </View>
                </View>
            </View>
           
            <View style={styles.footer}>
                {/* footer container */}
                <View style={styles.footerDetails}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={{color: "#fff", fontWeight: "bold"}}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.registerContainer}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity>
                            <Text style={{color: "#007bff"}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3",
    },

    header: {
        flex: 2,
    },

    headerDetails: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 200,
    },

    content: {
        flex: 2,
    },
    
    contentDetails: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    emailContainer: {
        position: "relative",
        width: 250,
        marginBottom: 20,
    },
    
    icon: {
        position: "absolute",
        left: 10,
        top: 10, // adjust if needed
        zIndex: 1,
    },
    email: {
        width: 'auto',
        height: 40,
        borderColor: "#000",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 35,
        paddingRight: 10,
    },

    passwordContainer: {
        position: "relative",
        width: 250,
        marginBottom: 20
    },

    password: {
        width: 'auto',
        height: 40,
        borderColor: "#000",
        backgroundColor: "#fff",
        borderWidth: 1,
        paddingLeft: 35,
        borderRadius: 5,
        paddingRight: 10,
    },

    footer: {
        flex: 2,
        borderColor: "#000",
        borderWidth: 1,
    },

    footerDetails: {
        width: "100%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 200,
    },

    loginButton: {
        width: 250,
        height: 40,
        backgroundColor: "#007bff",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

    registerContainer: {
        flexDirection: "row",
        marginTop: 10,
    },

    image: {
        width: 50,
        height: 50,
        resizeMode: "contain",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 10,
    }
})