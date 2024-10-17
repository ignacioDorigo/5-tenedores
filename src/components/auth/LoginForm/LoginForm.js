import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import { styles } from "./LoginForm.styles";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const mostrarOcultarPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formulario.email,
          formulario.password
        );
        navigation.navigate(screen.account.account);
        Toast.show({
          type: "success",
          position: "bottom",
          text1: "Exito",
          text2: "Login exitoso",
        });
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error",
          text2: error.message,
        });
      }
    },
  });
  return (
    <View style={styles.content}>
      {/* EMAIL */}
      <Input
        placeholder="Correo Electronico"
        errorMessage={formik.errors.email}
        autoCapitalize="none"
        onChangeText={(dato) => formik.setFieldValue("email", dato)}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.icon}
          ></Icon>
        }
      ></Input>

      {/* PASSWORD */}
      <Input
        placeholder="Contraseña"
        errorMessage={formik.errors.password}
        autoCapitalize="none"
        secureTextEntry={!showPassword}
        onChangeText={(dato) => formik.setFieldValue("password", dato)}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={mostrarOcultarPassword}
          ></Icon>
        }
      ></Input>

      <Button
        title={"Ingresar"}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
