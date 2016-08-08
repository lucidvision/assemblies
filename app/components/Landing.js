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

const BackgroundImage = require('../images/welcome@2x.png');
const Logo = require('../images/logo.png');
const styles = landingStyles;

class Landing extends Component {
  constructor() {
    super();
    this.visitDashboard = this.visitDashboard.bind(this);
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
