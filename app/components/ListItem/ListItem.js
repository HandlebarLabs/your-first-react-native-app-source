import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';

const ListItem = ({ contact, onPress }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  const name = `${capitalizeFirstLetter(contact.name.first)} ${capitalizeFirstLetter(contact.name.last)}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{ uri: contact.picture.thumbnail }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            style={styles.chevron}
            color={colors.subtleText}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
};

export default ListItem;
