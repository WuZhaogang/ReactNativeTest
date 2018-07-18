import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import Swiper from 'react-native-swiper';

const BANNER_IMGS = [
    require('../../images/banner/1.jpg'),
    require('../../images/banner/2.jpg'),
    require('../../images/banner/3.jpg'),
    require('../../images/banner/4.jpg')
];


const styles = StyleSheet.create({
    wrapper: {},
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
export default class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        this.state = {
            visibleSwiper: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);
    }

    render() {
        let swiper = null;
        if (this.state.visibleSwiper) {
            swiper = <Swiper dotColor={'white'}
                             activeDotColor={'#FF0A0A'}
                             height={250} horizontal={true}
                             loop={false} bounces={true}
                             removeClippedSubviews={false} autoplay>
                <View style={styles.slide1}>
                    <Image resizeMode='cover' style={styles.image} source={BANNER_IMGS[0]}/>
                </View>
                <View style={styles.slide1}>
                    <Image resizeMode='cover' style={styles.image} source={BANNER_IMGS[1]}/>
                </View>
            </Swiper>;
        } else {
            swiper = <View></View>;
        }
        return (swiper);
    }
}
