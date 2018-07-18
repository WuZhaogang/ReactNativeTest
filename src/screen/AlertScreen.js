import React from 'react';
import {
    Text,
    View
} from 'react-native';
import BaseComponent from "../base/BaseComponent";
import AlertDialog from "../weiget/AlertDialog"


export default class AlertScreen extends BaseComponent {

    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    constructor(prop) {
        super(prop)
        this.item;
        this.state = {
            alertDialogVisible: false
        }
    }

    showAlertDialog = () => {
        this.setState({
            alertDialogVisible: true
        });
    }

    dismissAlertDialog = () => {
        this.setState({
            alertDialogVisible: false
        });
    }

    render() {

        return (
            <View style={{
                flexDirection:'row',
                justifyContent: 'center',
                alignItems:'center',
            }} >
                <Text onPress={() => {
                    this.setState({
                        modalVisibility:true
                    })
                }} style={{

                }}>
                    点我就好了
                </Text>
                <AlertDialog title="标题" message="消息" ref="_customModal" visibility={this.state.modalVisibility}
                             buttonName="确定"
                             onClick={() => {
                                 this.setState({modalVisibility: false})
                             }}/>
            </View>
        );
    }
}