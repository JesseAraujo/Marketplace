import React from 'react'
import { View, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

interface ButtonSimpleProps {
    text: string,
    page: string
}

const ButtonSimple: React.FC<ButtonSimpleProps> = ({ text, page }) => {
    const { navigate } = useNavigation()

    function handleNavigateTo() {
        navigate(page)
    }
    return (

        <>
            <RectButton style={styles.button} onPress={handleNavigateTo}>
                <Text style={styles.textButton}>
                    {text}
                </Text>
            </RectButton>
        </>


    )
}

export default ButtonSimple