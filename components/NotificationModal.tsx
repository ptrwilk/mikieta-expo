import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { View, StyleSheet, Modal, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { AnimatedBell } from "./AnimatedBell";

interface NotificationModalProps {
  opened?: boolean;
  onClose?: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  opened,
  onClose,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={opened}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ position: "absolute", top: 20 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  fontFamily: Fonts.fontFamily.bold,
                  color: Colors.light.primary,
                }}
              >
                NOWE POWIADOMIENIE
              </Text>
              <AnimatedBell
                style={{
                  position: "absolute",
                  top: -80,
                  right: 0,
                  left: 0,
                  alignItems: "center",
                }}
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: Fonts.fontFamily.medium,
                fontSize: 25,
                color: Colors.light.primary,
                marginTop: "auto",
              }}
            >
              Ktoś właśnie złożył zamówienie
            </Text>
            <TouchableRipple
              style={{ marginTop: "auto", alignSelf: "flex-end" }}
              onPress={onClose}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: Fonts.fontFamily.extraBold,
                  color: Colors.light.primary,
                }}
              >
                OK
              </Text>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  centeredView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 80,
    paddingBottom: 80,
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: 20,
    elevation: 5,
    backgroundColor: Colors.light.white,
    borderColor: Colors.light.primary,
    borderWidth: 1,
    borderRadius: 8,
  },
});

export { NotificationModal };
