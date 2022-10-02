import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../component/home'
import Booth from '../component/booth/Booth'
import Customer from '../component/customer/Customer'
import Delivery from '../component/delivery/Delivery'
import Factory from '../component/factory/Factory'
import SplashScreen from './SplashScreen'
import FDashboard from './factory/FDashboard'
import BDashboard from './booth/Dashboard'
import CDashboard from './customer/Dashboard'
import DDashboard from './delivery/DDashboard'
import AddProduct from './factory/drawer/addProduct'
import BoothList from './factory/drawer/boothList'
import Orders from './factory/drawer/orders'
import Modify from './factory/drawer/modify'
import Products from './factory/drawer/products'
import PreviousD from './delivery/drawer/PreviousD'
import UserD from '../component/delivery/drawer/UserD'
import DeliveryD from '../component/delivery/drawer/NewDeliveries'
import CustProducts from './customer/drawer/CustProducts'
import CustHistory from './customer/drawer/CustHistory'
import CustCart from './customer/drawer/CustCart'
import CustProfile from './customer/drawer/CustProfile'

import BoothAddDeliveryBoy from './booth/drawer/BoothAddDeliveryBoy'
import BoothCustomer from './booth/drawer/BoothCustomer'
import BoothDeliveries from './booth/drawer/BoothDeliveries'
import BoothNewOrders from './booth/drawer/BoothNewOrders'
import BoothPayments from './booth/drawer/BoothPayments'
import BoothUpdateDeliveryBoy from './booth/drawer/BoothUpdateDeliveryBoy'
import BoothOrderHistory from './booth/drawer/BoothOrderHistory'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
   <Stack.Navigator screenOptions={
    {headerShown:true, contentStyle:{
    backgroundColor:'#fff'}}
   
   }>
<Stack.Group>
<Stack.Screen name="Splash" component={SplashScreen} 
options={{
    title: "Welcome",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
      
}}}

/>
<Stack.Screen name="Milk dairy" component={Home} 
options={{
    headerShown: false,
    title: "Milk Products",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
      
}}}
/>
<Stack.Screen name="Booth" component={Booth}
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>
<Stack.Screen name="Customer" component={Customer}
options={{
    title: "Customer",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>
<Stack.Screen name="Delivery" component={Delivery} 
options={{
    title: "Delivery",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>
<Stack.Screen name="Factory" component={Factory} 
options={{
    title: "Factory",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="FDashboard" component={FDashboard} 
options={{
    title: "Factory ",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


<Stack.Screen name="BDashboard" component={BDashboard} 
options={{
    title: "Booth Dashboard",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


<Stack.Screen name="CDashboard" component={CDashboard} 
options={{
    title: "Customer Dashboard",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


<Stack.Screen name="DDashboard" component={DDashboard} 
options={{
    title: "Delivery Dashboard",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


<Stack.Screen name="addProduct" component={AddProduct} 
options={{
    title: "Factory ",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothList" component={BoothList} 
options={{
    title: "Factory",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>




<Stack.Screen name="orders" component={Orders} 
options={{
    title: "Factory",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="modify" component={Modify} 
options={{
    title: "Factory",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="products" component={Products} 
options={{
    title: "Factory",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="userD" component={UserD} 
options={{
    title: "Delivery Person ",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="ordersD" component={PreviousD} 
options={{
    title: "Delivery Person ",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="deliveryD" component={DeliveryD} 
options={{
    title: "Delivery Person ",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="custProduct" component={CustProducts} 
options={{
    title: "Customer",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


<Stack.Screen name="custHistory" component={CustHistory} 
options={{
    title: "Customer",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="custCart" component={CustCart} 
options={{
    title: "Customer",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>



<Stack.Screen name="custProfile" component={CustProfile} 
options={{
    title: "Customer",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothAddDeliveryBoy" component={BoothAddDeliveryBoy} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothCustomer" component={BoothCustomer} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothPayments" component={BoothPayments} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothDeliveries" component={BoothDeliveries} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothUpdate" component={BoothUpdateDeliveryBoy} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>

<Stack.Screen name="boothOrders" component={BoothNewOrders} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>
<Stack.Screen name="boothOrderHistory" component={BoothOrderHistory} 
options={{
    title: "Booth",
    headerStyle: {
      backgroundColor: 'cornflowerblue',
}}}
/>


</Stack.Group>

   </Stack.Navigator>
   
  )
}

export default StackNavigator