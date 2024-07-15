import { NotificationModal } from "@/components/NotificationModal";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NotificationToggle } from "@/components/NotificationToggle";

export default function Test() {
  const [opened, setOpened] = useState(false);

  return (
    <View style={styles.container}>
      <NotificationToggle
        enabled={opened}
        onClicked={() => setOpened(!opened)}
      />
      <NotificationModal opened={opened} onClose={() => setOpened(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.light.white,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
