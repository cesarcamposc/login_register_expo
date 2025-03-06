import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

import FacebookSVG from '../assets/images/misc/facebook.svg'
import GoogleSVG from '../assets/images/misc/google.svg'
import LoginSVG from '../assets/images/misc/login.svg'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import TwitterSVG from '../assets/images/misc/twitter.svg'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.viewHeader}>
            <LoginSVG width = {300} heigth={300} style={styles.loginSvg}/>
            <Text style={styles.textHeader}>LOGIN</Text>
        </View>
        
        <View style={styles.containerInput}>
            <MaterialCommunityIcons name='email' size={20} color='purple' style={{marginRight: 5}}/>
            <TextInput placeholder='Enter your Email ID' keyboardType='email-address' style={styles.textInput}/>            
        </View>

        <View style={styles.containerInput}>
            <MaterialCommunityIcons name='lock' size={20} color='purple' style={{marginRight: 5}}/>
            <TextInput placeholder='Enter your password' secureTextEntry={true} style={styles.textInput}/>            
        </View>

        <Pressable style={styles.buttonLogin}>
            <Text style={styles.textButton}>LOGIN</Text>            
        </Pressable>

        <View style={styles.containerSocials}>
            <Pressable  style={styles.buttonSocials}>
                <GoogleSVG/>    
            </Pressable>

            <Pressable  style={styles.buttonSocials}>
                <GoogleSVG/>    
            </Pressable>   

            <Pressable  style={styles.buttonSocials}>
                <GoogleSVG/>    
            </Pressable>               
        </View>

        <View style={styles.containerRegister}>
            <Text>New to the App</Text>
            <Pressable>
                <Text style={styles.textRegister}> Register</Text>
            </Pressable>            
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    
    viewHeader:{
        alignItems: 'center',
        marginTop: 5,
    },

    loginSvg: {
        transform: [{rotate: '-5deg'}],
        marginBottom: -80,
    },
    
    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'purple'
    },
    
    containerInput: {
        flexDirection: 'row',
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
        marginBottom: 30,
        paddingBottom: 10,
    },

    buttonLogin: {
        backgroundColor: 'purple',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
    },

    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    containerSocials: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 30,
    },

    buttonSocials:{
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    
    containerRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },

    textRegister: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 16
    }
})