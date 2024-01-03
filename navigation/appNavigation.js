import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import Favorite from "../screens/Favorite";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
          <Stack.Screen
          name="product"
          options={{ headerShown: false }}
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
            marginBottom: 20,
            height: 75,
            alignItems: 'center',
            borderRadius: 100,
            marginHorizontal: 20,
          backgroundColor: "#c99d6b",
        },
        tabBarItemStyle: {
          margin:0,
        },
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={Favorite} />
      <Tab.Screen name="cart" component={Cart} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused)=> {
    let icon;

    if (route.name === 'home') {
      icon =  focused? <HomeSolid size="30" color={"#c99d6b"} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
    } else if (route.name === 'favourite') {
      icon =  focused? <HeartSolid size="30" color={"#c99d6b"} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
    }else if(route.name==='cart'){
      icon =  focused? <BagSolid size="30" color={"#c99d6b"} /> : <BagOutline size="30" strokeWidth={2} color="white" />
    }
    
    let buttonStyle = focused ? { backgroundColor: "white" } : {};

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 9999,
        padding: 12,
        ...buttonStyle,
      }}
    >
      {icon}
    </View>
    )
  }
export default AppNavigation;
