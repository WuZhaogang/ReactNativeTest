import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';

export default class NaviModel extends React.Component {

    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });


    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPw: ''
        }
        this.updateNum = this.updateNum.bind(this);
    }


    updatePw(newText) {
        this.setState(() => {
            return {
                inputedPw: newText
            }
        })
    }

    updateNum(newText) {
        this.setState(() => {
            return {
                inputedNum: newText
            }
        })
    }

    userConfirm() {
        alert("啦啦啦")
    }

    render() {
        return (
            <View>
                <Text>
                    Welcome to React Native!
                </Text>
                <Text
                    onPress={() => this.userConfirm()}>
                    To get started, edit App.js
                </Text>
                <Text>
                    dasdasdasdasdasdasdasdasdadasd{this.state.inputedNum}
                </Text>
                <TextInput placeholder={'啦啦啦'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <TextInput placeholder={'密码'}
                           onChangeText={(newText) => this.updatePw(newText)}
                           secureTextEntry={true}/>
                <Text>
                    这是一个图片啊 啊啊啊
                </Text>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                       style={{width: 200, height: 200, resizeMode: Image.resizeMode.contain}}>
                </Image>
            </View>

        );
    }

    onPicLoadEnd() {
        this.updateNum("dasdasdasd1231231231223213")
    }


}


