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
      .email("Debe tener formato email")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe contener al menos 6 caracteres")
      .required("La contraseña es obligatoria"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
      .required("Debes repetir la contraseña"),
  });
}
