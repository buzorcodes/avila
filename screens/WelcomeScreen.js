import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        
            <ImageBackground
        style={styles.background}
        source={require("../assets/background.png")}
        >
        <Image
        style={styles.logo}
        source={require("../assets/avila.png")}
        ></Image>
        <Text style={styles.title}>LEARN THE CLEVER WAY</Text>
    
        <View style={styles.registerButton}><Text style={styles.buttontext}>CREATE ACCOUNT</Text></View>
        <View style={styles.loginButton}><Text style={styles.buttontext}>LOG IN</Text></View>
    
        
    
        </ImageBackground>


      
        
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    loginButton: {
        width: "80%",
        height: 50,
        backgroundColor: "#FF5200",
        borderRadius: 5,
        marginBottom: 150,
        alignItems: 'center',

    },
    
    registerButton: {
        width: "80%",
        height: 50,
        backgroundColor: "#FF5200",
        borderRadius: 5,
        marginBottom: 30,
        alignItems: 'center',
        
        
        

    },

    buttontext: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingTop:12,
    },

    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 40,

    },

    logo: {
        height: 100,
        width: 120,
        marginBottom: 220,
    }

})

export default WelcomeScreen;