import Quadros from "../../../components/quadros";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";

const logo = require('../../imgs/logo.png');

export default function Terceira(){
     return(
          <ScrollView horizontal>
                         
          <View style={styles.tudo}>
               <View style={{flexDirection:'row',margin:10}}>
                    <Quadros quadImg={logo} title='teste' />
                    <Quadros quadImg={logo} title='hello'/>
               </View>
               <View style={{flexDirection:'row',margin:10}}>
                    <Quadros quadImg={logo} title='hello'/>
                    <Quadros quadImg={logo} title='hello'/>
               </View>
               <View style={{flexDirection:'row',margin:10}}>
                    <Quadros quadImg={logo} title='hello'/>
                    <Quadros quadImg={logo} title='hello'/>
               </View>
               <View style={{flexDirection:'row',margin:10}}>
                    <Quadros quadImg={logo} title='hello'/>
                    <Quadros quadImg={logo} title='hello'/>
               </View>
               <View style={{flexDirection:'row',margin:10}}>
                    <Quadros quadImg={logo} title='hello'/>
                    <Quadros quadImg={logo} title='hello'/>
               </View>
          </View>
          </ScrollView>
   
     )
}
const styles = StyleSheet.create({
     tudo:{
          flexDirection:'row',
          justifyContent:"center",
          alignItems:'center',
     },

})