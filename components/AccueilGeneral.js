import * as React from 'react';
import { StyleSheet, Button, Text, TouchableOpacity, View } from 'react-native';



export default function AccueilGeneral() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Vous êtes :</Text>

            <TouchableOpacity>

                <View style = {{padding: 40}}>
                    <Button style = {styles.ButtonDir} 
                    //Insérer la/les page(s) correspondante(s)
                    onPress={() => navigation.navigate('root', {screen: 'DirecteurAccueil'})}
                    title = "Directeur d'école ou de campus"
                    color = "#4d0099"
                    />
                </View>

                <View style = {{padding: 40}}>
                    <Button style = {styles.ButtonProf}
                    //Insérer la/les page(s) correspondante(s)
                    //onPress={() =>}
                    title = "Professeur"
                    color = "#4d0099"
                    />
                </View>

                <View style = {{padding: 40}}>
                    <Button style = {styles.ButtonEtud}
                    //Insérer la/les page(s) correspondante(s)
                    //onPress={() =>}
                    title = "Etudiant"
                    color = "#4d0099"
                    />
                </View>

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