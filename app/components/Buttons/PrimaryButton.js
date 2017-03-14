import React, { PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const PrimaryButton = ({ text, onPress }) => (
  <View style={styles.primaryButtonContainer}>
    <TouchableOpacity
      onPress={onPress}
      style={styles.primaryButton}
    >
      <Text style={styles.primaryButtonText}>{text}</Text>
    </TouchableOpacity>
  </View>
);

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default PrimaryButton;
