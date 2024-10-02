import React from "react";
import { View } from "react-native";
import { Button, Input } from "@rneui/base";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
} from "firebase/auth";
import { styles } from "./ChangeEmailForm.styles";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";

export function ChangeEmailForm(props) {
  const { onReload, onClose } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        // Verificar si el correo actual está verificado
        // if (user.emailVerified === false) {
        //   await sendEmailVerification(user);
        //   Toast.show({
        //     type: "info",
        //     position: "bottom",
        //     text1: "Verificación requerida",
        //     text2: "Se envió un correo de verificación. Verifica tu correo antes de cambiarlo.",
        //   });
        //   return; // Salir si el correo no está verificado
        // }

        // Reautenticación con el correo y la contraseña actual del usuario
        const credentials = EmailAuthProvider.credential(
          user.email, // correo actual
          formulario.passwordActual // contraseña ingresada
        );

        // Reautenticación
        await reauthenticateWithCredential(user, credentials);

        // Actualizar el correo
        await updateEmail(user, formulario.email);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Éxito",
          text2: "Correo electrónico cambiado con éxito",
        });

        // Recargar y cerrar el formulario
        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: error.message, // Mostrar el mensaje del error
        });
        console.log(error);
        onClose();
      }
    },
  });

  return (
    <View>
      <Input
        placeholder="Nuevo email"
        autoCapitalize="none"
        errorMessage={formik.errors.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
      />
      <Input
        placeholder="Contraseña actual"
        secureTextEntry={true}
        errorMessage={formik.errors.passwordActual}
        onChangeText={(text) => formik.setFieldValue("passwordActual", text)}
      />
      <Button
        title="Cambiar email"
        containerStyle={styles.container}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
