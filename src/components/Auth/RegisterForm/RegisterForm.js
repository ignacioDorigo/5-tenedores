import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./RegisterForm.styles";
import { Button, Icon, Input } from "@rneui/themed";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { useFormik } from "formik";

export function RegisterForm() {
  const [mostrarPass, setMostrarPass] = useState(true);
  const [mostrarRepeat, setMostrarRepeat] = useState(true);

  const mostrarOcultarPass = () => {
    setMostrarPass((prevState) => !prevState);
  };

  const mostrarOcultarRepeat = () => {
    setMostrarRepeat((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formulario) => {
      try {
        console.log("Formulario");
        console.log(formulario);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <View style={styles.viewRegister}>
      {/* EMAIL */}
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputContainer}
        errorMessage={formik.errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(dato) => formik.setFieldValue("email", dato)}
        rightIcon={
          <Icon
            type="material-community"
            name="email-outline"
            iconStyle={styles.iconInput}
          />
        }
      />

      {/* Password */}
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputContainer}
        errorMessage={formik.errors.password}
        secureTextEntry={mostrarPass}
        autoCapitalize="none"
        onChangeText={(dato) => formik.setFieldValue("password", dato)}
        rightIcon={
          <Icon
            type="material-community"
            name={mostrarPass ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconInput}
            onPress={mostrarOcultarPass}
          />
        }
      />

      {/* Repeat */}
      <Input
        placeholder="Repetir contraseña"
        containerStyle={styles.inputContainer}
        errorMessage={formik.errors.repeatPassword}
        secureTextEntry={mostrarRepeat}
        autoCapitalize="none"
        onChangeText={(dato) => formik.setFieldValue("repeatPassword", dato)}
        rightIcon={
          <Icon
            type="material-community"
            name={mostrarRepeat ? "eye-outline" : "eye-off-outline"}
            iconStyle={styles.iconInput}
            onPress={mostrarOcultarRepeat}
          />
        }
      />

      <Button
        title={"Registrarme"}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
      />
    </View>
  );
}
