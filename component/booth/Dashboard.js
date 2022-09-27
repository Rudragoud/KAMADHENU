import { View, Text ,Image,TouchableOpacity,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Dashboard = () => {

    const navigation = useNavigation()

  return (
    
    <View style={styles.main}>
      <Text style={styles.heading}> Dashboard </Text>
      <View style={styles.container}>
   

    <TouchableOpacity onPress={()=>navigation.navigate("boothOrders")} style={styles.Touchables}>
      <Image style={styles.img} source={require('../../assets/icons/orders.png')} />
      <Text style={styles.caption}>New Orders</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("boothPayments")} style={styles.Touchables}>
      <Image style={styles.img} source={require('../../assets/icons/payments.png')} />
      <Text style={styles.caption}>Payments</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("boothDeliveries")} style={styles.Touchables}>
      <Image style={styles.img} source={require('../../assets/icons/delivery.png')} />
      <Text style={styles.caption}>Deliveries</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("boothCustomer")} style={styles.Touchables}> 
      <Image style={styles.img} source={require('../../assets/icons/user.png')} />
      <Text style={styles.caption}>Customer</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("boothAddDeliveryBoy")} style={styles.Touchables}>
      <Image source={require('../../assets/icons/add.png')} style={styles.img} />
      <Text style={styles.caption}>Add Delivery Boy</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("boothUpdate")} style={styles.Touchables}>
      <Image source={require('../../assets/icons/modify.png')} style={styles.img} />
      <Text style={styles.caption}>Update Delivery Boy</Text>
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
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft:30
  },
  caption:{
    textAlign:'center'
  },

  img:{
marginTop:40
  },
  Touchables:{
    marginLeft:30
  }


})

export default Dashboard