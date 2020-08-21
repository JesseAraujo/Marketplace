import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'

interface InputTextProps {
    label: string,
    placeholder: string,
    secure: boolean,
}

const InputText: React.FC<InputTextProps> = ({ label, placeholder, secure}) => {

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#c1bccc"
                secureTextEntry={secure}
            />
        </>
    )
}

export default InputText