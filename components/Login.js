import { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import {
  ArrowLeftCircleIcon,
  PencilSquareIcon,
} from "react-native-heroicons/outline";
import Toast from "react-native-toast-message";
const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    if (username == "coffee" && password == "coffee") {
      setUsername("");
      setPassword("");
      Toast.show({
        type: 'success',
        text1: 'Your order has been received.',
        text2: 'Thank you',
        position: 'top',
        topOffset: 90,
      });
      setTimeout(() => {
        navigation.navigate("home");
      }, 1000); 
    
    } else {
      setError("Incorrect username or password.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <StatusBar style="light" />
      <Image
        source={require("../assets/bgcoffe.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.2,
          position: "absolute",
        }}
      />
      <Image
        source={require("../assets/coffeebglogin.png")}
        style={{
          width: 270,
          height: 210,
          objectFit: "cover",
          top: 150,
          bottom: 0,
          left: "21%",
          right: 0,
          opacity: 1,
          position: "absolute",
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
            LOGIN
          </Text>
          <TouchableOpacity>
            <PencilSquareIcon size={30} color={"#c99d6b"} />
          </TouchableOpacity>
        </View>
        {/* Cart Main */}
        <View
          style={{
            height: "100%",
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={{
              height: 50,
              width: "80%",
              borderColor: "gray",
              backgroundColor: "#c99d6b",
              borderWidth: 1,
              borderRadius: 20,
              marginBottom: 20,
              paddingLeft: 10,
            }}
            placeholder="Name"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={{
              height: 50,
              width: "80%",
              backgroundColor: "#c99d6b",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 20,
              marginBottom: 20,
              paddingLeft: 10,
            }}
            placeholder="Şifre"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          {error ? (
            <Text style={{ color: "red", marginBottom: 10, fontSize: 18 }}>
              {error}
            </Text>
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: "#c99d6b",
              padding: 10,
              borderRadius: 10,
            }}
            onPress={handleLogin}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
