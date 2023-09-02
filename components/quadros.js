import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native";

export default function Quadros(props){
     return(
          <View style={styles.container}>
               <Image source={props.quadImg} style={styles.img}/>
               <Text style={{color:"black",fontSize:20,alignSelf:"center",textTransform:'capitalize',fontWeight:600,
                    }}>
                    {props.title}
               </Text>
               <Button title="ler mais"/>
          </View>
     );
}
const styles = StyleSheet.create({
     container:{
          margin:10,
          backgroundColor:'#3EADEC',
          height:250,
          width:150,
          padding:10,
          display:"flex",
          justifyContent:"space-around",
     },
     img:{
          height:'50%',
          width:'90%',
          margin:10,
     }
})