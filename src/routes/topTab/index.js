import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Inicio from "../../screens/inicio/Inicio";
import Segunda from "../../screens/inicio/Segunda";
import { StyleSheet } from "react-native";
import Terceira from "../../screens/inicio/Terceira";
const sla = require('../../imgs/logo.png');

const Top = createMaterialTopTabNavigator();
export default function TopRouter(){
     return(
          <Top.Navigator style={styles.all} screenOptions={{ 
                    tabBarStyle:
                    {marginTop:15,backgroundColor:'gray',},
                    tabBarShowIcon:true,   
                    tabBarInactiveTintColor:'rgba(18,141,203,1)',
                    tabBarActiveTintColor:'red'
               }
          }>
               
               <Top.Screen name="Segunda" component={Segunda}/>
               
          </Top.Navigator>
     )
}
const styles = StyleSheet.create({
     all:{
          marginTop:15,
     },
})