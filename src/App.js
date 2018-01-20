import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import MoneyTracker from "./MoneyTracker";
import AppSettings from "./AppSettings";

export default class App extends Component<{}> {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="tracker" component={MoneyTracker} title="Money Tracker"/>
                    <Scene key="app_settings" component={AppSettings} title="Settings"/>
                </Scene>
            </Router>
        );
    }
}