import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const EditButton = () => (
  <View style={styles.editButtonContainer}>
    <TouchableOpacity
      onPress={() => null}
      style={styles.editButton}
    >
      <Text style={styles.editButtonText}>Edit Profile</Text>
    </TouchableOpacity>
  </View>
);

export default EditButton;
