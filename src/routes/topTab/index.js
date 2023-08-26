
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Inicio from "../../screens/Inicio";
     

const Top = createMaterialTopTabNavigator(); 
export function TabRouter(){
     return(
          <Top.Navigator>
               <Top.Screen name="Inicio" component={Inicio}/>
          </Top.Navigator>
     )
}