import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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
                <Text style={{fontSize:20,fontWeight:'600',margin:20}}>Divisões de Treino</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={{padding:20}} >
                <Botoes name ='Inferiores' title='A'/>
                <Botoes  name='Superiores' title='B'/>
                <Botoes name='Cardio' title='C'/>   
                <Botoes name='Resistência' title='D'/>   
                <Botoes name='Força' title='E'/>   
                <Botoes name='Força' title='E'/>   
                <Botoes name='Força' title='E'/>
                </ScrollView>   
            </View>

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
        alignItems:'center',
    },
    containerTxt:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});
