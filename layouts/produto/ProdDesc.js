import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacityBase, Pressable, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';





export default function ProdDesc({navigation, ...resto}){

  const [selectedValue, setSelectedValue] = useState("Horario de atendimento:");

  const [modalVisible, setModalVisible] = useState(false);

  const entrar = () =>{
    navigation.reset({
      index: 0,
      routes: [{name: "Home"}]
    })
  }

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        <View>
          <Image style={styles.produto} source={require('../../icons/hotholl.jpg')}></Image>
          <View style={styles.btn}>
            <TouchableOpacity activeOpacity={0.6} style={styles.btnVoltar} onPress={() => entrar()}><Image style={{width: 27, height: 27, transform: [{ rotate: '180deg' }]}} source={require('../../icons/setaDireita.png')}></Image></TouchableOpacity>
          </View>
          <View style={styles.marketAberto}>
            <Text style={{paddingVertical: 7, color: '#fff'}}><Text style={{fontWeight: 'bold', fontSize: 16}}>Estabelecimento Aberto </Text>(11:30 as 23:00)</Text>
          </View>
        </View>
        
          <View style={[ styles.tamanhoHorizontal, {paddingVertical: 30}]}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Menu Jantar Grátis - somente delivery</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>De €23,90 por <Text style={{fontWeight: 'bold', color: '#bb2e30'}}>€ 0,00</Text></Text>
          </View>
          <View style={{backgroundColor: '#e0e0e0', paddingVertical: 20}}>
            
            <View style={styles.tamanhoHorizontal}>
              <Text style={{fontSize: 20}}>
                <Text style={{fontWeight: 'bold'}}>Descrição {"\n"}</Text>
                <Text>10 Hot rolls {"\n"}02 Gunkans {"\n"}02 Uramakis salmão com manga {"\n"}04 Uramakis skins {"\n"}02 Niguiris</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.tamanhoHorizontal, {marginVertical: 20}]}>
            <View style={{marginBottom: 55}}>
              <Text style={{color: '#777777', fontWeight: 'bold'}}>Regularmento:</Text>
              <Text style={{color: '#737373'}}>
                <Text style={{fontSize: 18, marginBottom: 55}}>Cupão válido para 1 prato. Meio de pagamento: Mbway ou dinheiro. Take Away ou Delivery, Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos.</Text>
              </Text>
            </View>
            <View style={styles.dadosMarket}>
              <View style={styles.dadosIcons}>
                <Image style={styles.empresaIcon} source={require('../../icons/kaisoIcon.png')}></Image>
                <Text style={styles.descIcon}>Kaiso Sushi</Text>
              </View>
              <View style={styles.dadosIcons}>
                <Image style={styles.empresaIcon} source={require('../../icons/telefone.png')}></Image>
                <Text style={styles.descIcon}>Telefone</Text>
              </View>
              <View style={styles.dadosIcons}>
                <Image style={styles.empresaIcon} source={require('../../icons/atendimentoIcon.png')}></Image>
                <Picker
                  selectedValue={selectedValue}
                  style={[styles.descIcon, { height: 50, width: '65%', marginLeft: 10}]}
                  onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                  <Picker.Item label="Horario de atendimento" />
                  <Picker.Item label="Segunda das 00:00 as 00:00" value="Segunda" />
                  <Picker.Item label="Terça das 00:00 as 00:00" value="Terca" />
                  <Picker.Item label="Quarta das 00:00 as 00:00" value="Quarta" />
                  <Picker.Item label="Quinta das 00:00 as 00:00" value="Quinta" />
                  <Picker.Item label="Sexta das 00:00 as 00:00" value="Sexta" />
                </Picker>
              </View>
            </View>
            
            <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
              <View style={styles.modalView}>
              <Text style={styles.modalText}>Cupom solicitado com Sucesso! <Image style={styles.palmasIcon} source={require('../../icons/palmasIcon.png')}></Image></Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text style={styles.textStyle}>OK</Text>
            </Pressable>
              </View>
        </View>
            </Modal>

            </View>

            <View style={styles.getCupom}>
              <TouchableOpacity style={styles.btnCupom} onPress={() => setModalVisible(true)}>
                <Image style={[styles.empresaIcon, {tintColor: '#fff', marginLeft: 30}]} source={require('../../icons/carrinhoCompras.png')}></Image>
                <Text style={{marginLeft: 12, fontSize: 17}}>Solicitar Cupom</Text>

              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
    </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  produto:{
    aspectRatio: 2.2,
  },
  btn:{
    top: 40,
    position: 'absolute'
  },
  btnVoltar:{
    backgroundColor: '#f44236',
    padding: 10,
    paddingLeft: 8,
    marginLeft: 25,
    borderRadius: 15
  },
  marketAberto:{
    backgroundColor: '#4cb050',
    alignItems: 'center'
  },
  tamanhoHorizontal:{
    marginHorizontal: 25,
  },
  empresaIcon:{
    width: 23,
    height: 23
  },
  palmasIcon:{
    width: 25,
    height: 25
  },
  dadosIcons:{
    flexDirection: 'row',
    marginBottom: 40,
  },
  dadosIcons:{
    flexDirection: 'row',
    marginBottom: 40,
    alignItems: 'center'
  },
  descIcon:{
    marginLeft: 15
  },
  btnCupom:{
    backgroundColor: '#c62827',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 17,
    width:'63%',
    borderRadius: 30
  },
  getCupom:{
    flexDirection:'row-reverse',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#c62827",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 17
  }
});


