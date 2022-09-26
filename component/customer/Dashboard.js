import { View, Text , StyleSheet , Button ,Image , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const CDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CUSTOMER</Text>
      <View style={styles.containerIcons}>
       <TouchableOpacity style={styles.Icons}>
       <Image source={require('../../assets/icons/productsCustomer.png')}  />
       <Text style={styles.caption}>View products</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Icons}>
       <Image source={require('../../assets/icons/orders.png')}  />
       <Text style={styles.caption}>History</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Icons}>
       <Image source={require('../../assets/icons/Payment.png')}  />
       <Text style={styles.caption}>Payments</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Icons}>
       <Image source={require('../../assets/icons/Cart.png')}  />
       <Text style={styles.caption}>Cart</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
},
containerIcons:{
flex:1,
flexDirection:'row',
flexWrap:'wrap',
alignItems:'center',
justifyContent:'center',
marginTop:50
},
Icons:{
  margin:30
},
caption:{
  textAlign:'center'
}
,
heading:{
  marginTop:100,
  fontWeight:'bold',
  fontSize:30
}


})


export default CDashboard