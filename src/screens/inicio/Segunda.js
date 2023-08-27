import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Botoes from '../../../components/Botoes';

export default function Segunda(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:50,color:'white'}}>
                    EXERCÍCIOS
                </Text>
            </View>
            <View class='txtDivisao' style={styles.containerTxt}>
                <Text>Divisões de Treino</Text>
                <Botoes name ='Inferiores'/>
                <Botoes  name='Superiores'/>
                <Botoes name='Cardio'/>
            </View>
            <StatusBar />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(236,236,236,0.82)',
        flex: 1,
    },
    header:{
        backgroundColor:'red',
        height:150,
        justifyContent:'center',
        alignItems:'center'
    },
    containerTxt:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
