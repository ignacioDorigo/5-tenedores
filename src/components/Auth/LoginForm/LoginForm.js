import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./LoginForm.styles";
import { Button, Input, Icon } from "@rneui/base";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils";

export function LoginForm() {
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const mostrarOcultarPassword = () => {
    setMostrarPassword((prevState) => !prevState);
  };

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formulario.email,
          formulario.password
        );
        navigation.navigate(screen.account.account);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: `Usuario o contraseña incorrectos`,
        });
      }
    },
  });

  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        errorMessage={formik.errors.email}
        autoCapitalize="none"
        containerStyle={styles.input}
        onChangeText={(datoInput) => formik.setFieldValue("email", datoInput)}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />

      <Input
        placeholder="Password"
        errorMessage={formik.errors.password}
        autoCapitalize="none"
        containerStyle={styles.input}
        secureTextEntry={mostrarPassword ? false : true}
        onChangeText={(datoInput) =>
          formik.setFieldValue("password", datoInput)
        }
        rightIcon={
          <Icon
            type="material-community"
            name={mostrarPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={mostrarOcultarPassword}
          />
        }
      />

      <Button
        containerStyle={styles.bntContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        title="Iniciar Sesión"
        loading={formik.isSubmitting}
      />
    </View>
  );
}
