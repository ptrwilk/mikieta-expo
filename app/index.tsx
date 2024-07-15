import { NotificationModal } from "@/components/NotificationModal";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { NotificationToggle } from "@/components/NotificationToggle";
import { useSignalR } from "@/hooks/useSignalR";
import { notificationCache } from "@/cache";

export default function Test() {
  const [notificationOpened, setNotificationOpened] = useState(false);

  const { enabled, start, stop } = useSignalR(
    {
      url: `${process.env.EXPO_PUBLIC_API_URL}/messageHub`,
    },
    [
      {
        methodName: "OrderMade",
        callback: () => {
          setNotificationOpened(true);
        },
      },
    ]
  );

  useEffect(() => {
    (async () => {
      const notificationEnabled = await notificationCache.getEnabled();

      if (notificationEnabled) {
        start();
      }
    })();
  }, []);

  const handleClick = async () => {
    if (enabled) {
      await stop();
      await notificationCache.setEnabled(false);
    } else {
      await start();
      await notificationCache.setEnabled(true);
    }
  };

  return (
    <View style={styles.container}>
      <NotificationToggle enabled={enabled} onClicked={handleClick} />
      <NotificationModal
        opened={notificationOpened}
        onClose={() => setNotificationOpened(false)}
      />
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
