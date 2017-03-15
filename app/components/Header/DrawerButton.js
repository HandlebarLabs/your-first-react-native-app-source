import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const DrawerButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.drawerButtonContainer}>
    <Icon name="md-menu" size={22} />
  </TouchableOpacity>
);

DrawerButton.propTypes = {
  onPress: PropTypes.func,
};

export default DrawerButton;
