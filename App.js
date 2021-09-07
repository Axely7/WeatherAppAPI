
import React, {useState, useEffect} from 'react';
import {SafeAreaView,ScrollView,Keyboard,StyleSheet,Text,useColorScheme,View, TouchableWithoutFeedback,
Alert} from 'react-native';
import Formulario from './components/Formulario';



const App = () => {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const ocultarTeclado = () =>{
    Keyboard.dismiss();
  }

  const {ciudad, pais} = busqueda;


  useEffect(() =>{
    const consultarClima = async () =>{
      if(consultar){
        const appId = '7e1faff5aa311b3509985e94702b3944'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
        try{
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        }catch(error){
          mostrarAlerta();
        }
      }
    }
    consultarClima();
  }, [consultar]);

  const mostrarAlerta = () =>{
    Alert.alert(
        'Error',
        'No hay resultados, intenta con otra ciudad o país',
        [{text: 'OK'}]
    )
}
  
  return (
    <>
    <TouchableWithoutFeedback onPress={ () => ocultarTeclado()}>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario busqueda={busqueda} 
            guardarBusqueda = {guardarBusqueda}
            guardarConsultar = {guardarConsultar}
          ></Formulario>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
