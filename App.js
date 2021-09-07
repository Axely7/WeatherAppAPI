
import React from 'react';
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Formulario from './components/Formulario';



const App = () => {
  
  return (
    <>
    <View style={styles.app}>
      <View style={styles.contenido}>
        <Formulario></Formulario>
      </View>
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
  },
  contenido:{
    marginHorizontal: '2.5%'
  }
});

export default App;
