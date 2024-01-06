import { View, Text, TouchableOpacity,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Toast from "react-native-toast-message";
import { cartTotal, cartTotalPrice, clearCart } from '../redux/Slice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Total = () => {



  const dispatch = useDispatch();
  const subtotal=useSelector((state)=>state.cartData.subTotal)
  const total=useSelector((state)=>state.cartData.totalPrice)
  const navigatiton = useNavigation();


const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem('cart');
    const storedData = await AsyncStorage.getItem('cart');
    console.log('cart:', storedData);
  } catch (error) {
    console.error('error delete:', error);
  }
};

const showToast = () => {
  // Redux kartları temizle
  dispatch(clearCart());
  // dispatch(cartTotalPrice());
  // dispatch(cartTotal());



  Toast.show({
    type: 'success',
    text1: 'Your order has been received.',
    text2: 'Thank you',
    position: 'top',
    topOffset: 100,
  });

  showAndClearAsyncStorageData();
};

const showAndClearAsyncStorageData = async () => {
  try {
    const storedData = await AsyncStorage.getItem('cart');

    // Eğer veri varsa, göster ve belirli bir süre sonra sil
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log('cart:', parsedData);
      // Burada verileri ekranda gösterme işlemini gerçekleştir
      if (Array.isArray(parsedData)) {
        // Eğer birden fazla öğe varsa döngü ile işle
        parsedData.map((item) => console.log("id:", item.id));
      } else {
        // Sadece tek bir öğe varsa, direkt olarak kullan
        console.log("id:", parsedData.id);
      }
  
      // Belirli bir süre sonra verileri sil
      setTimeout(() => {
        clearAsyncStorage(); 
      }, 60*1000); 
    }
  } catch (error) {
    console.error('error:', error);
  }
};



  return (
    <View
    style={{
      width:'100%',
      height:370,
      marginTop:32,
      backgroundColor: "rgb(55, 65, 81)",
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      padding: 30,
      paddingBottom:0
    }}
  >

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomColor: "#FFF5C7A9",
        borderBottomWidth: 0.5,
      }}
    >
      <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
        Subtotal
      </Text>
      <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
        ${subtotal.toFixed(2)}
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomColor: "#FFF5C7A9",
        borderBottomWidth: 0.5,
      }}
    >
      <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
      Cargo 
      </Text>
      <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
        $1.00
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        borderBottomColor: "#FFF5C7A9",
        borderBottomWidth: 0.5,
      }}
    >
      <Text style={{ color: "white", fontSize: 14, fontWeight: 700 }}>
        Total
      </Text>
      <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>
        ${total.toFixed(2)}
      </Text>
    </View>
    <View
      style={{
        marginTop: 20,
        width: "100%",
        height: 100,
        // backgroundColor: "#fff5c7",
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
      }}
    ></View>
    <View>
        {/* Order Button */}
        <TouchableOpacity
        onPress={()=>{showToast() ,    setTimeout(() => {
          navigatiton.navigate("bill");
        }, 1000);}}
        style={{
          width: 100,
          height: 70,
          borderWidth: 1,
          position: "absolute",
          top: -100,
          left: 0,
          zIndex: 10,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderColor: "#c99d6b",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <Text
          style={{
            padding: 10,
            fontSize: 20,
            color: '#c99d6b',
            fontWeight:700
          }}
        >
          ORDER
        </Text>
      </TouchableOpacity>


    <Image
      source={require("../assets/favpng_coffee.png")}
      style={{
        width: "100%",
        height: 200,
        objectFit: "cover",
        marginTop:-160,
        marginLeft: 31,
      }}
    />
    </View>
  </View>
  )
}

export default Total