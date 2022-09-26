import { View, Text ,Image,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const DDashboard = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.main}>
      <Text style={styles.heading}> Dashboard </Text>
      <View style={styles.container}>
   

    <TouchableOpacity onPress={()=>navigation.navigate("deliveryD")}>
      <Image style={styles.img} source={require('../../assets/icons/delivery.png')} />
      <Text style={styles.caption}>New Deliveries</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("ordersD")}>
      <Image style={styles.img} source={require('../../assets/icons/orders.png')} />
      <Text style={styles.caption}>Previous Deliveries</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("userD")}>
      <Image source={require('../../assets/icons/user.png')} style={styles.img} />
      <Text style={styles.caption}>User details</Text>
    </TouchableOpacity>

   

    </View>
    </View>
  )
}


const styles=StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  heading:{
    fontSize:30,
    textAlign:'center',
    marginTop:40
  },
  container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'column',
  },
  caption:{
    textAlign:'center'
  },

  img:{
marginTop:40
  },
  


})

export default DDashboard