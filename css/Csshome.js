import { StyleSheet } from 'react-native';

export default function Csshome(){

  const styles = StyleSheet.create({
  
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
      },
      header: {
        backgroundColor: '#c62827',
        height: '20%',
        justifyContent: 'center',
      },
      headerTop: {
        marginTop: 20,
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
        justifyContent: 'center'
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
        flex: 3,
        
      },
      typeProd:{
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
      
    
  })
}

const styles = StyleSheet.create({
  container: {
    // My styles
  },
});

export default styles;


