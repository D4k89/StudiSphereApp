import * as React from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';



export default function AccueilDir() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>AccueilDir</Text>

            <TouchableOpacity>

             

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#33adff',
        
    },
    title: {
        paddingTop:20,
        fontSize: 20,
        color: "black",
    },
    ButtonDir: {
        flex: 1,
        
        
    },
    ButtonProf: {
        flex: 1,
    },
    ButtonEtud: {
        flex: 1,
    },
});