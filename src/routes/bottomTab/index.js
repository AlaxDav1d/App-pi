import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Segunda from "../../screens/inicio/Segunda";
import Terceira from "../../screens/inicio/Terceira";
import Inicio from "../../screens/inicio/Inicio";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Quarta from "../../screens/inicio/Quarta";

const Bottom = createBottomTabNavigator();
export default function BottomRouter(){
     return(
          <Bottom.Navigator screenOptions={{
               tabBarStyle:{
                    backgroundColor:'rgba(224,211,211,0.82)',
                    position:'absolute',
                    bottom:20,
                    margin:20,
                    borderRadius:10,
                    borderTopWidth:0,
                    elevation:0,
               },
               headerShown:false,
          }}>
               <Bottom.Screen name="Inicio" component={Inicio} options={{
                    tabBarIcon:({color,size,focused}) => {
                         if(focused){
                              return(
                                   <MaterialCommunityIcons name="home-variant-outline" size={24} color="rgba(154,12,243,0.82)" />
                              )
                         }
                         return(
                              <MaterialCommunityIcons name="home-variant" size={24} color='black' />
                         )
                    }
               }}/>
               <Bottom.Screen name="Exercicio" component={Segunda} options={{
                       tabBarIcon:({color,size,focused}) => {
                         if(focused){
                              return(
                                   <MaterialCommunityIcons name="weight-lifter" size={24} color="blue" />
                              )
                         }
                         return(
                              <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
                         )
                    }
               }}/>
               <Bottom.Screen name="Saúde" component={Terceira} options={{
                       tabBarIcon:({color,size,focused}) => {
                         if(focused){
                              return(
                                   <MaterialCommunityIcons name="heart-plus-outline" size={24} color="red" />
                              )
                         }
                         return(
                              <MaterialCommunityIcons name="heart-plus-outline" size={24} color="black" />
                         )
                    }
               }}/>    
               <Bottom.Screen name="Alimentos" component={Quarta} options={{
                    tabBarIcon:({color,size,focused}) => {
                      if(focused){
                           return(
                              <MaterialCommunityIcons name="food-variant" size={24} color="green" />
                           )
                      }
                      return(
                         <MaterialCommunityIcons name="food-variant" size={24} color="black" />
                      )
                 }
            }}/>
          </Bottom.Navigator>
     )
}