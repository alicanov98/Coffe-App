import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { cartTotal, cartTotalPrice, removeFromCart, removeFromFavorite } from "../redux/Slice";
const Card = (item) => {
  const [show, setShow] = useState(true);
  const routeState = useNavigationState((state) => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const currentRoute = routeState.routes[routeState.index];

    if (currentRoute) {
      if (currentRoute.name === "cart") {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, [routeState]);

  return (
    <TouchableWithoutFeedback
      key={item.id}
      onPress={() => navigation.navigate("product", { ...item })}
    >
      <View
        style={{
          position: "relative",
          marginTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
          gap: 20,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            show
              ? dispatch(removeFromCart(item.id))
              : dispatch(removeFromFavorite(item.id));
            dispatch(cartTotalPrice());
            dispatch(cartTotal());
          }}
        >
          <Feather
            name="x"
            size={30}
            color="black"
            style={{
              position: "absolute",
              zIndex: 1,
              right: 24,
              top: 3,
              color: "#c99d6b",
            }}
          />
        </TouchableWithoutFeedback>

        <View
          style={{
            backgroundColor: "#fff",
            height: 96,
            width: "100%",
            borderRadius: 16,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <View>
            <Image
              source={item.image}
              style={{
                width: 80,
                height: 80,
                objectFit: "cover",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#c99d6b",
                }}
              >
                Small
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                {item.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginLeft: 16,
                paddingLeft: 10,
                paddingRight: 10,
                paddingBottom: 5,
                paddingTop: 5,
              }}
            >
              {/* <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#c99d6b",
            }}
            onPress={()=>dispatch(decrease())}
          >
            <MinusIcon size="20" color={"#c99d6b"} />
          </TouchableOpacity> */}
              <Text
                style={{
                  color: "#c99d6b",
                  fontSize: 18,
                  lineHeight: 28,
                  fontWeight: 800,
                }}
              >
                {item.quantity} {show ? "CUPS" : "1 CUPS"}
              </Text>
              {/* <TouchableOpacity
          onPress={()=>dispatch(increase())}
            style={{
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#c99d6b",
            }}
          >
            <PlusIcon size="20" color={"#c99d6b"} />
          </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
