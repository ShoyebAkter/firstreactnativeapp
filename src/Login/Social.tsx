import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
    webClientId: '962289027598-3f1dddv57d140vuhtnrqn7dkqqt8asdg.apps.googleusercontent.com'
})
const Social = () => {
    

    return (
        <View>
            <View style={styles.button}>
                <Button
                    // onPress={() => signInAsync()}
                    title="Google Sign In"
                />

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 200,
        marginLeft: 100,
        backgroundColor: "#7fff00",
        borderRadius: 5,
        justifyContent: "center",
        marginBottom: 5
    }
})
export default Social
