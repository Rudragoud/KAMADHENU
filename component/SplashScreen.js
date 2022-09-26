import { View, Text ,Image,StyleSheet,ActivityIndicator } from 'react-native'
import React from 'react'
import { useState,Button,useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {

  const navigation=useNavigation()


  function myGreeting(){
    setState(false)
    navigator.replace("Milk dairy")
}

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     const timeOutLoader=setTimeout(myGreeting,3000)
  //     });
  //     return unsubscribe;
  // }, [navigation]);
  

    const [state,setState]=useState(true)
    const navigator=useNavigation()

    
    

    const myTimeout = setTimeout(myGreeting, 3000);


  return (
    <View style={styles.container}>
        <Text style={styles.text}>KAMADHENU</Text>
      <Image source={require('../assets/img/splash.png')} style={styles.stretch} />
     {state==true ?   <ActivityIndicator size="large" style={styles.loader} ></ActivityIndicator> : null}
      
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    text:{
        fontSize:25,
        marginTop:30,
        fontWeight:'bold'
    },
    stretch: {
        width: 400,
        height:400,
        marginTop:30
      },

      loader:{
        marginTop:30
      }

      ,
      btnContainer:{
        marginTop:40
      }
      
    
})