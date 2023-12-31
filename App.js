import { NavigationContainer  } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet } from 'react-native';
import BottomRouter from './src/routes/bottomTab';




export default function App() {
  return (
    <NavigationContainer>
      <BottomRouter />
    </NavigationContainer>
  );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-end',        
        backgroundColor: '#000',
   },
   button:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red',
    height:100,
    width:200,
    margin:20,
    borderRadius:10,
    borderColor:'rgba(72,125,142,1)',
    borderWidth:5
   },
   });