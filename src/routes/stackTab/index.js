import { createStackNavigator } from "@react-navigation/stack"
import Superiores from "../../screens/exercicios/superiores"
import Inferiores from "../../screens/exercicios/inferiores"
//vou corrigir o commit q escrevi errado
const Stack = createStackNavigator
export default function Telas(){
     return(
          <Stack.Navigator>
          <Stack.Screen name ='superiores' component={Superiores}/>
          <Stack.Screen name ='sla' component={Inferiores}/>
      </Stack.Navigator>
     )
}
