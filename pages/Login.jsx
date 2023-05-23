import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default function Login(){

    return(
        <SafeAreaView style={styles.conteiner}>
            <Text>teste</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})