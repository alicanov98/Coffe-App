import { View, Text,Image } from 'react-native'
import React from 'react'

const Cart = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
        <Image
        source={require("../assets/images/beansBackground1.png")}
        style={{
          width: "100%",
          height: '100%',
          opacity: 1,
          position: "absolute",
        }}
      />
       <Text
      style={{
        fontSize:30,
        fontWeight:800,
        lineHeight:30,
        marginTop:20,
        color:"red",
      }}
      >404 EROR</Text>
      <Text
      style={{
        fontSize:30,
        fontWeight:800,
        lineHeight:30,
        color:"red",
      }}
      >Cart page coming soon</Text>
    </View>
  )
}

export default Cart