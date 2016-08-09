import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';
import Colors from '../styles/colors';
import { globals } from '../styles';
import { landingStyles } from '../styles';

const styles = landingStyles;

class Landing extends Component {
  constructor() {
    super();
    this.visitLogin = this.visitLogin.bind(this);
    this.visitDashboard = this.visitDashboard.bind(this);
  }

  visitLogin() {
    this.props.navigator.push({ name: 'Login' });
  }

  visitDashboard() {
    this.props.navigator.push({ name: 'Dashboard' });
  }

  render() {
    let titleConfig = { title: 'Landing', tintColor: 'white' };
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.backgroundImage}
            source={require('../images/welcome@2x.png')} />
        </View>
        <View style={globals.flexCenter}>
          <Image
            style={styles.logo}
            source={require('../images/logo.png')} />
          <Text style={[globals.lightText, globals.h2, globals.mb2]}>
            assemblies
          </Text>
          <Text style={[globals.lightText, globals.h4]}>
            Where Developers Connect
          </Text>
        </View>
        <TouchableOpacity
          style={[globals.button, globals.inactive, styles.loginButton]}
          onPress={this.visitLogin}>
          <Icon name='lock' size={36} color={Colors.brandPrimary} />
          <Text style={[globals.buttonText, globals.primaryText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globals.button}
          onPress={this.visitDashboard}>
          <Icon name='person' size={36} color='white' />
          <Text style={globals.buttonText}>
            Go to Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Landing;
