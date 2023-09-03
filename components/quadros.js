import { Link } from "@react-navigation/native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";

export default function Quadros(props){
     return(
          <View style={styles.container}>
               <Image source={props.quadImg} style={styles.img}/>
               <Text style={{color:"black",fontSize:20,alignSelf:"center",textTransform:'capitalize',fontWeight:600,}}>
                    {props.title}
               </Text>
               <Button title="ler mais" onPress={props.sla}/>
          </View>
     );
}
const styles = StyleSheet.create({
     container:{
          margin:10,
          backgroundColor:'#3EADEC',
          height:200,
          width:150,
          padding:0,
          display:"flex",
          alignItems:'center'
     },
     img:{
          height:'50%',
          width:'40%',
          margin:10,
     }
})