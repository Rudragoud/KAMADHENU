import { View, Text ,Image,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const FDashboard = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.main}>
      <Text style={styles.heading}> Dashboard </Text>
      <View style={styles.container}>
    <TouchableOpacity onPress={()=>navigation.navigate("addProduct")}>
      <Image style={styles.img} source={require('../../assets/icons/add.png')} />
      <Text style={styles.caption}>Add products</Text>
    </TouchableOpacity >


    <TouchableOpacity onPress={()=>navigation.navigate("boothList")}>
      <Image style={styles.img} source={require('../../assets/icons/list.png')} />
      <Text style={styles.caption}>Booth List</Text>
    </TouchableOpacity>


    <TouchableOpacity onPress={()=>navigation.navigate("deliveryF")}>
      <Image style={styles.img} source={require('../../assets/icons/delivery.png')} />
      <Text style={styles.caption}>Delivered List</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("orders")}>
      <Image style={styles.img} source={require('../../assets/icons/orders.png')} />
      <Text style={styles.caption}>Orders</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("modify")}>
      <Image source={require('../../assets/icons/modify.png')} style={styles.img} />
      <Text style={styles.caption}>Modify</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>navigation.navigate("products")}>
      <Image source={require('../../assets/icons/product.png')} style={styles.img} />
      <Text style={styles.caption}>Products List</Text>
    </TouchableOpacity>

    </View>
    </View>
  )
}


const styles=StyleSheet.create({
  main:{
    flex:1
  },
  heading:{
    fontSize:30,
    textAlign:'center',
    marginTop:40
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop:40
  },
  caption:{
    textAlign:'center',
    marginTop:30,
    marginRight:25,
  },

  img:{
marginRight:25,
width:80,
height:80,
marginTop:40
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:20
  },


})

export default FDashboard