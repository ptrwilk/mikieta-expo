import React, { useEffect, useRef } from "react";
import { View, Animated, Easing, StyleProp, ViewStyle } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface IAnimatedBellProps {
  style?: StyleProp<ViewStyle>;
}

const AnimatedBell: React.FC<IAnimatedBellProps> = ({ style }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const size = 150;

  useEffect(() => {
    const animate = () => {
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 400,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Powtórz animację po krótkiej przerwie
        setTimeout(animate, 1000);
      });
    };

    animate();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-20deg", "20deg"],
  });

  return (
    <View style={style}>
      <Animated.View
        style={{
          width: size,
          transform: [{ rotate }],
        }}
      >
        <FontAwesome
          name="bell"
          size={size}
          color={Colors.light.primary}
          style={{ transform: [{ translateY: size / 2 }], opacity: 0.3 }}
        />
      </Animated.View>
    </View>
  );
};

export { AnimatedBell };
