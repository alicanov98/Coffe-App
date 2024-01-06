import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  ArrowLeftCircleIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/outline";

import { useDispatch, useSelector } from "react-redux";
import {
  adToCart,
  decrease,
  increase,
  addToFavoriCart,
  cartTotalPrice,
  cartTotal,
} from "../redux/Slice";
import Toast from "react-native-toast-message";

const ProductScreen = (props) => {
  const navigation = useNavigation();
  const item = props.route.params;
  const [size, setSize] = useState("small");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cartData.count);
  const [press, setPress] = useState(false);
  const carts = useSelector((state) => state.cartData.cart);

  useEffect(() => {
    if ((carts.length = 0)) {
      setPress(false);
    } else {
      setPress(true);
    }
  }, [carts]);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/beansBackground2.png")}
        style={{
          height: 300,
          width: "100%",
          position: "absolute",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      />
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
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(addToFavoriCart(item))}>
            <HeartIcon size={40} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 50,
            shadowColor: "#c99d6b",
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: 250,
              height: 250,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#c99d6b",
            width: 65,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 15,
            borderRadius: 24,
            padding: 4,
            gap: 4,
            opacity: 0.9,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <StarIcon
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
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#2e2723",
              fontSize: 30,
              fontWeight: 600,
              lineHeight: 36,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "#2e2723",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 28,
            }}
          >
            ${item.price}
          </Text>
        </View>
        <View
          style={{
            marginTop: 8,
            marginLeft: 16,
            marginRight: 16,
          }}
        >
          <Text
            style={{
              color: "#2e2723",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 28,
            }}
          >
            Coffe size
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => setSize("small")}
              style={{
                backgroundColor:
                  size == "small" ? "#c99d6b" : "rgba(0,0,0,0.07)",
                borderRadius: 9999,
                paddingLeft: 32,
                paddingRight: 32,
                padding: 12,
              }}
            >
              <Text
                style={{
                  color: size == "small" ? "white" : "rgb(55 65 81)",
                }}
              >
                Small
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("medium")}
              style={{
                backgroundColor:
                  size == "medium" ? "#c99d6b" : "rgba(0,0,0,0.07)",
                borderRadius: 9999,
                paddingLeft: 32,
                paddingRight: 32,
                padding: 12,
              }}
            >
              <Text
                style={{
                  color: size == "medium" ? "white" : "rgb(55 65 81)",
                }}
              >
                Medium
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSize("large")}
              style={{
                backgroundColor:
                  size == "large" ? "#c99d6b" : "rgba(0,0,0,0.07)",
                borderRadius: 9999,
                paddingLeft: 32,
                paddingRight: 32,
                padding: 12,
              }}
            >
              <Text
                style={{
                  color: size == "large" ? "white" : "rgb(55 65 81)",
                }}
              >
                Large
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            marginRight: 16,
            marginLeft: 16,
            marginTop: 8,
            height: 112,
          }}
        >
          <Text
            style={{
              color: "#2e2723",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: 28,
            }}
          >
            About
          </Text>
          <Text
            style={{
              color: "rgb(75 85 99)",
            }}
          >
            {item.desc}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 16,
            marginRight: 16,
            marginBottom: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginLeft: 4,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                color: "rgb(55 65 81)",
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
                fontWeight: 600,
                color: "#2e2723",
              }}
            >
              {item.volume}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
              borderWidth: 1,
              borderRadius: 9999,
              borderColor: "rgb(55 65 81)",
              marginLeft: 16,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                dispatch(decrease());
              }}
            >
              <MinusIcon size="20" color={"#2e2723"} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#2e2723",
                fontSize: 18,
                lineHeight: 28,
                fontWeight: 800,
              }}
            >
              {counter}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(increase());
              }}
            >
              <PlusIcon size="20" color={"#2e2723"} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Buy now button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            gap: 16,
          }}
        >
          <TouchableOpacity
            style={{
              padding: 20,
              borderWidth: 1,
              borderRadius: 9999,
              borderColor: "rgb(156 163 175)",
            }}
          >
<ShoppingBagIcon
  size={30}
  color={"gray"}
  onPress={() => {
    if (carts.length === 0) {
      Toast.show({
        type: "info",
        text1: "Cart is empty!",
        position: "top",
        topOffset: 100,
      });
    } else {
      navigation.navigate("cart");
    }
  }}
/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              flex: 1,
              marginRight: 12,
              borderRadius: 9999,
              backgroundColor: "#c99d6b",
            }}
            onPress={() => {
              dispatch(adToCart(item));
              dispatch(cartTotalPrice());
              dispatch(cartTotal());
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                lineHeight: 28,
                fontWeight: 600,
              }}
            >
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductScreen;
