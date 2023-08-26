import { View,Text, StyleSheet, Image } from "react-native";
const logo = require('../src/imgs/logo.png');
const perfil = require('../src/imgs/usuario.png')
export default function Home(){
      return(
            <View style={style.header}>
                  <Image source={logo} style={style.img}/>
                  <Text style={style.text}>
                       Saude
                  </Text>
                  <Text style={style.text}>
                        Alimentos
                  </Text>
                  <Text style={style.text}>
                       Exercicios
                  </Text>
                  <Image source={perfil} style={style.img}/>
            </View>
      )
}
const style = StyleSheet.create({
      text:{
            color:'#fff',
            fontSize:20,
            backgroundColor:'rgba(85,85,85,1)',
            borderRadius:5,
      },
      header:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:'rgba(17,136,197,1)',
            padding:20,
            width:'100%',
      },
      img:{
            height:'30%',
            width:'10%'
      }
});