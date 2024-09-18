import React from "react";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function SwipeDetector({ children, onSwipe }) {
  const startTranslateX = useSharedValue(0);

  const fling = Gesture.Fling()
    .direction(Directions.UP | Directions.DOWN)
    .onBegin((event) => {
      startTranslateX.value = event.y;
    })
    .onStart((event) => {
      const direction = event.y - startTranslateX.value < 0 ? "down" : "up";
      onSwipe(direction);
    })
    .runOnJS(true);

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={fling}>
        <View style={{ flex: 1 }}>{children}</View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     width: 100,
//     height: 100,
//     borderRadius: 20,
//     backgroundColor: "#b58df1",
//     cursor: "grab",
//   },
// });
