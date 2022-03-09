import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';



export default function CardMenu(){
  return (

    <View style={styles.cardMenu}>
      <View style={styles.selecaoMenu}>
        <Image source={require('../icons/localRed.png')} style={{width: 25, height: 25}}/>
        <Text style={{fontWeight: 'bold'}}>Local</Text>
          
      </View>
      <View style={{width: 50}}></View>
      <View style={styles.selecaoMenu}>
        <Image source={require('../icons/cupom.png')} style={{width: 25, height: 25}}/>
        <Text style={{fontWeight: 'bold'}}>Cupom</Text>
          
      </View>  
      <View style={{width: 50}}></View>
      <View style={styles.selecaoMenu}>
        <Image source={require('../icons/perfil.png')} style={{width: 25, height: 25}}/>
        <Text style={{fontWeight: 'bold'}}>Perfil</Text>
      </View>    
    </View>
    );
    
}

const styles = StyleSheet.create({

  cardMenu:{  
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 50
  },
  selecaoMenu:{
    alignItems: 'center',
    textAlign: 'center'
  },
})

