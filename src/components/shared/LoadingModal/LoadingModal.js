import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./LoadingModal.styles";
import { Overlay, Text } from "@rneui/themed";

export function LoadingModal(props) {
  const { show, text } = props;
  return (
    <Overlay isVisible={show} overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size={"large"} color={"#00A680"} />
        {/* Si vieen el parametro text muestra esto */}
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

LoadingModal.defaultProps = {
  show: false,
};
