import React, { useState } from 'react'
import { View } from 'react-native'
import { styles } from './RegisterForm.styles'
import { Icon, Button, Input, Text } from '@rneui/themed'
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './RegisterForm.data'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { screen } from '../../../utils'
import Toast from 'react-native-toast-message';

export function RegisterForm() {
    const navigation = useNavigation();
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarRepeatPassword, setMostrarRepeatPassword] = useState(false);

    const mostrarOcultarPassword = () => {
        (setMostrarPassword(prevState => !prevState))
    }

    const mostrarOcultarRepeatPassword = () => {
        setMostrarRepeatPassword(prevState => !prevState);
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formulario) => {
            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, formulario.email, formulario.password)
                Toast.show({
                    type: 'success',
                    position: 'bottom',
                    text1: 'Registro exitoso',
                    text2: 'Registro completado exitosamente',

                });
                // Despues de registrarme firebase, automaticamente me loguea
                navigation.navigate(screen.account.login);

            } catch (error) {
                Toast.show({
                    type: 'error',
                    position: 'bottom',
                    text1: 'Error',
                    text2: `${error.code}`
                })
                console.log(error)
            }

        }
    });


    return (
        <View style={styles.content}>
            <Input
                autoCapitalize='none'
                placeholder="Correo electronico"
                containerStyle={styles.input}
                onChangeText={(datoInput) => formik.setFieldValue("email", datoInput)}
                errorMessage={formik.errors.email}
                rightIcon={
                    <Icon
                        name='at'
                        type='material-community'
                        iconStyle={styles.icon}
                    />
                }
            />
            <Input
                autoCapitalize='none'
                placeholder="Contraseña"
                secureTextEntry={mostrarPassword === false ? true : false}
                containerStyle={styles.input}
                onChangeText={(datoInput) => formik.setFieldValue("password", datoInput)}
                errorMessage={formik.errors.password}
                rightIcon={
                    <Icon
                        name={mostrarPassword === false ? 'eye-outline' : "eye-off-outline"}
                        type='material-community'
                        iconStyle={styles.icon}
                        onPress={mostrarOcultarPassword}
                    />
                }
            />
            <Input
                autoCapitalize='none'
                placeholder="Repeat contraseña"
                secureTextEntry={mostrarRepeatPassword ? false : true}
                containerStyle={styles.input}
                onChangeText={(datoInput) => formik.setFieldValue("repeatPassword", datoInput)}
                errorMessage={formik.errors.repeatPassword}
                rightIcon={
                    <Icon
                        name={mostrarRepeatPassword ? 'eye-off-outline' : 'eye-outline'}
                        type='material-community'
                        iconStyle={styles.icon}
                        onPress={mostrarOcultarRepeatPassword}
                    />
                }
            />
            <Button onPress={formik.handleSubmit} loading={formik.isSubmitting} title='Unirse' containerStyle={styles.btnContainer} buttonStyle={styles.btn} />
        </View>
    );
}