import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

interface INotificationToggleProps {
  enabled?: boolean;
  onClicked?: () => void;
}

const NotificationToggle: React.FC<INotificationToggleProps> = ({
  enabled,
  onClicked,
}) => {
  return (
    <View style={{ alignItems: "center", gap: 20, opacity: enabled ? 1 : 0.5 }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          fontFamily: Fonts.fontFamily.bold,
          color: Colors.light.primary,
        }}
      >
        {enabled ? "Powiadomienia włączone" : "Powiadomienia wyłączone"}
      </Text>
      <View style={{ overflow: "hidden", borderRadius: 50 }}>
        <TouchableRipple
          onPress={() => !enabled && onClicked?.()}
          onLongPress={() => enabled && onClicked?.()}
          rippleColor={Colors.light.primary}
          style={{
            borderColor: Colors.light.primary,
            borderWidth: 1,
            borderRadius: 50,
            padding: 10,
          }}
        >
          <Entypo
            name={enabled ? "sound" : "sound-mute"}
            size={40}
            color={Colors.light.primary}
          />
        </TouchableRipple>
      </View>
      {enabled && (
        <Text style={{ fontFamily: Fonts.fontFamily.regular }}>
          {"(przytrzymaj dłużej aby wyłączyć)"}
        </Text>
      )}
    </View>
  );
};

export { NotificationToggle };
