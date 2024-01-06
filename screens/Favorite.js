import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import {
  ArrowLeftCircleIcon,
  PencilSquareIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";

const Favorite = () => {
  const navigation = useNavigation();
  const favorite = useSelector((state) => state.cartData.favori);
  const cartCount = useSelector((state) => state.cartData.cartCount);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5e8e4",
      }}
    >
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          marginTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon
              size={50}
              strokeWidth={1.2}
              color={"#c99d6b"}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: "#c99d6b",
            }}
          >
            Favorite
          </Text>
          <TouchableOpacity>
            <PencilSquareIcon size={30} color={"#c99d6b"} />
          </TouchableOpacity>
        </View>
        {/* Cart Main */}
        <View
          style={{
            marginTop: 32,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#c99d6b",
            }}
          >
           My Favorite drinks
          </Text>
        </View>
        {/* Cart items */}
        <ScrollView
          style={{
            height: "100%",
            marginTop: 20,
            paddingBottom: 20,
          }}
        >
          
          {favorite.map((item)=>(
            <Card item={item} id={item.id} key={item.id} image={item.image} name={item.name} price={item.price} quantity={item.quantity}/>
          ))}

        </ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Favorite