import { View, Text , StyleSheet , Button ,Image , TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'


const CDashboard = () => {

const navigation=useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CUSTOMER</Text>
      
      <View style={styles.containerIcons}>
      
       <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custProduct")}>
       <Image source={require('../../assets/icons/productsCustomer.png')}  />
       <Text style={styles.caption}>View products</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custHistory")}>
       <Image source={require('../../assets/icons/orders.png')}  />
       <Text style={styles.caption}>History</Text>
       </TouchableOpacity>
      
      
   
    
       <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custCart")}>
       <Image source={require('../../assets/icons/Cart.png')}  />
       <Text style={styles.caption}>Cart</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custProfile")}>
       <Image source={require('../../assets/icons/user1.png')}  />
       <Text style={styles.caption}>Profile</Text>
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
marginTop:40
},
Icons:{
  margin:30
},
caption:{
  textAlign:'center'
}
,
heading:{
  marginTop:40,
  fontWeight:'bold',
  fontSize:30
}


})


export default CDashboard