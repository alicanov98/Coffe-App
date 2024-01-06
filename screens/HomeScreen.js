import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Carousel from "react-native-snap-carousel";
import { categories, coffeeItems } from "../constants";

//? Icons
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import CoffeCards from "../components/CoffeCards";


const HomeScreen = () => {
  const { width, height } = Dimensions.get("window");
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}>
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        style={{
          width: "100%",
          height: 220,
          top: -20,
          opacity: 0.1,
          position: "absolute",
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/* avatar and bell icon */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 40,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <Image
            source={require("../assets/images/avatar.png")}
            style={{
              height: 36,
              width: 36,
              borderRadius: 9999,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <FontAwesome5 name="map-marker-alt" size={25} color="#c99d6b" />
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                fontWeight: "600",
              }}
            >
              Baku, Az
            </Text>
          </View>
          <SimpleLineIcons name="bell" size={27} color="black" />
        </View>

        {/* search bar */}
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 56,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 9999,
              backgroundColor: "#e6e6e6",
              padding: 4,
            }}
          >
            <TextInput
              placeholder="Search"
              style={{
                padding: 16,
                flex: 1,
                fontWeight: "600",
                color: "rgb(55, 65, 81)",
              }}
            />
            <TouchableOpacity
              style={{
                borderRadius: 9999,
                padding: 8,
                backgroundColor: "#c99d6b",
              }}
            >
              <MaterialCommunityIcons name="magnify" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 24,
          }}
        >
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            style={{
              overflow: "visible",
            }}
            renderItem={({ item }) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive
              ? {color: 'rgb(255, 255, 255)'}
              : {color: 'rgb(55, 65, 81)'};



              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive ? "#c99d6b" : "rgba(0,0,0,0.07)",
                    padding: 16,
                    paddingLeft: 20,
                    paddingRight: 20,
                    borderRadius: 9999,
                    marginRight: 8,
                    boxShadow:
                      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: 600,
                      ...activeTextClass,
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            marginTop: 64,
            paddingTop: 8,
            paddingBottom: 8,
          }}
        >
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeItems}
            renderItem={({ item }) => <CoffeCards item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.75}
            sliderWidth={400}
            itemWidth={width * 0.63}
            slideStyle={{
              alignItems: "center",
            }}
          ></Carousel>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
