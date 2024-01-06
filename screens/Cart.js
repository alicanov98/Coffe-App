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
import Card from "../components/Card";
import Total from "../components/Total";
import { useSelector } from "react-redux";
import React from "react";


const Cart = () => {
  const navigation = useNavigation();
  const carts = useSelector((state) => state.cartData.cart);
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
            Cart
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
            My Order
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "rgb(55, 65, 81)",
            }}
          >
            You have{" "}
            <Text
              style={{
                color: "#c99d6b",
              }}
            >
              {cartCount} product
            </Text>{" "}
            in your cart.
          </Text>
        </View>
        {/* Cart items */}
        <ScrollView
          style={{
            height: 300,
            marginTop: 20,
            paddingBottom: 20,
          }}
        >
          {carts.map((item) => (
            <Card
              item={item}
              id={item.id}
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
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
          {/* Total Price */}
          <Total />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Cart;
