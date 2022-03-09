import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import { ScrollView } from 'react-native';
import ItemCardapio from '../../components/ItemCardapio';
import CardMenu from '../../components/CardMenu';

export default function Home({ navigation, ...resto }) { 

  const tiposEntrega = [
    { id: 1, text: 'Todos', ico: require('../../icons/fast_food.png') },
    { id: 2, text: 'Delivery', ico: require('../../icons/delivery.png') },
    { id: 3, text: 'Local', ico: require('../../icons/local.png') },
    { id: 4, text: 'Retirar', ico: require('../../icons/loja.png') }
  ]

  const [tipoEntrega, setTipoEntrega] = useState(1)

  function handleEntrega(id) {
    setTipoEntrega(id)

  }


  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "ProdDesc"}]
    })
  }

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
    
      <View style={styles.header}>
        
        <View style={styles.headerTop}>

          <Image source={require('../../icons/logo/favicon.png')} style={{ width: 50, height: 50, borderRadius: 40 }}></Image>

          <TextInput placeholder='Pesquisar' mode='outlined' style={{width: '50%', height: 30}}/>

          <Image source={require('../../icons/local.png')} style={{ width: 20, height: 25, borderRadius: 40 }}></Image>

        </View>
      </View>
          
      <ScrollView>
        <View style={styles.typeEntregas} >
          {tiposEntrega.map(tipo => (<View key={tipo.id}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => handleEntrega(tipo.id) } style={ [styles.buttonBase, tipoEntrega == tipo.id && styles.buttonEntregas ]}>
              <View style={styles.iconName}>
                <Image source={tipo.ico} style={{ width: 17, height: 17, marginRight: 4 }}></Image >
                <Text style={[ styles.textBase, tipoEntrega == tipo.id && styles.textEntregas]}>{tipo.text}</Text> 
              </View>

            
            </TouchableOpacity>
          </View>) )}
        </View>

        <View style={styles.content}>
          <View style={styles.typeProd}>

          </View>
          <View style={{ height: 15 }}></View>
          <View style={{ height: 50 }}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 20, backgroundColor: '#fff'}}>

              <Button>Produtos</Button>
              <Button>Produtos</Button>
              <Button>Produtos</Button>
              <Button>Produtos</Button>
              <Button>Produtos</Button>
              <Button>Produtos</Button>
              <Button>Produtos</Button>

              
            </ScrollView>
          </View>
              <View>
                <TouchableOpacity activeOpacity={0.6} onPress={() => entrar()}>
                  <ItemCardapio></ItemCardapio>

                </TouchableOpacity>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <ItemCardapio></ItemCardapio>
                <View style={{height: 100}}></View>
              </View>
            

            
          
        </View>
      </ScrollView>
        <View style={styles.cardMenu}>
          <View>

            <CardMenu></CardMenu>
          </View>
        </View>
    </View>
  ); 

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#c62827',
    height: '15%',
    // justifyContent: 'center',
  },
  headerTop: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  local: {
    height: 20,
    width: 200
  },
  typeEntregas: {
    flexDirection: 'row',
    backgroundColor: '#c62827',
    justifyContent: 'center',
    paddingBottom: 15
  },
  buttonBase:{
    padding: 10,
    marginBottom: 0,
    borderRadius: 15,
  },
  buttonEntregas: {
    backgroundColor: '#fffeff',
  },
  textBase:{
    color: '#fff',
    fontSize: 12
  },
  textEntregas:{
    color: '#c82624'
  },
  iconName:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  content: {
    height: '80%'
    
  },
  typeProd:{
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  
  btnProd:{
    backgroundColor: 'red'
  },
  cardMenu:{
    padding: 25,
    position: 'absolute',
    bottom:0,
    right: 20
  }

})