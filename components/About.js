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

const About = () => {
  const navigation = useNavigation();

  const handleWebSiteLinkPress = () => {
    Linking.openURL("http://www.example.com");
  };

  const handleEmailLinkPress = () => {
    Linking.openURL("mailto:info@example.com");
  };

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
            ABOUT
          </Text>
          <TouchableOpacity>
            <PencilSquareIcon size={30} color={"#c99d6b"} />
          </TouchableOpacity>
        </View>
        {/* Cart Main */}

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 380,
              height: 500,
              marginTop: 70,
              padding: 30,
              borderRadius: 70,
              backgroundColor: "#fff",
              elevation: 8,
            }}
          >
            <View style={{ padding: 16 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 8,
                  color: "#c99d6b",
                }}
              >
                COFFEELAND
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Versiya: 1.0.0
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Hazırladı: Əlicanov Məlik
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Əlaqə:
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    color: "rgb(55, 65, 81)",
                  }}
                  onPress={handleEmailLinkPress}
                >
                  {" "}
                  alicanov1998@gamil.com
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: "rgb(55, 65, 81)",
                }}
              >
                İnstagram:
                <Text
                  style={{
                    color: "blue",
                    textDecorationLine: "underline",
                    color: "rgb(55, 65, 81)",
                  }}
                  onPress={handleWebSiteLinkPress}
                >
                  {" "}
                  @alicanov98
                </Text>
              </Text>

              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 16,
                  marginBottom: 8,
                  color: "#c99d6b",
                }}
              >
                Hakkında
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginBottom: 8,
                  color: "rgb(55, 65, 81)",
                }}
              >
                Coffeland, Qəhvə növlərinin ən yaxşılarını təqdim edən bir mobil
                tətbiqdir. Coffeland ilə Qəhvələrin sifarişi asanlıqla həyata
                keçirilir. Coffeland, istifadəçi dostu interfeysi, güclü
                performansı və müxtəlif xüsusiyyətləri ilə diqqət çəkir.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default About;
