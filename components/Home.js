import { View,Text, StyleSheet } from "react-native";
export default function Home(){
      return(
            <View>
                  <Text style={style.text}>
                       Bem vindo ao nosso app!!
                  </Text>
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
})