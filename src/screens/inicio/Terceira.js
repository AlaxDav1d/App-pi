
import Quadros from "../../../components/quadros";
import { Button } from "react-native";
import { Linking, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native";

const logo = require('../../imgs/logo.png');

export default function Terceira(){
     return(
          
          <View>
               <View style={styles.header}>
                    <Text style={{color:"#fff",fontSize:50}}>
                         SAÚDE
                    </Text>
               </View>
               <ScrollView horizontal>
                    <View style={styles.tudo}>
                         <View style={{flexDirection:'row'}}>
                              <Quadros quadImg={logo} title='Ansiedade' />
                              <Quadros quadImg={logo} title='hello'/>
                         </View>
                         <View style={{flexDirection:'row',}}>
                              <Quadros quadImg={logo} title='hello'/>
                              <Quadros quadImg={logo} title='hello'/>
                         </View>
                         <View style={{flexDirection:'row',}}>
                              <Quadros quadImg={logo} title='hello'/>
                              <Quadros quadImg={logo} title='hello'/>
                         </View>
                         <View style={{flexDirection:'row',}}>
                              <Quadros quadImg={logo} title='hello'/>
                              <Quadros quadImg={logo} title='hello'/>
                         </View>
                         <View style={{flexDirection:'row',}}>
                              <Quadros quadImg={logo} title='hello'/>
                              <Quadros quadImg={logo} title='hello'/>
                         </View>
                    </View>
               </ScrollView>
               <View style={styles.banner}>
                    <Text style={{fontSize:30,alignSelf:'center'}}>Dica Diária</Text>
                    <ScrollView style={{padding:10,backgroundColor:'rgba(224,211,211,0.82)',}} showsVerticalScrollIndicator={false}>
                         <Text>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              Why do we use it?
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                              Where does it come from?
                              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                         </Text>
                    </ScrollView>
               </View>
          </View>
   
     )
}
const styles = StyleSheet.create({
     tudo:{
          flexDirection:'row',
          justifyContent:"center",
          alignItems:'center',
     },
     header:{
          height:150,
          backgroundColor:'#3EADEC',
          alignItems:'center',
          justifyContent:'center'
     },
     banner:{
          height:300,
          backgroundColor:'#888888',
          margin:40,
          padding:10,
     }

})
function links(){
     Linking.openURL('https://www.forhumlar.org/ansiedade?gad=1&gclid=EAIaIQobChMImKeHmb6OgQMVAj-RCh0EOgi0EAAYAiAAEgIzSvD_BwE')
}