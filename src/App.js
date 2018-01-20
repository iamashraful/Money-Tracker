/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    DrawerLayoutAndroid,
    Text,
    View
} from 'react-native';
import {Button} from 'nachos-ui';

export default class App extends Component<{}> {
    render() {
        let navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Button
                    style={{flex: 1}}
                    type="primary" kind="squared"
                    textStyle={{fontSize: 20}}
                >
                    Track
                </Button>
                <Button
                    style={{flex: 1, marginTop: 7}}
                    type="danger" kind="squared"
                    textStyle={{fontSize: 20}}
                >
                    Report
                </Button>
                <Button
                    style={{flex: 1, marginTop: 7}}
                    type="primary" kind="squared"
                    textStyle={{fontSize: 20}}
                >
                    Settings
                </Button>
                <Button
                    style={{flex: 1, marginTop: 7}}
                    type="primary" kind="squared"
                    textStyle={{fontSize: 20}}
                >
                    About
                </Button>

                <View style={{flex: 5}}/>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
