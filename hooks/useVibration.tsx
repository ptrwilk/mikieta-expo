import { useEffect, useState } from "react";

import { Vibration } from "react-native";

export const useVibration = () => {
  const [enabled, setEnabled] = useState(false);

  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const enable = () => {
    if (enabled) {
      return;
    }

    setEnabled(true);
    Vibration.vibrate(PATTERN, true);
  };

  const disable = () => {
    if (!enabled) {
      return;
    }

    setEnabled(false);
    Vibration.cancel();
  };

  useEffect(() => {
    disable();
  }, []);

  return {
    enable: enable,
    disable: disable,
  };
};
