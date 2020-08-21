import React from 'react'
import { View, Text } from 'react-native'

import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles'


interface HeaderProps {
    title: string,
}

const HeaderBack: React.FC<HeaderProps> = ({ title }) => {
    const { goBack } = useNavigation()

    function handleNavigateToback() {
        goBack()
    }
    return (
        <View style={styles.header}>
            <View style={styles.content}>
                <BorderlessButton style={styles.button} onPress={handleNavigateToback}>
                    <AntDesign name="arrowleft" style={styles.iconBak} />
                </BorderlessButton>

                <Text style={styles.titleHeader}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default HeaderBack