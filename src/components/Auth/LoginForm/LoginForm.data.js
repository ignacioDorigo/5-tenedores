import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Debe tener formato email")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(6, "La contraseña debe tener minimo 6 caracteres")
      .required("La contraseña es obligatoria"),
  });
}
