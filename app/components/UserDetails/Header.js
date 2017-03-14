import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';

const Header = ({ picture, name }) => (
  <View style={styles.headerContainer}>
    <Image
      source={{ uri: picture.large }}
      style={styles.image}
    />
    <Text style={styles.name}>
      {capitalizeFirstLetter(name.first)} {capitalizeFirstLetter(name.last)}
    </Text>
  </View>
);

Header.propTypes = {
  picture: PropTypes.object,
  name: PropTypes.object,
};

export default Header;
