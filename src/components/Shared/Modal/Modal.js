import React from "react";
import { View, Text } from "react-native";
import { Overlay } from "@rneui/themed";
import { styles } from "./Modal.styles";

export function Modal(props) {
  const { show, close, children } = props;

  return (
    <Overlay
      isVisible={show}
      overlayStyle={styles.overlay}
      // Es para cuando haga click fuera del modal, se salga el modal
      onBackdropPress={close}
    >
      {children}
    </Overlay>
  );
}
