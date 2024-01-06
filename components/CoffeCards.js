import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import ShadowView from "react-native-shadow";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CoffeCards = ({ item }) => {
const navigation=useNavigation()

  return (
    <View
      key={item.id}
      style={{
        borderRadius: 40,
        backgroundColor: "#8F5B2D",
        width: 250,
        height: 350,
        elevation: 5,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOpacity: 0.8,
          shadowOffset: { width: 0, height: 30 },
          flexDirection: "row",
          justifyContent: "center",
          marginTop: -48,
        }}
      >
        <Image
          source={item.image}
          style={{
            height: 160,
            width: 160,
          }}
        />
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: 600,
            fontSize: 30,
            lineHeight: 36,
            zIndex: 10,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            width: 65,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            borderRadius: 24,
            padding: 4,
            gap: 4,
          }}
        >
          <AntDesign
            name="staro"
            size={15}
            color="white"
            style={{
              marginLeft: 4,
            }}
          />
          <Text
            style={{
              fontWeight: 600,
              color: "white",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            {item.stars}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            zIndex: 10,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "white",
              fontWeight: 600,
              opacity: 0.6,
            }}
          >
            Volume
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 24,
              color: "white",
              fontWeight: 600,
            }}
          >
            {item.volume}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center",
            shadowColor:"#c99d6b",
            // backgroundColor:"#c99d6b",
            shadowOpacity:0.8,
            shadowRadius:25,
            shadowOffset:{width:0,height:40},
          }} 
        >
          <Text
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 28,
            }}
          >
            {item.price}
          </Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('product',{...item})}
            style={{
              padding: 16,
              backgroundColor: "white",
              borderRadius: 999,
              shadowColor:"black",
              shadowOpacity:1,
              shadowRadius:40,
              shadowOffset:{width:-20,height:-10},
            }}
          >
            <AntDesign name="plus" size={24} color="#c99d6b" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeCards;
