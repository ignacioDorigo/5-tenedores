import { Button, Icon, Input } from "@rneui/themed";
import { useFormik } from "formik";
import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function LoginForm() {
  const navigation = useNavigation();
  const [mostrar, setMostrar] = useState(true);

  const mostrarOcultarPassword = () => {
    setMostrar((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: async (formulario) => {
      try {
        const auth = getAuth();
        console.log(formulario);
        await signInWithEmailAndPassword(
          auth,
          formulario.email,
          formulario.password
        );
        Alert.alert("Exito", "Login exitoso", [
          {
            text: "",
            onPress: () => navigation.navigate(screen.account.account),
          },
        ]);
      } catch (error) {
        console.log(error);
        Alert.alert("Error", "Credenciales incorrectas");
      }
    },
  });
  return (
    <View style={styles.viewRegister}>
      <Input
        placeholder="Correo electronico"
        errorMessage={formik.errors.email}
        onChangeText={(dato) => formik.setFieldValue("email", dato)}
        autoCapitalize="none"
        keyboardType="email-address"
        rightIcon={
          <Icon
            type="material-community"
            name="email-outline"
            iconStyle={styles.iconInput}
          />
        }
      />
      <Input
        placeholder="Contraseña"
        errorMessage={formik.errors.password}
        onChangeText={(dato) => formik.setFieldValue("password", dato)}
        autoCapitalize="none"
        secureTextEntry={mostrar}
        rightIcon={
          <Icon
            type="material-community"
            name={mostrar ? "eye-outline" : "eye-off-outline"}
            onPress={mostrarOcultarPassword}
            iconStyle={styles.iconInput}
          />
        }
      />
      <Button
        title={"Ingresar"}
        buttonStyle={styles.btn}
        containerStyle={styles.btnContainer}
        loading={formik.isSubmitting}
        onPress={formik.handleSubmit}
      />
    </View>
  );
}
