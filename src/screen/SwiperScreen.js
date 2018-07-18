import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import Swiper from 'react-native-swiper';



const styles = StyleSheet.create({
    wrapper: {
        height:200,
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

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{color: 'grey'}}>
                <Text style={styles.text}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

export default class SwiperScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title : `Chat with ${navigation.state.params.user}`,
    });

    constructor(props) {
        super(props);
        // 用于构建DataSource对象

    }


    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} autoplay>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>

        );
    }
}
