import { StyleSheet, Text, View } from 'react-native';
import NewsTab from './NewsTab';
import Context from './contextapi.js';
import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <View style={{...styles.container, backgroundColor:'#fff'}}>
      <NewsTab/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,

  },
});

export default () =>{
  return(
    <Context>
      <App/>
      <StatusBar style="auto" />
    </Context>
  )
}
