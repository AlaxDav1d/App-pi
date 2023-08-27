import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator

export default function StackRouter(){
     return(
          <Stack.Navigator>
               <Stack.Screen name='Inferiores'/>
          </Stack.Navigator>
     )
}