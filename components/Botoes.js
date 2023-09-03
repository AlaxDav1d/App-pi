import { Linking, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
export default function Botoes(props){
     return(
          <TouchableOpacity style={styles.botao} >
               <Text style={{fontSize:30}}>{props.title}</Text>
               <Text style={{fontSize:20}}>{props.name}</Text>
               <AntDesign name="right" size={45} color="blue" />
          </TouchableOpacity>
     )
}
const styles = StyleSheet.create({
     botao:{
          backgroundColor:'#D9D9D9',
          height:90,
          width:350,
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          borderRadius:15,    
          marginTop:50,
     }
})
