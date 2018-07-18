import React from "react"
import BaseComponent from "../base/BaseComponent";
import {Button, Image, Text, View} from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export default class ImagePickerScene extends BaseComponent {

    static navigationOptions = ({navigation}) => ({
        title: `${ navigation.state.params.user}`
    })

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: "",
            url: ""
        }
    }

    render() {
        return (
            <View>
                <Button
                    title="点我选图片啊"
                    onPress={() => {
                        this.choiceImage()
                    }}/>
                <Image source={{uri: this.state.avatarSource}} style={{
                    height: 300, width: 200
                }}/>
                <Text>{this.state.url}</Text>
            </View>
        );
    }


    choiceImage() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            this.setState({
                avatarSource: image.path,
                url: image.path
            })
            console.log(image);
        });
    }
}