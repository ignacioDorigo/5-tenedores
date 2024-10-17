import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { styles } from "./RegisterForm.styles";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const navigation = useNavigation();

  const mostrarOcultarPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const mostrarOcultarRepeatPassword = () => {
    setShowRepeatPassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        const response = await createUserWithEmailAndPassword(
          auth,
          formulario.email,
          formulario.password
        );
        navigation.navigate(screen.account.login);
        Toast.show({
          type: "success",
          text1: "Exito",
          text2: "Registro exitoso",
          position: "bottom",
        });
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
          position: "bottom",
        });
        console.log(error);
      }
    },
  });
  return (
    <View styles={styles.content}>
      {/* Email */}
      <Input
        placeholder="Correo Electronico"
        errorMessage={formik.errors.email}
        onChangeText={(dato) => formik.setFieldValue("email", dato)}
        autoCapitalize="none"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.icon}
          ></Icon>
        }
      ></Input>

      {/* Contrasena */}
      <Input
        placeholder="Contraseña"
        errorMessage={formik.errors.password}
        onChangeText={(dato) => formik.setFieldValue("password", dato)}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
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

      {/* Repetir Contrasena */}
      <Input
        placeholder="Repetir Contraseña"
        errorMessage={formik.errors.repeatPassword}
        onChangeText={(dato) => formik.setFieldValue("repeatPassword", dato)}
        secureTextEntry={!showRepeatPassword}
        autoCapitalize="none"
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={mostrarOcultarRepeatPassword}
          ></Icon>
        }
      ></Input>

      <Button
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        title={"Registrarse"}
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
      />
    </View>
  );
}
