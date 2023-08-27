import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function Inicio(){
     return(
          <View style={styles.container1}>
          <Text>
               hello world do Inicio
          </Text>
     </View>
     );
}
const styles = StyleSheet.create({
     container1:{
          backgroundColor:'rgba(17,136,197,1)',
          flex:1,
     }
})