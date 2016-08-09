import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Landing from './app/components/Landing';
import Register from './app/components/accounts/Register';
import Login from './app/components/accounts/Login';
import Dashboard from './app/components/Dashboard';
import { globals } from './app/styles';

class assemblies extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: null
    };
  }

  logout() {
    this.nav.push({ name: 'Landing' });
    this.updateUser(null);
  }

  updateUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Navigator
        style={globals.flex}
        ref={(el) => this.nav = el}
        initialRoute={{name: 'Landing'}}
        renderScene={(route, navigator) => {
          switch(route.name) {
            case 'Landing':
              return (
                <Landing navigator={navigator} />
            );
            case 'Dashboard':
              return (
                <Dashboard
                  navigator={navigator}
                  logout={this.logout}
                  updateUser={this.updateUser}
                  user={this.state.user} />
            );
            case 'Register':
              return (
                <Register navigator={navigator} />
            );
            case 'RegisterConfirmation':
              return (
                <RegisterConfirmation
                  {...route}
                  navigator={navigator}
                  updateUser={this.updateUser} />
            );
            case 'Login':
              return (
                <Login
                  navigator={navigator}
                  updateUser={this.updateUser} />
            );
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('assemblies', () => assemblies);
