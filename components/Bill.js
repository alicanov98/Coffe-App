import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";
const Bill = () => {
  const navigation = useNavigation();
  const [cartData, setCartData] = useState([]);
  const total = useSelector((state) => state.cartData.totalPrice);
  const subtotal = useSelector((state) => state.cartData.subTotal);

  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const newDate = new Date();
    setCurrentDate(newDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("cart");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setCartData(parsedData);
        }
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5e8e4",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 700,
          backgroundColor: "#fff",
          padding: 30,
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          position: "relative",
        }}
      >
        <Text
          style={{
            padding: 5,
            fontSize: 20,
            color: "rgb(55, 65, 81)",
            fontWeight: 700,
            position: "absolute",
            zIndex: 10,
            top: 90,
          }}
        >
          HERE IS YOUR CHECK
        </Text>
        <View
          style={{
            width: "100%",
            height: 500,
            marginTop: 70,
            padding: 30,
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 70,
            backgroundColor: "#fff",
            elevation: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "rgb(55, 65, 81)",
              }}
            >
              {currentDate
                ? `${format(currentDate, "dd.MM.yyyy")}`
                : "Loading..."}
            </Text>
            <Image
              source={require("../assets/coffe.png")}
              style={{
                width: 70,
                height: 70,
                objectFit: "cover",
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "rgb(55, 65, 81)",
              }}
            >
              COFFEELAND
            </Text>
            <Image
              source={require("../assets/wing.png")}
              style={{
                width: 140,
                height: 70,
                objectFit: "cover",
              }}
            />
          </View>
          <FlatList
            style={{
              marginTop: 25,
            }}
            data={cartData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  paddingLeft: 30,
                  paddingRight: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgb(55, 65, 81)",
                  }}
                >
                  {item.name} - {item.quantity}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "rgb(55, 65, 81)",
                  }}
                >
                  $ {item.price}
                </Text>
              </View>
            )}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
                position: "relative",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                SubTotal
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                ${subtotal.toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Cargo
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                $1.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "rgb(55, 65, 81)",
                }}
              >
                ${total.toFixed(2)}
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                left: 70,
                bottom: -20,
              }}
            >
              <Image
                source={require("../assets/paid.png")}
                style={{
                  width: 140,
                  height: 140,
                  objectFit: "cover",
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/coffeee.png")}
          style={{
            width: 200,
            height: 200,
            objectFit: "cover",
          }}
        />
        <View
          style={{
            flexDirection: "colmun",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#c99d6b",
              fontWeight: 700,
            }}
          >
            {" "}
            THANK YOU
          </Text>
          <Text
            style={{
              paddingBottom: 10,
              fontSize: 16,
              color: "#c99d6b",
              fontWeight: 700,
            }}
          >
            {" "}
            ENJOY YOUR DRINK!
          </Text>
          <TouchableOpacity
            style={{
              width: 90,
              height: 60,
              borderWidth: 1,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
              borderColor: "#c99d6b",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("home")}
          >
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                color: "#c99d6b",
                fontWeight: 700,
              }}
            >
              HOME
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bill;
