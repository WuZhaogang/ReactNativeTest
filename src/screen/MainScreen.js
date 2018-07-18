import React from 'react';
import {TabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import SecondScreen from "./SecondScreen";
import {Platform, StyleSheet} from 'react-native';
import FetchUtils from '../http/FetchUtils'

export default class MainScreen extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '首页'
            //默认选择第一个页面（'消息'默认选择第二个页面）
            //this.setState({selectedTab:'首页'}) 这个用于切换页面
            //selectedTab：'' ->为不同的值，就切换对应的页面
        };
    }

    render() {
        testData();
        return (
            <Tabs/>
        );
    }
}

function testData() {
    FetchUtils.sendGet('https://facebook.github.io/react-native/movies.json', '',
        jsonData => {
            alert("country:" + jsonData.description + "-------city:" + jsonData.movies[0].title);
        })
}


let Tabs = TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: '账单'
        }
    },
    Second: {
        screen: SecondScreen,
        navigationOptions: {
            tabBarLabel: '我的'
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: false,
        showLabel: true,
        pressColor: '#823453',
        pressOpacity: 0.8,
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        labelStyle: {
            fontSize: 18,
            height: 25,
        },
        style: {
            backgroundColor: '#fff',
            paddingBottom: 0,
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
            height: (Platform.OS === 'ios') ? 50 : StyleSheet.contain
        },
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
    },
});






