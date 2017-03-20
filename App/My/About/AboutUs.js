import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ListView} from 'react-native';
import TopNavigator from  '../../Common/TopNavigator'

const DI = require('Dimensions');
const WINDOW = DI.get('window');
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export default class AboutUs extends Component {
    //返回
    _leftItemAction() {
        this.props.navigator.pop();
    }

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: ds.cloneWithRows(['0', '1', '2']),

        };
    }


    _renderRow(rowData, sectionID, rowID, highlightRow) {

        return (
            <View style={styles.firstCell}>
                <View style={{flexDirection:'column',marginLeft:10,}}>
                    <Text style={styles.maintext}>莲花GO</Text>
                    <Text style={styles.secondText}>软件版本：1.9.2</Text>
                </View>
                <View>
                    <Image style={styles.imageStyle}  source={require('../../Image/icon_about_us.png')}
                    />
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={styles.container}>
                <TopNavigator
                    title='关于我们'
                    leftItemFunc={this._leftItemAction.bind(this)}
                    leftImageSource={ require('../../Image/arrowto_left.png')}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}

                />
                {/*/!*<Image style={styles.imageStyle}*!/*/}
                {/*source={require('../Image/cartbig.png')}/>*/}
                {/*<Text style={styles.maintext}>购物车空空的，快去逛逛吧~</Text>*/}
                {/*<View style={styles.redButton}>*/}
                {/*<TouchableOpacity activeOpacity={0.6}>*/}
                {/*<Text style={styles.goBuyText}>*/}
                {/*去购物*/}
                {/*</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*</View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: '#e6e6e6',
        flexDirection: 'column',

    },
    firstCell: {
        height: 60,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyle: {
        width: 50,
        height: 50,
         margin: 5,
    },
    maintext: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        // textAlign: 'center',
    },
    secondText:{
      fontSize:12,
        color:'gray',
    },
    redButton: {
        backgroundColor: 'red',
        marginTop: 40,
        borderRadius: 5,
        width: 170,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    goBuyText: {
        color: 'white',
    },
});
