import "react-native-reanimated";

import { Text, View } from "react-native";
import { Fonts } from "@/constants/Fonts";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <FontAwesome name="bell" size={40} color={Colors.light.primary} />
      <Text
        style={{
          fontSize: 20,
          fontFamily: Fonts.fontFamily.bold,
          color: Colors.light.primary,
        }}
      >
        Mikieta Powiadomienia
      </Text>
    </View>
  );
};

export { Header };
