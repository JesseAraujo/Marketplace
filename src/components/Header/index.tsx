import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

interface HeaderProps {
    title: string,
}

const HeaderPage: React.FC<HeaderProps> = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>
                {title}
            </Text>
        </View>
    )
}

export default HeaderPage