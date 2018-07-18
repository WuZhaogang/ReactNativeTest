import React, {
    PureComponent
} from 'react';
import {
    View,
    StyleSheet,
    Modal,
    Text,
    TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;
const MARGIN = 30;

const noop = () => {};


export default class AlertDialog extends PureComponent {
    static propTypes = {
        title:PropTypes.string.isRequired, // 对话框标题
        message:PropTypes.string.isRequired, // 对话框标题
        buttonName: PropTypes.string.isRequired,  // 按钮名字
        onClick: PropTypes.func.isRequired,  // 回调函数
    };
    constructor(props) {
        super(props);
        // 绑定事件
        this._onClick  = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }
    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.pageName);  // 执行回调
        }
    }
    render() {
        return (
            <Modal
                visible={this.props.visibility}
                transparent={true}
                animationType={'fade'}//none slide fade
                onRequestClose={()=>this.setState({visibility:false})}
            >
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{this.props.title}</Text>
                        <Text style={styles.modalMessage}>{this.props.message}</Text>
                        <View style={styles.horizonLine}/>
                        <View style={styles.row}>
                            <TouchableHighlight style={styles.leftBn} onPress={this.props.onClick} >
                                <Text style={styles.leftBnText}>{this.props.buttonName}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer: {
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 10,
        backgroundColor: "white",
        alignItems:'center',
    },
    modalTitle: {
        color: '#000000',
        fontSize: 16,
        marginTop: 10,
    },
    modalMessage:{
        color:'#8a8a8a',
        fontSize:14,
        margin:10,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
    },
    horizonLine:{
        backgroundColor:'#8a8a8a',
        height:0.5,

        alignSelf:'stretch'
    },
    verticalLine:{
        backgroundColor:'#9f9fa3',
        width:0.4,
        alignSelf:'stretch'
    },
    leftBn:{
        borderBottomLeftRadius:3,
        padding:7,
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    leftBnText:{
        fontSize:16,
        color:'#00A9F2',
    },
    rightBn:{
        borderBottomRightRadius:3,
        padding:7,
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    rightBnText:{
        fontSize:16,
        color:'#00A9F2'
    }
});
