import App from './app/components/App';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

class IndexAndroid extends Component {
	render() {
		return (
      <App/>
		);
	}
}

AppRegistry.registerComponent('uaifood', () => IndexAndroid);
