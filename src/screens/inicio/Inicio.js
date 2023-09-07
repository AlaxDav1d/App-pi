import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Quadros from "../../../components/quadros";
const img1 = require("../../imgs/usuario.png");

export default function Inicio(){
     return(
          <SafeAreaView>
               <StatusBar style="dark" backgroundColor="red"/>
               <ScrollView>
                    <View style={styles.blue}>
                         <Text>
                              Header
                         </Text>
                    </View>
               <View style={{alignItems:'flex-start',height:500,backgroundColor:'gray',justifyContent:"center",padding:25}}>
                    <Text style={{fontSize:40,color:'white'}}>
                         Sobre Nós
                    </Text>
                    <View style={styles.scroll}>
                    <ScrollView style={styles.about}>
                         <Text style={{width:'100%',fontSize:20}}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                         </Text> 
                    </ScrollView>
                         <Image source={img1} style={{height:'30%',width:"30%"}}/>
                    </View>
               </View>
               <Text style={{fontSize:30,alignSelf:'center',marginTop:10}}>Aqui estão seus treinos para completar</Text> 
               <ScrollView horizontal style={{height:350,backgroundColor:'black',padding:10,marginTop:10}} class='scroll com a parte de treinos frequentes ou a terminar'>
                    <Quadros quadImg={img1} title='Treino de Superior' estilo={styles.quadro}/>
                    <Quadros quadImg={img1} title='Treino de Inferior' estilo={styles.quadro}/>
                    <Quadros quadImg={img1} title='Treino Cardiovascular' estilo={styles.quadro}/>
                    <Quadros quadImg={img1} title='Treino de Resistência' estilo={styles.quadro}/>
               </ScrollView>
                   <View class='view sobre o app'>
                    <Text style={{color:'blue',fontSize:25,margin:15}}>
                         Sobre o APP
                    </Text>
                         <View>
                              <Text style={{fontSize:25,color:'red',padding:20}}>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              </Text>
                         </View>
                   </View>
               </ScrollView>
          </SafeAreaView>
     );
}
const styles = StyleSheet.create({
     container1:{
          backgroundColor:'rgba(17,136,197,1)',
          flex:1,
     },
     blue:{
          backgroundColor:'rgba(17,90,180,5)',
          height:120,
     },
     about:{
          width:'100%',
          padding:10
     },
     scroll:{
          flexDirection:'row',
          padding:10,
          justifyContent:"space-around",
          alignItems:'center',
          gap:20,
     },
     quadro:{
          backgroundColor:'red',
          margin:10,
          height:350,
          width:300,
          alignItems:'center',
          justifyContent:"space-around"
     }

})