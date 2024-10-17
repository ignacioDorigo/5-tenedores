import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Debes ingresar un formato email")
      .required("El email es obligatorio"),
    password: Yup.string()
      .required("El password es obligatorio"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Debes repetir el password"),
  });
}
