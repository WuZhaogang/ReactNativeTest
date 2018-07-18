import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio} from 'react-native'
import BaseComponent from "../base/BaseComponent";
import {CachedImage} from "react-native-img-cache";

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
                    <CachedImage source={{uri: info.imageUrl}} style={styles.icon}/>
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
            touch = <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image source={{uri: info.imageUrl}} style={styles.icon}/>

                <View style={styles.rightContainer}>
                    <CachedImage source={{uri: info.imageUrl}} style={styles.icon}/>
                    <Text style={styles.h1}>{info.title + "dsadasdasdas"}</Text>
                    <View>
                    </View>
                    <Text style={styles.p} numberOfLines={0}>{info.subtitle}</Text>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Text style={[styles.h1, styles.price]}>{info.price}元</Text>
                    </View>

                </View>
            </TouchableOpacity>
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
        borderRadius: 20,//图片圆角
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
