import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";

export default function QuadroImg(props){
     return(
               <Image source={props.quadImg} style={styles.container}/>
     );
//hello world
}
const styles = StyleSheet.create({
     container:{
          margin:10,
          backgroundColor:'green',
          height:200,
          width:150,
          padding:10,
          display:"flex",
          justifyContent:"space-around",
     },
     img:{
          height:'50%',
          width:'50%',
          margin:10,
     }
})
