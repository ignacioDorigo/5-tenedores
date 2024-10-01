import React from 'react'
import { View, Text } from 'react-native'
import { Image } from '@rneui/base'
import { styles } from './RegisterScreen.styles'
import { RegisterForm } from '../../../components/Auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export function RegisterScreen() {
    return (
        <KeyboardAwareScrollView >
            <Image style={styles.image} source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")} />
            <View style={styles.content}>
                <RegisterForm />
            </View>

        </KeyboardAwareScrollView>
    )
}