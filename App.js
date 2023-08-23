import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} id='tudo'>
      <StatusBar></StatusBar>
      <Home style={styles.text}/>
      <TouchableOpacity>
        <Text onPress={trocaCor}>
          clique aqui
        </Text>
      </TouchableOpacity>
    </View>
  );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginTop:25,
        color:'#fff',
         justifyContent: 'flex-start',
   },
   });
   function trocaCor(clique){
      const tudo = document.getElementById('tudo')
      tudo.style.backgroundColor = 'black';
   }