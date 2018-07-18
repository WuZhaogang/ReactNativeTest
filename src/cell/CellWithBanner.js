import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'
import BaseComponent from "../base/BaseComponent";
import Swiper from 'react-native-swiper';

const color = {
    theme: '#06C1AE',
    border: '#e0e0e0',
    background: '#f3f3f3'
}

export default class Cell extends BaseComponent {

    render() {
        console.log('render cell')
        let {info} = this.props

        info.imageUrl = info.imageUrl.replace('w.h', '160.0')
        let touch = null;
        if (info.type === 1) {
            touch = <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={{uri: info.imageUrl}} style={styles.icon}/>

                <View style={styles.rightContainer}>
                    <Text style={styles.h1}>{info.title}</Text>
                    <View>
                    </View>
                    <Text style={styles.p} numberOfLines={0}>{info.subtitle}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={[styles.h1, styles.price]}>{info.price}元</Text>
                    </View>

                </View>
            </TouchableOpacity>
        } else {
            touch = <View style={styles.container} >
                <Swiper style={styless.wrapper} showsButtons={true} autoplay>
                    <View style={styless.slide1}>
                        <Text style={styless.text}>Hello Swiper</Text>
                    </View>
                    <View style={styless.slide2}>
                        <Text style={styless.text}>Beautiful</Text>
                    </View>
                    <View style={styless.slide3}>
                        <Text style={styless.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        }
        return (
            touch
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: color.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: color.theme
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#222222',
    },
    p: {
        fontSize: 13,
        marginTop: 8,
        color: '#777777',
    },
});

const styless = StyleSheet.create({
    wrapper: {
        height: 200,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})
