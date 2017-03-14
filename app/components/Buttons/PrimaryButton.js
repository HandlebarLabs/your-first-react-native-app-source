import React from 'react';
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

export default PrimaryButton;
