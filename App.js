import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    NativeModules,
    ToastAndroid,
    DeviceEventEmitter,
    Platform,
    InteractionManager
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import NaviModel from "./src/screen/Login";
import MainScreen from "./src/screen/MainScreen";
import SwiperScreen from "./src/screen/SwiperScreen";
import FlatListScreen from "./src/screen/FlatListScreen";
import FlatListBannerScreen from "./src/screen/FlatListBannerScreen";
import AlertScreen from "./src/screen/AlertScreen";
import DropDownScreen from "./src/screen/DropDownScreen";
import ImagePickerScene from "./src/screen/ImagePickerScene";


class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome',
    };

    componentDidMount() {
        DeviceEventEmitter.addListener('data', (msg) => {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        })
        DeviceEventEmitter.addListener('jumpToRn', () => {
            ToastAndroid.show("跳啊", ToastAndroid.SHORT);
            let {navigate} = this.props.navigation;
            navigate('Chat', {user: 'Lucyss'})
        })
    }

    componentWillUnmount() {
    }

    render() {
        let {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Lucyss'})}
                    title="Chat with Lucy"
                />
                <Button
                    onPress={() => navigate('Login', {user: 'Lucyaa'})}
                    title="Login"
                />
                <Button
                    onPress={() => navigate('Bottom', {user: 'lasddd'})}
                    title="底部导航啊"/>
                <Button
                    onPress={() => navigate('Swipe', {user: 'lalalal'})}
                    title="广告栏"/>
                <Button
                    onPress={() => navigate('List', {user: 'lalalal'})}
                    title="列表"/>
                <Button
                    onPress={() => navigate('ListWithBanner', {user: 'lalalals'})}
                    title="列表嵌套banner"/>
                <Button
                    onPress={() => navigate('AlertDialog', {user: 'lalalals'})}
                    title="弹出框"/>

                <Button
                    onPress={() => navigate('DropDown', {user: 'DropDown'})}
                    title="下拉框"/>
                <Button
                    onPress={() =>
                        (Platform.OS === 'android') ? NativeModules
                                .IntentModel
                                .startActivityFormJS("com.wzg.rntest.Ac_JumpToAndroid", null)
                            :
                            InteractionManager.runAfterInteractions(() => {
                                // RNOpenOneVC这个也是写在原生里面的再PushNative中哦~
                                NativeModules.PushNative.RNOpenOneVC('测试');
                            })}
                    title="跳转到原生呦"/>
                <Button
                    onPress={() => NativeModules
                        .IntentModel
                        .startActivityFormJS("com.wzg.rntest.Ac_JumpToAndroid", "dsadadasdas")}
                    title="跳转到原生传参呦"/>

                <Button title="选择图片"
                        onPress={() => {
                            navigate('choiceImage', {user: 'choiceImage'})
                        }}/>
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    render() {
        // The screen's current route is passed in to `props.navigation.state`:
        try {
            var {params} = this.props.navigation.state;
        } catch (e) {
            // alert(e.toString())
        }
        return (
            <View>
                <Text>Chat with
                </Text>
            </View>
        );
    }
}

const SimpleAppNavigator = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Bottom: {screen: MainScreen},
    Login: {screen: NaviModel},
    Swipe: {screen: SwiperScreen},
    List: {screen: FlatListScreen},
    ListWithBanner: {screen: FlatListBannerScreen},
    AlertDialog: {screen: AlertScreen},
    DropDown: {screen: DropDownScreen},
    JumpToAndroid: {screen: DropDownScreen},
    choiceImage: {screen: ImagePickerScene}
}, {
    navigationOptions: {
        gesturesEnabled: false
    }
});

const AppNavigation = () => (
    <SimpleAppNavigator/>
);

export default class App extends React.Component {
    render() {
        return (
            <AppNavigation/>
        );
    }
}

AppRegistry.registerComponent('Home', () => MainScreen);

