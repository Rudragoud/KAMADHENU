import { View, Text , StyleSheet , Button ,Image , TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'



const CDashboard = ({navigation,route=null}) => {

  const {usrID}=route.params;
 


 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CUSTOMER</Text>
      
      <View style={styles.containerIcons}>
      
       <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custProduct",usrID)}>
       <Image source={require('../../assets/icons/productsCustomer.png')}  />
       <Text style={styles.caption}>View products</Text>
       </TouchableOpacity>
      
       <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custHistory",usrID)}>
       <Image source={require('../../assets/icons/orders.png')}  />
       <Text style={styles.caption}>History</Text>
       </TouchableOpacity>
      
      
   
    
      


     <TouchableOpacity style={styles.Icons} onPress={()=>navigation.navigate("custProfile",usrID)}>
       <Image source={require('../../assets/icons/user1.png')}  />
       <Text style={styles.caption}>Profile</Text>
     </TouchableOpacity>
  
   

   
      </View>
      <View style={styles.btn}>
    <Button title="Logout" onPress={()=>navigation.navigate("Milk dairy")}/>
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
,
btn:{
  marginBottom:250
}

})


export default CDashboard