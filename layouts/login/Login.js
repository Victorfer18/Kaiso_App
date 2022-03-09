import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Linking, ToastAndroid } from 'react-native'
import { ScrollView } from 'react-native';

export default function Login({navigation}){

  const [dados, setDados] = useState(false);         

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    })
  }


const openUrl = async(url) => {
  if(await Linking.canOpenURL(url)) {
    await Linking.openURL(url)
  }
  else {
    ToastAndroid.show('Can\'t open this URL', ToastAndroid.SHORT)
  }
}

  return (
    <View>
      <ScrollView style={{top: '20%'}}>

        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subTitle}>Preencha as informaçoes abaixo {"\n"}para se cadastrar no Oba Ofertas!</Text>
          <View style={styles.form_login}>
            <TextInput style={styles.nome} placeholder='Digite seu nome Completo'/>
            <TextInput style={styles.nome} placeholder='Digite seu CPF' keyboardType='numeric'/>
            <CheckBox style={styles.form_chebox} title="Ao me cadastrar, concordo com os termos de uso e politicas de privacidade do aplicativo Oba Ofertas." checked={dados} onPress={() => setDados(!dados)} />
            <View style={{padding: 8}}></View>
            <TouchableOpacity style={styles.button_entrar} onPress={() => entrar()} ><Text style={styles.text_button}>Entrar</Text></TouchableOpacity>
            <Text style={styles.subTitle}>ou entre com:</Text>
            <View style={styles.button_entrar_direto}>
              <TouchableOpacity style={styles.button_google} ><Text style={styles.text_goog_face}>Google</Text></TouchableOpacity>
              <View style={{padding: 5}}></View>
              <TouchableOpacity style={styles.button_facebook} ><Text style={styles.text_goog_face}>Facebook</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
form_login: {
  
},
text: {
  textAlign: 'center',
  padding: 5,
},
title: {
  fontSize: 37,
  fontWeight: 'bold',
},
subTitle: {
  fontSize: 20,
  marginTop: 30,
  marginBottom: 30,
  textAlign: 'center',
},
form_login: {
  width: '88%',
},
nome: {
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
  fontSize: 23,
  height: 50,
  paddingHorizontal: 12,
  marginBottom: 20,
},

form_chebox: 
{
},

button_entrar: {
  height: 60,
  color: '#fff',
  alignItems: "center",
  backgroundColor: "#f44236",
  padding: 10,
  borderRadius: 11,
},
text_button: {
  fontSize: 25
},
button_entrar_direto: {
  flexDirection: 'row',
  justifyContent: 'center',
},
text_goog_face: {
  height: 60,
  width: 170,
  textAlign: 'center',
  fontSize: 15,
  padding: 20,
  color: '#fff'
},
button_google: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius:  12,
  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
},
button_facebook: {
  borderRadius:  12,
  backgroundColor: '#0c3e8d',
  shadowColor: "#000",
  shadowOffset: {
    width: 2,
    height: 4,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
}
});
