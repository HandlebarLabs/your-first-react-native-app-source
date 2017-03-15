import React, { Component, PropTypes } from 'react';
import { FlatList } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';
import { ListItem } from '../components/ListItem';

class Contacts extends Component {
  handleRowPress = (contact) => {
    this.props.navigation.navigate('Details', contact);
  };

  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) =>
          <ListItem contact={item} onPress={() => this.handleRowPress(item)} />
        }
        keyExtractor={(item) => item.email}
      />
    );
  }
}

Contacts.propTypes = {
  navigation: PropTypes.object,
};

export default Contacts;
