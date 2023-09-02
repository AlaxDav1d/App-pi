import { ScrollView, StyleSheet, Text, View } from "react-native";
import QuadroImg from "../../../components/Quadros1";

const sla = require('../../imgs/logo.png')
export default function Quarta(){
  return(
    <View>
      <Text>
        Alimentos
      </Text>
       <ScrollView horizontal>
         <View style={{flexDirection:'row',margin:10}}>
              <QuadroImg quadImg={sla}/>
              <QuadroImg quadImg={sla} title='hello'/>
         </View>
         <View style={{flexDirection:'row',margin:10}}>
              <QuadroImg quadImg={sla} title='hello'/>
              <QuadroImg quadImg={sla} title='hello'/>
         </View>
         <View style={{flexDirection:'row',margin:10}}>
              <QuadroImg quadImg={sla} title='hello'/>
              <QuadroImg quadImg={sla} title='hello'/>
         </View>
         <View style={{flexDirection:'row',margin:10}}>
              <QuadroImg quadImg={sla} title='hello'/>
              <QuadroImg quadImg={sla} title='hello'/>
         </View>
         <View style={{flexDirection:'row',margin:10}}>
              <QuadroImg quadImg={sla} title='hello' />
              <QuadroImg quadImg={sla} title='hello'/>
         </View>
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  alimentos:{
      margin:10,
      backgroundColor:'green',
      height:250,
      width:150,
      padding:10,
      display:"flex",
      justifyContent:"space-around",
 },
 header:{
  height:150,fontSize:50,color:'white', backgroundColor:'green'
 }
})