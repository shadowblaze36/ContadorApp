import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        // flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
        // alignSelf: 'flex-end',
        // top: 100
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        // flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: "center",
        // left: 100
        top: 50
    },
    cajaAzul: {
        width: 100,
        // flex: 4,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: "flex-end"
    }
});