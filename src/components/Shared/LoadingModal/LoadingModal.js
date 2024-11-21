import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { styles } from "./LoadingModal.styles";
import { Overlay } from "@rneui/base";

export function LoadingModal() {
  return (
    <Overlay overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size={"large"} color={"#00A680"} />
        <Text style={styles.text}>Cargando</Text>
      </View>
    </Overlay>
  );
}
