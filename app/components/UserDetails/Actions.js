import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';
import { toPhoneNumber } from '../../helpers/string';
import Row from './Row';

const Actions = ({ email, phone, cell }) => (
  <View style={styles.actionContainer}>
    <Row
      label="email"
      body={email}
      actions={[
        { iconIOS: 'ios-mail', iconAndroid: 'md-mail' },
      ]}
    />
    <Row
      label="mobile"
      body={toPhoneNumber(cell)}
      actions={[
        { iconIOS: 'ios-call', iconAndroid: 'md-call' },
        { iconIOS: 'ios-text', iconAndroid: 'md-text' },
      ]}
    />
    <Row
      label="home"
      body={toPhoneNumber(phone)}
      actions={[
        { iconIOS: 'ios-call', iconAndroid: 'md-call' },
      ]}
    />
  </View>
);

Actions.propTypes = {
  email: PropTypes.string,
  phone: PropTypes.string,
  cell: PropTypes.string,
};

export default Actions;
