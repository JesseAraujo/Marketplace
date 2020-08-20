import React from 'react'
import { Image } from 'react-native'

import styles from './styles'

import imageCarousel from '../../assets/banner/imagePizza.jpg'

function Carousel() {
    return (
        <Image source={imageCarousel} style={styles.image} />
    )
}


export default Carousel