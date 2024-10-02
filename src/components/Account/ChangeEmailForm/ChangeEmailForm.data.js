import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    passwordActual: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Debe tener formato mail")
      .required("El mail es obligatorio"),
    passwordActual: Yup.string().required("La contraseña es obligatoria"),
  });
}
