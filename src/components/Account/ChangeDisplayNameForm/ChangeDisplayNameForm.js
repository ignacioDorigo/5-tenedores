import React from "react";
import { View } from "react-native";
import { Icon, Text, Input, Button } from "@rneui/base";
import { styles } from "./ChangeDisplayNameForm.styles";

export function ChangeDisplayNameForm() {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellido"
        rightIcon={
          <Icon type="material-community" name="account-circle-outline" color="#C1C1C1" />
        }
      />

      <Button title="Cambiar nombre y apellido" containerStyle={styles.container} buttonStyle={styles.btn}/>
    </View>
  );
}
