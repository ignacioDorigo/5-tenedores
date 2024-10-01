import * as Yup from 'yup'

// Esto me da los valores iniciales del formulario, 
// lo puedo hacer directamente en formik si quiero
export function initialValues() {
    return ({
        email: "",
        password: "",
        repeatPassword: "",


    })
}

export function validationSchema() {
    return Yup.object({
        email: Yup.string()
            .email("El email debe tener un formato correcto")
            .required("El email es obligatorio"),
        password: Yup.string()
            .min(6, "La contraseña minimo debe tener 6 caracteres")
            .required("La contraseña es obligatoria"),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
            .required("Repita la contraseña"),
    });
}