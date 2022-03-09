import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function ItemCardapio(){

  


  return (

    <View>
        <Image style={styles.imgeCardapio} source={require('../icons/hotholl.jpg')} />
        <View style={styles.itemCardapio}>
          <View style={ styles.getCupom}>
            <Text style={{fontSize: 20, color: '#fff'}}>Pegar Cupom</Text>
            <Image source={require('../icons/setaDireita.png')} style={{width: 22, height: 22}}/>  
          </View>        
        </View>

      <View style={{padding: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Menu Jantar Grátis - somente delivery</Text>
        <Text style={{fontSize: 15}}>De €23,90 por <Text style={{fontWeight: 'bold', color: '#bb2e30'}}>€ 0,00</Text> {"\n"}Expira em 13/12/2021</Text>
        
      </View>
    </View>
    );
    
}

const styles = StyleSheet.create({

  imgeCardapio:{
    aspectRatio: 2.2,
  },
  itemCardapio:{
    backgroundColor: '#c62827', 
    padding: 15
  },
  getCupom:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
  }
})

