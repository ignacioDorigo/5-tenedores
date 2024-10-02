import React from "react";
import { View } from "react-native";
import { Icon, Text, Input, Button } from "@rneui/base";
import { styles } from "./ChangeDisplayNameForm.styles";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
import { useFormik } from "formik";
import { getAuth, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";

export function ChangeDisplayNameForm(props) {
  const { onClose, onReload } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;
        await updateProfile(user, { displayName: formulario.displayName });
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Exito",
          text2: "Nombre cambiado correctamente",
        });
        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: `${error}`,
        });
        
        onClose();
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellido"
        autoCapitalize="none"
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage={formik.errors.displayName}
        rightIcon={
          <Icon
            type="material-community"
            name="account-circle-outline"
            color="#C1C1C1"
          />
        }
      />

      <Button
        title="Cambiar nombre y apellido"
        containerStyle={styles.container}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
