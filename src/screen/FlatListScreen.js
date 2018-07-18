import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RefreshState} from '../weiget/RefreshListView';
import RefreshListView from '../weiget/RefreshListView'
import testData from '../cell/data'
import Cell from '../cell/Cell'
import BaseComponent from "../base/BaseComponent";

export default class FlatListScreen extends BaseComponent {
    state: {
        dataList: Array<any>,
        refreshState: number,
    }

    static navigationOptions = ({navigation}) => ({
        title: `Chat with ${navigation.state.params.user}`,
    });

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            refreshState: RefreshState.Idle,
        }
    }

    componentDidMount() {
        this.onHeaderRefresh()
    }

    onHeaderRefresh = () => {
        this.setState({refreshState: RefreshState.HeaderRefreshing})

        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }

            //获取测试数据
            let dataList = this.getTestList(true)

            this.setState({
                dataList: dataList,
                refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
            })
        }, 1000)
    }

    onFooterRefresh = () => {
        this.setState({refreshState: RefreshState.FooterRefreshing})

        // 模拟网络请求
        setTimeout(() => {
            // 模拟网络加载失败的情况
            if (Math.random() < 0.2) {
                this.setState({refreshState: RefreshState.Failure})
                return
            }

            //获取测试数据
            let dataList = this.getTestList(false)

            this.setState({
                dataList: dataList,
                refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        }, 1000)
    }

    // 获取测试数据
    getTestList(isReload: boolean): Array<Object> {
        let newList = testData.map((data) => {
            return {
                imageUrl: data.squareimgurl,
                title: data.mname,
                subtitle: `[${data.range}]${data.title}`,
                price: data.price,
                type: (data.price % 3 === 0) ? 1 : 2
            }
        })
        return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
    }

    keyExtractor = (item: any, index: number) => {
        return index.toString()
    }

    renderCell = (info: Object) => {
        // for (let i = 0; i < this.state.dataList.length; i++) {
        //     if (this.state.dataList[i] === info) {
        //         alert(i + "    dasdasd")
        //     }
        // }

        return <Cell info={info.item}/>
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <RefreshListView
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderCell}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.onHeaderRefresh}
                    onFooterRefresh={this.onFooterRefresh}
                />
            </View>
        );
    }
}