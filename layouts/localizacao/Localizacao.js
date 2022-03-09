import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';
import { Linking, ToastAndroid } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function Localizacao({navigation}){

  const [dados, setDados] = useState(false);         

  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  }

  const [selectedPais, setSelectedPa] = useState("Selecione seu País");
  const [selectedEstado, setSlectedEsta] = useState("Selecione seu estado");
  const [selectedCidade, setSelectedCida] = useState("Selecione sua cidade");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Localização</Text>
      <View>
        <Text style={styles.subTitle}>Preencha as informaçoes abaixo {"\n"}para se cadastrar no Oba Ofertas!</Text>
      </View>


      

      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity style={styles.localizacaoAuto} onPress={() => entrar()}>
            <Text style={{fontSize: 20}}>Localização automática</Text>
            <Image style={{width: 20, height: 20, marginLeft: 50}} source={require('../../icons/local.png')}></Image>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
            <Text style={{marginVertical: 30, fontSize: 18}}>Ou selecione abaixo:</Text>
        </View>
        <View >
            <View style={styles.selectForm}>
                <Picker
                    selectedValue={selectedPais}
                    style={styles.formLocalizacao}
                    onValueChange={(itemValue) => setSelectedPa(itemValue)}
                >
                    <Picker.Item label="Selecione seu País" />
                    <Picker.Item label="Brasil" value="Brasil" />
                    <Picker.Item label="Portugal" value="Portugal" />
                    {/* <Picker.Item label="Quarta das 00:00 as 00:00" value="Quarta" />
                    <Picker.Item label="Quinta das 00:00 as 00:00" value="Quinta" />
                    <Picker.Item label="Sexta das 00:00 as 00:00" value="Sexta" /> */}
                </Picker>

            </View>
            <View style={styles.selectForm}>
                <Picker
                    selectedValue={selectedEstado}
                    style={styles.formLocalizacao}
                    onValueChange={(itemValue) => setSlectedEsta(itemValue)}
                >
                    <Picker.Item label="Selecione seu estado" />
                    <Picker.Item label="São Paulo" value="SP" />
                    <Picker.Item label="Minas Gerais" value="MG" />
                    {/* <Picker.Item label="Quarta das 00:00 as 00:00" value="Quarta" />
                    <Picker.Item label="Quinta das 00:00 as 00:00" value="Quinta" />
                    <Picker.Item label="Sexta das 00:00 as 00:00" value="Sexta" /> */}
                </Picker>

            </View>
            <View style={styles.selectForm}>
                <Picker
                    selectedValue={selectedCidade}
                    style={styles.formLocalizacao}
                    onValueChange={(itemValue) => setSelectedCida(itemValue)}
                >
                    <Picker.Item label="Selecione sua cidade" />
                    <Picker.Item label="São Paulo" value="SaoPaulo" />
                    <Picker.Item label="Betim" value="Betim" />
                    
                </Picker>

            </View>
        </View>
      </View>    
    </View>
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
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
localizacaoAuto:{
    backgroundColor: '#6b79e2',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30
},
formLocalizacao:{
    
},
selectForm:{
    marginBottom: 35,
    backgroundColor: '#eeeeee',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 17
}

});
