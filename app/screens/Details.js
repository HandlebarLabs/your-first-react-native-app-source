/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
      </ScrollView>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

export default Details;
